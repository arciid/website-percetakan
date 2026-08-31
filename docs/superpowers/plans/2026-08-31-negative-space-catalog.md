# Negative-Space Catalog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a responsive industrial-premium catalog with square product cards, reliable configuration, accessible interactions, and complete WhatsApp order messages.

**Architecture:** Keep the site dependency-free and split the current monolith into semantic `index.html`, presentation-only `style.css`, and a testable `script.js`. Pure catalog and order functions are exported conditionally for Node tests while browser initialization runs only when `document` exists.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js built-in test runner, local browser verification.

**Spec:** `docs/superpowers/specs/2026-08-31-negative-space-catalog-design.md`

## Global Constraints

- Preserve all 23 existing products and seven categories.
- Use only existing local images; do not download or generate images.
- Use WhatsApp number `6282250965219`.
- Use square `1:1` card media with `object-fit: contain`.
- Use four desktop columns, two tablet columns, and one mobile column.
- Do not add a framework, package dependency, backend, build step, pricing, analytics, or fabricated business details.
- Missing images must show an intentional category placeholder and remain orderable.
- Required size fields must be validated before WhatsApp opens.

---

### Task 1: Testable Catalog and Order Domain Logic

**Files:**
- Create: `script.js`
- Create: `tests/catalog.test.js`

**Interfaces:**
- Produces: `products: Product[]`, `getCategories(products): string[]`, `searchProducts(products, category, query): Product[]`, `normalizePhone(value): string`, `changeQuantity(current, delta, rules): number`, `buildWhatsAppMessage(product, selections, order): string`, and `buildWhatsAppUrl(phone, message): string`.
- `Product` fields: `id`, `name`, `sub`, `category`, `cover`, `images`, `options`, `unit`, `defaultQty`, `qtyStep`, `minQty`, `requiresSize`, and `accent`.

- [ ] **Step 1: Write failing domain tests**

Create `tests/catalog.test.js` with Node's built-in test API. Assert exactly 23 unique IDs, seven categories, search by product name and option value, Indonesian phone normalization, product-specific quantity clamping, encoded WhatsApp URL generation, and inclusion of selected options, size, quantity/unit, and notes in the message.

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  products, getCategories, searchProducts, normalizePhone,
  changeQuantity, buildWhatsAppMessage, buildWhatsAppUrl
} = require('../script.js');

test('catalog preserves 23 unique products and seven categories', () => {
  assert.equal(products.length, 23);
  assert.equal(new Set(products.map(product => product.id)).size, 23);
  assert.equal(getCategories(products).length, 7);
});

test('search includes option values', () => {
  assert.deepEqual(searchProducts(products, 'SEMUA', 'scotlite').map(p => p.id), ['stiker']);
});

test('phone and order message are production-ready', () => {
  assert.equal(normalizePhone('082250965219'), '6282250965219');
  const message = buildWhatsAppMessage(products[0], { BAHAN: 'Vinyl' }, {
    size: '10 × 10 cm', quantity: 100, notes: 'Potong rapi'
  });
  assert.match(message, /Stiker Custom/);
  assert.match(message, /BAHAN: Vinyl/);
  assert.match(message, /Ukuran: 10 × 10 cm/);
  assert.match(message, /Jumlah: 100 pcs/);
  assert.match(message, /Catatan: Potong rapi/);
  assert.match(buildWhatsAppUrl('6282250965219', message), /^https:\/\/wa\.me\/6282250965219\?text=/);
});
```

- [ ] **Step 2: Run tests and verify the expected failure**

Run:

```powershell
& 'C:\Users\PJ\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/catalog.test.js
```

Expected: FAIL because `script.js` and its exports do not exist.

- [ ] **Step 3: Implement the catalog and pure functions**

Move all 23 existing product records into `script.js`, enrich each with explicit ordering rules, and implement the exported pure functions. Search text must flatten names, descriptions, categories, option group names, and option values. Quantity changes must clamp to `minQty` and use `qtyStep`.

Use this module boundary:

```js
const publicApi = {
  products, getCategories, searchProducts, normalizePhone,
  changeQuantity, buildWhatsAppMessage, buildWhatsAppUrl
};

