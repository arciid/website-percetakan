'use strict';

const BUSINESS_PHONE = '6282250965219';

const products = [
  {
    id: 'stiker', name: 'Stiker Custom', sub: 'Vinyl • Scotlite • Hologram • Chrome', category: 'STIKER',
    cover: 'images/stiker/cover.webp',
    images: ['images/stiker/vinyl.webp', 'images/stiker/scotlite.webp', 'images/stiker/kromo.webp', 'images/stiker/transparan.webp', 'images/stiker/hologram.webp', 'images/stiker/chrome.webp', 'images/stiker/laminating-glossy.webp', 'images/stiker/laminating-doff.webp', 'images/stiker/laminating-glitter.webp', 'images/stiker/kisscut.webp', 'images/stiker/diecut.webp'],
    options: [['BAHAN', ['Vinyl', 'Scotlite', 'Kromo', 'Transparan', 'Hologram', 'Chrome']], ['LAMINATING', ['Tanpa Laminating', 'Glossy', 'Doff', 'Glitter']], ['FINISHING', ['Potong Kotak / Strip', 'Kisscut', 'Diecut Pola']]],
    unit: 'pcs', defaultQty: 100, qtyStep: 10, minQty: 10, requiresSize: true, accent: 'yellow',
  },
  {
    id: 'name-tag-resin', name: 'Name Tag Resin', sub: 'Efek 3D Tebal • Dome / Resin Finish', category: 'STIKER',
    cover: 'images/stiker/timbul-cover.webp', images: ['images/stiker/timbul-resin.webp', 'images/stiker/vinyl.webp', 'images/stiker/chrome.webp', 'images/stiker/gold.webp'],
    options: [['BAHAN DASAR', ['Vinyl Putih', 'Chrome', 'Gold']], ['FINISHING', ['Resin']], ['BENTUK POTONG', ['Sesuai Pola']]],
    unit: 'pcs', defaultQty: 50, qtyStep: 10, minQty: 10, requiresSize: true, accent: 'yellow',
  },
  {
    id: 'banner', name: 'Banner Outdoor / Event', sub: 'Flexi Standar • Korea • Backlite', category: 'BANNER',
    cover: 'images/banner/cover.webp', images: ['images/banner/vinyl-280gr.webp', 'images/banner/korea-440gr.webp', 'images/banner/backlite.webp'],
    options: [['BAHAN', ['Vinyl 280gr', 'Korea 440gr', 'Backlite']], ['FINISHING', ['Mata Ayam', 'Les Putih', 'Lipat Keliling', 'Lipat Keliling + Mata Ayam', 'Selongsong Tiang']]],
    unit: 'lembar', defaultQty: 1, qtyStep: 1, minQty: 1, requiresSize: true, accent: 'red',
  },
  {
    id: 'xbanner', name: 'X-Banner', sub: 'Display Portable + Rangka X-Stand (60 × 160 cm)', category: 'BANNER',
    cover: 'images/banner/x-banner-cover.webp', images: ['images/banner/x-banner-vinyl.webp', 'images/banner/x-banner-korea.webp', 'images/banner/x-banner-albatros.webp'],
    options: [['BAHAN', ['Vinyl', 'Korea', 'Albatros']], ['FINISHING', ['Mata Ayam 4 Sudut (Standar X-Banner)']]],
    unit: 'set', defaultQty: 1, qtyStep: 1, minQty: 1, requiresSize: false, accent: 'red',
  },
  {
    id: 'rollbanner', name: 'Roll Banner', sub: 'Display Gulung Praktis • Albatros High Resolution', category: 'BANNER',
    cover: 'images/banner/roll-banner-cover.webp', images: ['images/banner/roll-banner-60x160.webp', 'images/banner/roll-banner-85x200.webp'],
    options: [['BAHAN', ['Albatros']], ['UKURAN', ['60 × 160 cm', '85 × 200 cm']], ['LAMINATING', ['Tanpa Laminating', 'Glossy', 'Doff']]],
    unit: 'set', defaultQty: 1, qtyStep: 1, minQty: 1, requiresSize: false, accent: 'red',
  },
  {
    id: 'bendera', name: 'Bendera & Umbul-Umbul', sub: 'Kain Cloth • TC • Satin', category: 'BENDERA',
    cover: 'images/bendera/cover.webp', images: ['images/bendera/cloth-banner.webp', 'images/bendera/kain-tc.webp', 'images/bendera/kain-satin.webp'],
    options: [['BAHAN', ['Cloth Banner', 'Kain TC', 'Kain Satin']], ['FINISHING', ['Lem Tali / Keliling', 'Selongsong Tiang', 'Tanpa Finishing (Potong Pas)']]],
    unit: 'pcs', defaultQty: 1, qtyStep: 1, minQty: 1, requiresSize: true, accent: 'yellow',
  },
  {
    id: 'indoor', name: 'Cetak Indoor', sub: 'High Detail Visual • Indoor Grade', category: 'INDOOR',
    cover: 'images/indoor/cover.webp', images: ['images/indoor/maxdecal.webp', 'images/indoor/ritrama.webp', 'images/indoor/transparan.webp', 'images/indoor/hologram.webp', 'images/indoor/one-way.webp', 'images/indoor/albatros.webp', 'images/indoor/chrome.webp'],
    options: [['VISUAL HASIL', ['Eco Solvent', 'Print UV']], ['BAHAN', ['Maxdecal', 'Ritrama', 'Transparan', 'Hologram', 'One Way', 'Albatros', 'Chrome']], ['LAMINATING', ['Tanpa Laminating', 'Glossy', 'Doff', 'Glitter']], ['FINISHING', ['Potong']]],
    unit: 'lembar', defaultQty: 1, qtyStep: 1, minQty: 1, requiresSize: true, accent: 'yellow',
  },
  {
    id: 'eventdesk', name: 'Event Desk Portable', sub: 'Meja Display Booth Promosi', category: 'INDOOR',
    cover: 'images/indoor/event-desk-cover.webp', images: ['images/indoor/event-desk.webp'],
    options: [['LAMINATING', ['Tanpa Laminating', 'Glossy', 'Doff']]],
    unit: 'set', defaultQty: 1, qtyStep: 1, minQty: 1, requiresSize: false, accent: 'yellow',
  },
  {
    id: 'kertas-a3', name: 'Cetak Kertas A3+', sub: 'Brosur • Sertifikat • Kartu • Cover', category: 'KERTAS',
    cover: 'images/kertas/cover.webp', images: ['images/kertas/artpaper-260-gr.webp', 'images/kertas/artpaper-190-gr.webp', 'images/kertas/artpaper-120-gr.webp', 'images/kertas/pindo-cad.webp', 'images/kertas/concord.webp', 'images/kertas/hvs-100-gr.webp', 'images/kertas/linen.webp', 'images/kertas/rajawali.webp', 'images/kertas/duplex.webp', 'images/kertas/artpaper-300-gr.webp', 'images/kertas/new-top-200-gr.webp', 'images/kertas/ivory-230-gr.webp', 'images/kertas/via-felt-216-gr.webp'],
    options: [['BAHAN', ['Artpaper 260 gr', 'Artpaper 190 gr', 'Artpaper 120 gr', 'Pindo Cad', 'Concord', 'HVS 100 gr', 'Linen', 'Rajawali', 'Duplex', 'Artpaper 300 gr', 'New Top 200 gr', 'Ivory 230 gr', 'Via Felt 216 gr']], ['SISI CETAK', ['1 Sisi', '2 Sisi']], ['LAMINATING', ['Tanpa Laminating', 'Glossy', 'Doff', 'Glitter']], ['FINISHING', ['Potong Cutter', 'Staples Tengah', 'Jilid Samping', 'Spiral', 'Die Cut']]],
    unit: 'lembar', defaultQty: 100, qtyStep: 10, minQty: 10, requiresSize: false, accent: 'red',
  },
  {
    id: 'nota-kwitansi', name: 'Nota & Kwitansi', sub: 'NCR Custom • Buku Pembukuan', category: 'KERTAS',
    cover: 'images/kertas/nota-cover.webp', images: ['images/kertas/ncr-1-ply.webp', 'images/kertas/ncr-2-ply.webp', 'images/kertas/ncr-3-ply.webp', 'images/kertas/ncr-4-ply.webp'],
    options: [['BAHAN / PLY', ['NCR 1 Ply (HVS)', 'NCR 2 Ply', 'NCR 3 Ply', 'NCR 4 Ply']], ['UKURAN', ['1 Folio (F4)', '1/2 Folio', '1/3 Folio', '1/4 Folio']], ['CETAK', ['1 Warna', 'Full Color']], ['FINISHING', ['Lem Samping (Bloklem)', 'Porporasi + Penomoran', 'Porporasi (Tanpa Penomoran)']]],
    unit: 'buku', defaultQty: 10, qtyStep: 10, minQty: 10, requiresSize: false, accent: 'red',
  },
  ...[
    ['akrilik-gold', 'Akrilik + Kaki Kotak + Gold', 'Display Eksklusif Kaki Gold', 'images/akrilik/kaki-gold-cover.webp', ['images/akrilik/kaki-gold.webp', 'images/akrilik/box-akrilik.webp']],
    ['akrilik-kotak', 'Akrilik + Kaki Kotak', 'Display Akrilik Standing', 'images/akrilik/kaki-kotak-cover.webp', ['images/akrilik/kaki-kotak.webp', 'images/akrilik/box-akrilik.webp']],
    ['akrilik-timpa', 'Akrilik + Kaki Timpa 2', 'Display Layered 2 Tingkat', 'images/akrilik/timpa-2-cover.webp', ['images/akrilik/timpa-2.webp', 'images/akrilik/box-akrilik.webp']],
  ].map(([id, name, sub, cover, images]) => ({ id, name, sub, category: 'AKRILIK', cover, images, options: [['ADD-ON', ['Tanpa Box', 'Box Akrilik']]], unit: 'pcs', defaultQty: 1, qtyStep: 1, minQty: 1, requiresSize: true, accent: 'yellow' })),
  {
    id: 'tentcard', name: 'Tent Card Akrilik', sub: 'Daftar Menu & Table Display', category: 'AKRILIK', cover: 'images/akrilik/tent-card-cover.webp', images: ['images/akrilik/a6.webp', 'images/akrilik/a5.webp', 'images/akrilik/a4.webp'], options: [['UKURAN', ['A6', 'A5', 'A4']]], unit: 'pcs', defaultQty: 1, qtyStep: 1, minQty: 1, requiresSize: false, accent: 'yellow',
  },
  {
    id: 'nomor-rumah', name: 'Nomor Rumah Akrilik', sub: 'Signage Nomor Rumah Custom', category: 'AKRILIK', cover: 'images/akrilik/nomor-rumah-cover.webp', images: ['images/akrilik/nomor-rumah.webp'], options: [], unit: 'pcs', defaultQty: 1, qtyStep: 1, minQty: 1, requiresSize: true, accent: 'yellow',
  },
  {
    id: 'nomor-meja', name: 'Nomor Meja Akrilik', sub: 'Sign Meja Cafe & Resto', category: 'AKRILIK', cover: 'images/akrilik/nomor-meja-cover.webp', images: ['images/akrilik/nomor-meja.webp'], options: [], unit: 'pcs', defaultQty: 1, qtyStep: 1, minQty: 1, requiresSize: true, accent: 'yellow',
  },
  {
    id: 'tumbler', name: 'Tumbler Custom', sub: 'Souvenir • Custom Print UV', category: 'MERCHANDISE', cover: 'images/merchandise/tumbler-cover.webp', images: ['images/merchandise/tumbler.webp', 'images/merchandise/tumbler-1-sisi.webp', 'images/merchandise/tumbler-2-sisi.webp', 'images/merchandise/tumbler-keliling.webp'], options: [['SISI CETAK', ['1 Sisi', '2 Sisi', 'Print Keliling (Rotary)']]], unit: 'pcs', defaultQty: 12, qtyStep: 1, minQty: 1, requiresSize: false, accent: 'red',
  },
  {
    id: 'mug', name: 'Mug Custom', sub: 'Souvenir Keramik Custom', category: 'MERCHANDISE', cover: 'images/merchandise/mug-cover.webp', images: ['images/merchandise/mug-standard.webp', 'images/merchandise/mug-custom.webp'], options: [['MODEL', ['Mug Standard', 'Mug Custom']]], unit: 'pcs', defaultQty: 12, qtyStep: 1, minQty: 1, requiresSize: false, accent: 'red',
  },
  {
    id: 'medali', name: 'Medali Wisuda / Event', sub: 'Award Akrilik / Logam', category: 'MERCHANDISE', cover: 'images/merchandise/medali-cover.webp', images: ['images/merchandise/medali.webp'], options: [['MODEL', ['Custom']]], unit: 'pcs', defaultQty: 10, qtyStep: 10, minQty: 10, requiresSize: true, accent: 'red',
  },
  {
    id: 'ganci', name: 'Ganci UV', sub: 'Gantungan Kunci Print UV Custom', category: 'MERCHANDISE', cover: 'images/merchandise/ganci-cover.webp', images: ['images/merchandise/ganci-1-sisi.webp', 'images/merchandise/ganci-2-sisi.webp'], options: [['SISI CETAK', ['1 Sisi', '2 Sisi (Bolak-Balik)']]], unit: 'pcs', defaultQty: 50, qtyStep: 10, minQty: 10, requiresSize: true, accent: 'red',
  },
  {
    id: 'topi', name: 'Topi Custom', sub: 'Branding & Event Merchandise', category: 'MERCHANDISE', cover: 'images/merchandise/topi-cover.webp', images: ['images/merchandise/topi-print.webp', 'images/merchandise/topi-bordir.webp'], options: [['FINISHING', ['Print', 'Bordir']]], unit: 'pcs', defaultQty: 12, qtyStep: 1, minQty: 1, requiresSize: false, accent: 'red',
  },
  {
    id: 'pulpen', name: 'Pulpen Print', sub: 'Corporate Gift & Event', category: 'MERCHANDISE', cover: 'images/merchandise/pulpen-cover.webp', images: ['images/merchandise/pulpen-standard.webp', 'images/merchandise/pulpen-premium.webp'], options: [['MODEL', ['Pulpen Standard', 'Pulpen Premium']]], unit: 'pcs', defaultQty: 50, qtyStep: 10, minQty: 10, requiresSize: false, accent: 'red',
  },
  {
    id: 'pin', name: 'Pin Bros', sub: 'Pin Peniti Souvenir', category: 'MERCHANDISE', cover: 'images/merchandise/pin-cover.webp', images: ['images/merchandise/pin-25mm.webp', 'images/merchandise/pin-32mm.webp', 'images/merchandise/pin-44mm.webp', 'images/merchandise/pin-58mm.webp'], options: [['UKURAN', ['25mm', '32mm', '44mm', '58mm']]], unit: 'pcs', defaultQty: 50, qtyStep: 10, minQty: 10, requiresSize: false, accent: 'red',
  },
];

