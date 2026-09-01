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

test('portrait gallery images are constrained to the modal frame', () => {
  assert.match(css, /\.modal-media-main img\s*\{[^}]*position:\s*absolute[^}]*inset:\s*0[^}]*object-fit:\s*contain/s);
});

test('hero logo uses a proportional circular frame across breakpoints', () => {
  assert.match(css, /\.hero-logo-card\s*\{[^}]*width:\s*310px[^}]*border-radius:\s*50%/s);
  assert.match(css, /@media \(max-width:\s*780px\)[\s\S]*?\.hero-logo-card\s*\{[^}]*width:\s*220px/);
});

test('mobile modal keeps primary controls reachable while scrolling', () => {
  assert.match(css, /@media \(max-width:\s*780px\)[\s\S]*?\.modal-close\s*\{[^}]*position:\s*fixed/);
  assert.match(css, /@media \(max-width:\s*780px\)[\s\S]*?\.order-button\s*\{[^}]*position:\s*sticky[^}]*bottom:\s*0/);
});

test('portfolio gallery keeps a featured desktop composition and a mobile column', () => {
  assert.match(css, /\.portfolio-grid\s*\{[^}]*grid-template-columns:\s*repeat\(12,/s);
  assert.match(css, /\.portfolio-card:first-child\s*\{[^}]*grid-column:\s*span 7/s);
  assert.match(css, /@media \(max-width:\s*520px\)[\s\S]*?\.portfolio-grid\s*\{[^}]*grid-template-columns:\s*1fr/);
});