if (typeof module !== 'undefined' && module.exports) module.exports = publicApi;
if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', initApp);
```

- [ ] **Step 4: Run domain tests and verify they pass**

Run the command from Step 2. Expected: all tests PASS with zero failures.

- [ ] **Step 5: Commit the domain layer**

```bash
git add script.js tests/catalog.test.js
git commit -m "feat: add testable catalog order logic"
```

### Task 2: Semantic Page Structure and Progressive Fallback

**Files:**
- Modify: `index.html`
- Create: `tests/structure.test.js`

**Interfaces:**
- Consumes DOM IDs expected by `initApp`: `menuToggle`, `navLinks`, `search`, `filters`, `productCount`, `grid`, `modal`, `modalTitle`, `modalSub`, `modalCat`, `modalImg`, `modalFallback`, `galleryDots`, `configOptions`, `sizeGroup`, `sizeInput`, `qty`, `qtyUnit`, `notes`, `orderError`, and `orderButton`.
- Produces semantic containers and accessible controls used by Task 3.

- [ ] **Step 1: Write failing structure tests**

Create `tests/structure.test.js` that reads `index.html` and asserts one external `style.css`, one deferred `script.js`, no inline `<style>` or product-data script, a dialog with `aria-modal="true"`, a fallback direct link to `https://wa.me/6282250965219`, the search results status region, and mobile menu ARIA attributes.

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');

test('page loads separated assets and exposes accessible controls', () => {
  assert.match(html, /href="style\.css"/);
  assert.match(html, /src="script\.js"[^>]*defer/);
  assert.doesNotMatch(html, /<style[\s>]/);
  assert.match(html, /role="dialog"/);
  assert.match(html, /aria-modal="true"/);
  assert.match(html, /id="productCount"[^>]*role="status"/);
  assert.match(html, /aria-controls="navLinks"/);
  assert.match(html, /https:\/\/wa\.me\/6282250965219/);
});
```

- [ ] **Step 2: Run tests and verify failure against the monolith**

Run:

```powershell
& 'C:\Users\PJ\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/structure.test.js
```

Expected: FAIL because CSS/JS are inline and accessible dialog/menu attributes are missing.

- [ ] **Step 3: Rewrite `index.html` as semantic markup**

Preserve the existing marketing copy and section order. Link `style.css`, load `script.js` with `defer`, replace inline event handlers with IDs/data attributes, provide direct WhatsApp consultation anchors for progressive enhancement, add form labels, accessible dialog markup, and a result-count status.

- [ ] **Step 4: Run structure tests and verify they pass**

Run the command from Step 2. Expected: PASS.

- [ ] **Step 5: Commit semantic markup**

```bash
git add index.html tests/structure.test.js
git commit -m "refactor: add semantic catalog structure"
```

### Task 3: Negative-Space Responsive Presentation

**Files:**
- Modify: `style.css`
- Create: `tests/styles.test.js`

**Interfaces:**
- Consumes the semantic classes and IDs from Task 2.
- Produces layout breakpoints, square card media, category placeholders, compact options, modal layout, focus states, and reduced-motion behavior.

- [ ] **Step 1: Write failing CSS contract tests**

Create `tests/styles.test.js`. Assert that `.product-photo` has `aspect-ratio: 1`, product images use `object-fit: contain`, `.grid` defaults to four columns, tablet and phone media queries change it to two and one columns, `.option` does not contain `99px`, `:focus-visible` exists, and `prefers-reduced-motion` is handled.

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const css = fs.readFileSync('style.css', 'utf8');

test('catalog uses negative-space square card layout', () => {
  assert.match(css, /\.product-photo\s*\{[^}]*aspect-ratio:\s*1(?:\s*\/\s*1)?/s);
  assert.match(css, /\.product-photo img\s*\{[^}]*object-fit:\s*contain/s);
  assert.match(css, /\.grid\s*\{[^}]*grid-template-columns:\s*repeat\(4,\s*1fr\)/s);
  assert.doesNotMatch(css, /padding:\s*99px/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
});
```

- [ ] **Step 2: Run tests and verify failure against the old stylesheet**

Run:

```powershell
& 'C:\Users\PJ\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/styles.test.js
```

Expected: FAIL because the existing stylesheet is disconnected legacy CSS.

- [ ] **Step 3: Replace `style.css` with the complete visual system**

