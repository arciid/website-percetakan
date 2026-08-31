const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const css = fs.readFileSync('style.css', 'utf8');

test('catalog CSS preserves the negative-space grid contract', () => {
  assert.match(css, /\.product-grid\s*\{[^}]*repeat\(4,/s);
  assert.match(css, /\.product-photo\s*\{[^}]*aspect-ratio:\s*1\s*\/\s*1/s);
  assert.match(css, /\.product-photo img\s*\{[^}]*object-fit:\s*contain/s);
  assert.match(css, /@media \(max-width:\s*1040px\)[\s\S]*?\.product-grid\s*\{[^}]*repeat\(2,/);
  assert.match(css, /@media \(max-width:\s*520px\)[\s\S]*?\.product-grid\s*\{[^}]*grid-template-columns:\s*1fr/);
});

test('interactive CSS retains compact controls and user preferences', () => {
  assert.doesNotMatch(css, /padding:\s*99px/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media \(prefers-reduced-motion:\s*reduce\)/);
});
