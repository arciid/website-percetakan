const test = require('node:test');
const assert = require('node:assert/strict');

const {
  products,
  getCategories,
  searchProducts,
  normalizePhone,
  changeQuantity,
  validateOrder,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  productCardMarkup,
  resolveImageIndex,
} = require('../script.js');

test('catalog exposes 23 unique products across seven categories', () => {
  assert.equal(products.length, 23);
  assert.equal(new Set(products.map((product) => product.id)).size, 23);
  assert.deepEqual(getCategories(products), [
    'STIKER', 'BANNER', 'BENDERA', 'INDOOR', 'KERTAS', 'AKRILIK', 'MERCHANDISE',
  ]);
});

test('search finds products by configuration values and respects category', () => {
  assert.deepEqual(searchProducts(products, 'SEMUA', 'scotlite').map((product) => product.id), ['stiker']);
  assert.deepEqual(searchProducts(products, 'KERTAS', '2 sisi').map((product) => product.id), ['kertas-a3']);
  assert.deepEqual(searchProducts(products, 'MERCHANDISE', '2 sisi').map((product) => product.id), ['tumbler', 'ganci']);
});

test('Indonesian phone numbers normalize to international digits', () => {
  assert.equal(normalizePhone('0822-5096-5219'), '6282250965219');
  assert.equal(normalizePhone('+62 822 5096 5219'), '6282250965219');
});

test('quantity follows product increments without crossing its minimum', () => {
  const sticker = products.find((product) => product.id === 'stiker');
  const eventDesk = products.find((product) => product.id === 'eventdesk');

  assert.equal(changeQuantity(100, -1, sticker), 90);
  assert.equal(changeQuantity(10, -1, sticker), 10);
  assert.equal(changeQuantity(1, -1, eventDesk), 1);
  assert.equal(changeQuantity(1, 1, eventDesk), 2);
});

test('products that require dimensions reject an empty size', () => {
  const banner = products.find((product) => product.id === 'banner');
  const mug = products.find((product) => product.id === 'mug');

  assert.deepEqual(validateOrder(banner, { size: '' }), ['Ukuran wajib diisi.']);
  assert.deepEqual(validateOrder(banner, { size: '100 × 200 cm' }), []);
  assert.deepEqual(validateOrder(mug, { size: '' }), []);
});

test('WhatsApp message contains the complete customer configuration', () => {
  const sticker = products.find((product) => product.id === 'stiker');
  const message = buildWhatsAppMessage(
    sticker,
    { BAHAN: 'Vinyl', LAMINATING: 'Doff', FINISHING: 'Diecut Pola' },
    { size: '10 × 10 cm', quantity: 100, notes: 'Potong rapi' },
  );

  assert.equal(message, [
    'Halo Borneo Grafisindo, saya mau order/tanya:',
    '',
    'Produk: Stiker Custom',
    'Kategori: STIKER',
    'BAHAN: Vinyl',
    'LAMINATING: Doff',
    'FINISHING: Diecut Pola',
    'Ukuran: 10 × 10 cm',
    'Jumlah: 100 pcs',
    'Catatan: Potong rapi',
  ].join('\n'));

  const url = buildWhatsAppUrl('082250965219', message);
  assert.ok(url.startsWith('https://wa.me/6282250965219?text='));
  assert.equal(decodeURIComponent(url.split('?text=')[1]), message);
});

test('product card keeps flow content outside its interactive button', () => {
  const markup = productCardMarkup(products[0]);
  const button = markup.match(/<button\b[\s\S]*?<\/button>/)?.[0] || '';

  assert.match(button, /<span class="sr-only">Lihat dan pesan Stiker Custom<\/span>/);
  assert.doesNotMatch(button, /<(?:div|h[1-6]|p|article)\b/);
  assert.match(markup, /<h3>Stiker Custom<\/h3>/);
});

test('option images use explicit mappings without fuzzy filename guesses', () => {
  const sticker = products.find((product) => product.id === 'stiker');
  const tumbler = products.find((product) => product.id === 'tumbler');

  assert.equal(resolveImageIndex(sticker, 'Scotlite'), 1);
  assert.equal(resolveImageIndex(sticker, 'Doff'), 7);
  assert.equal(resolveImageIndex(sticker, 'Tanpa Laminating'), null);
  assert.equal(resolveImageIndex(tumbler, '2 Sisi'), 2);
  assert.equal(resolveImageIndex(tumbler, 'sisi'), null);
});