Move and refine the active inline styles into `style.css`. Apply generous section spacing, restrained borders/shadows, four/two/one-column catalog breakpoints, square contained media, equal-height card bodies, category-accent placeholders, compact option pills, a two-column desktop modal, stacked mobile modal, a real mobile menu, and reduced-motion overrides.

- [ ] **Step 4: Run CSS contract tests and verify they pass**

Run the command from Step 2. Expected: PASS.

- [ ] **Step 5: Commit presentation changes**

```bash
git add style.css tests/styles.test.js
git commit -m "feat: apply negative-space responsive design"
```

### Task 4: Accessible DOM Controller and Ordering Flow

**Files:**
- Modify: `script.js`
- Modify: `tests/catalog.test.js`

**Interfaces:**
- Consumes DOM contract from Task 2 and styles from Task 3.
- Produces `initApp()`, product rendering, filter/search state, modal lifecycle, explicit gallery selection, inline validation, and WhatsApp opening.

- [ ] **Step 1: Add failing behavior-focused tests for validation and mappings**

Extend `tests/catalog.test.js` with `validateOrder(product, order): string[]` tests: required-size products reject blank size, optional-size products accept blank size, notes remain optional, and only declared image mappings return a gallery index.

```js
test('required product size is validated', () => {
  const banner = products.find(product => product.id === 'banner');
  assert.deepEqual(validateOrder(banner, { size: '' }), ['Ukuran wajib diisi.']);
  assert.deepEqual(validateOrder(banner, { size: '100 × 200 cm' }), []);
});
```

- [ ] **Step 2: Run tests and verify the new assertion fails**

Run all tests:

```powershell
& 'C:\Users\PJ\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/*.test.js
```

Expected: FAIL because `validateOrder` is not exported.

- [ ] **Step 3: Implement browser initialization and interactions**

Implement event listeners without inline handlers. Render keyboard-operable card buttons, filters, result count, and fallbacks. Manage modal focus, Escape, overlay close, focus restoration, body scroll lock, selected options, product-specific quantity/unit, size visibility, notes reset, inline errors, and safe WhatsApp URL opening with `noopener`.

Mobile navigation must toggle `aria-expanded`, close after navigation, and close on Escape. Broken images must hide themselves and reveal the adjacent placeholder.

- [ ] **Step 4: Run the full automated suite**

Run the command from Step 2. Expected: all tests PASS with zero failures.

- [ ] **Step 5: Commit the interactive flow**

```bash
git add script.js tests/catalog.test.js
git commit -m "feat: add accessible catalog ordering flow"
```

### Task 5: Browser Verification and Final Cleanup

**Files:**
- Modify if defects are found: `index.html`, `style.css`, `script.js`, `tests/*.test.js`

**Interfaces:**
- Consumes the complete site.
- Produces a browser-verified release candidate with no console errors or known contract failures.

- [ ] **Step 1: Run the complete automated test suite**

```powershell
& 'C:\Users\PJ\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/*.test.js
```

Expected: 100% PASS, zero failures.

- [ ] **Step 2: Serve the site locally**

Use the bundled Node executable to run a read-only static server at `http://127.0.0.1:4173/`.

- [ ] **Step 3: Verify desktop behavior**

At a desktop viewport, confirm four square cards per row, contained imagery, aligned card actions, search across options, seven filters, result count, missing-image placeholders, modal layout, configuration selection, quantity/unit rules, size validation, and the encoded WhatsApp destination `6282250965219` without sending a message.

- [ ] **Step 4: Verify tablet and mobile behavior**

Confirm two columns at tablet width and one at phone width. Verify the expandable menu, stacked CTA/section headers, stacked modal, usable option controls, and no horizontal overflow.

- [ ] **Step 5: Verify accessibility behavior**

Use keyboard navigation to open a product, move through controls, close with Escape, and confirm focus returns to the triggering card. Check visible focus states and inspect browser console logs for errors.

- [ ] **Step 6: Re-run tests after any browser-discovered fixes**

Run the full command from Step 1. Expected: all tests PASS.

- [ ] **Step 7: Verify repository state and commit final fixes**

```bash
git status --short
git diff --check
git add index.html style.css script.js tests
git commit -m "fix: finalize catalog browser verification"
```

Expected: no unintended files, no whitespace errors, and only verified final corrections in the commit.
