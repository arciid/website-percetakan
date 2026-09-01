const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');

test('page exposes separated assets and progressive WhatsApp fallback', () => {
  assert.match(html, /<link rel="stylesheet" href="style\.css">/);
  assert.match(html, /<script src="script\.js" defer><\/script>/);
  assert.doesNotMatch(html, /<style\b/);
  assert.match(html, /https:\/\/wa\.me\/6282250965219/);
});

test('menu, search status, and modal expose their accessibility contract', () => {
  assert.match(html, /id="menuToggle"[^>]*aria-expanded="false"[^>]*aria-controls="navLinks"/);
  assert.match(html, /id="productCount"[^>]*role="status"[^>]*aria-live="polite"/);
  assert.match(html, /role="dialog"[^>]*aria-modal="true"[^>]*aria-labelledby="modalTitle"/);
  assert.match(html, /id="galleryDots"[^>]*role="group"[^>]*aria-label="Galeri produk"/);
});

test('every DOM id consumed by the controller exists in the page', () => {
  const ids = [
    'menuToggle', 'navLinks', 'search', 'filters', 'productCount', 'grid', 'modal',
    'modalClose', 'modalTitle', 'modalSub', 'modalCat', 'modalImg', 'modalFallback',
    'galleryDots', 'configOptions', 'sizeGroup', 'sizeInput', 'qty', 'qtyUnit',
    'qtyMinus', 'qtyPlus', 'notes', 'orderError', 'orderButton',
  ];
  ids.forEach((id) => assert.match(html, new RegExp(`id="${id}"`), `missing #${id}`));
});

test('portfolio presents six accessible, lazy-loaded work images', () => {
  const portfolio = html.match(/<section class="section works"[\s\S]*?<\/section>/)?.[0] || '';
  const images = [...portfolio.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);

  assert.equal(images.length, 6);
  images.forEach((image) => {
    assert.match(image, /alt="[^"]+"/);
    assert.match(image, /loading="lazy"/);
    assert.match(image, /decoding="async"/);
  });
});