function getCategories(items) {
  return [...new Set(items.map((product) => product.category))];
}

function searchProducts(items, category = 'SEMUA', query = '') {
  const normalizedQuery = query.toLocaleLowerCase('id-ID').trim();
  return items.filter((product) => {
    if (category !== 'SEMUA' && product.category !== category) return false;
    const searchable = [
      product.name, product.sub, product.category,
      ...product.options.flatMap(([group, values]) => [group, ...values]),
    ].join(' ').toLocaleLowerCase('id-ID');
    return !normalizedQuery || searchable.includes(normalizedQuery);
  });
}

function normalizePhone(value) {
  const digits = String(value).replace(/\D/g, '');
  if (digits.startsWith('0')) return `62${digits.slice(1)}`;
  return digits;
}

function changeQuantity(current, direction, rules) {
  return Math.max(rules.minQty, current + direction * rules.qtyStep);
}

function validateOrder(product, order) {
  const errors = [];
  if (product.requiresSize && !String(order.size || '').trim()) errors.push('Ukuran wajib diisi.');
  return errors;
}

function buildWhatsAppMessage(product, selections, order) {
  const lines = [
    'Halo Borneo Grafisindo, saya mau order/tanya:',
    '',
    `Produk: ${product.name}`,
    `Kategori: ${product.category}`,
  ];
  Object.entries(selections).forEach(([group, value]) => lines.push(`${group}: ${value}`));
  if (String(order.size || '').trim()) lines.push(`Ukuran: ${String(order.size).trim()}`);
  lines.push(`Jumlah: ${order.quantity} ${product.unit}`);
  if (String(order.notes || '').trim()) lines.push(`Catatan: ${String(order.notes).trim()}`);
  return lines.join('\n');
}

function buildWhatsAppUrl(phone, message) {
  return `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(message)}`;
}

const publicApi = {
  products,
  getCategories,
  searchProducts,
  normalizePhone,
  changeQuantity,
  validateOrder,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
};

if (typeof module !== 'undefined' && module.exports) module.exports = publicApi;
