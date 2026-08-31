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

function initApp() {
  const elements = {
    menuToggle: document.getElementById('menuToggle'),
    navLinks: document.getElementById('navLinks'),
    search: document.getElementById('search'),
    filters: document.getElementById('filters'),
    productCount: document.getElementById('productCount'),
    grid: document.getElementById('grid'),
    modal: document.getElementById('modal'),
    modalClose: document.getElementById('modalClose'),
    modalTitle: document.getElementById('modalTitle'),
    modalSub: document.getElementById('modalSub'),
    modalCat: document.getElementById('modalCat'),
    modalImg: document.getElementById('modalImg'),
    modalFallback: document.getElementById('modalFallback'),
    galleryDots: document.getElementById('galleryDots'),
    configOptions: document.getElementById('configOptions'),
    sizeGroup: document.getElementById('sizeGroup'),
    sizeInput: document.getElementById('sizeInput'),
    qty: document.getElementById('qty'),
    qtyUnit: document.getElementById('qtyUnit'),
    qtyMinus: document.getElementById('qtyMinus'),
    qtyPlus: document.getElementById('qtyPlus'),
    notes: document.getElementById('notes'),
    orderError: document.getElementById('orderError'),
    orderButton: document.getElementById('orderButton'),
  };

  let activeCategory = 'SEMUA';
  let currentProduct = null;
  let currentImageIndex = 0;
  let quantity = 1;
  let selections = {};
  let triggerElement = null;

  const categories = ['SEMUA', ...getCategories(products)];

  function fallbackMarkup(product) {
    return `
      <div class="image-fallback" data-accent="${product.accent}" hidden>
        <span class="fallback-category">${product.category}</span>
        <strong class="fallback-name">${product.name}</strong>
        <span class="fallback-note">Foto segera tersedia</span>
      </div>`;
  }

  function attachImageFallback(container) {
    const image = container.querySelector('img');
    const fallback = container.querySelector('.image-fallback');
    if (!image || !fallback) return;
    const revealFallback = () => {
      image.hidden = true;
      fallback.hidden = false;
    };
    image.addEventListener('error', revealFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) revealFallback();
  }

  function renderFilters() {
    elements.filters.replaceChildren(...categories.map((category) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `filter${category === activeCategory ? ' active' : ''}`;
      button.textContent = category;
      button.setAttribute('aria-pressed', String(category === activeCategory));
      button.addEventListener('click', () => {
        activeCategory = category;
        renderFilters();
        renderProducts();
      });
      return button;
    }));
  }

  function renderProducts() {
    const list = searchProducts(products, activeCategory, elements.search.value);
    elements.productCount.textContent = `${list.length} produk`;

    if (!list.length) {
      elements.grid.innerHTML = '<div class="empty-state"><strong>Produk tidak ditemukan.</strong><br>Coba kata kunci atau kategori lain.</div>';
      return;
    }

    elements.grid.innerHTML = list.map((product) => `
      <article class="product-card">
        <button class="product-open" type="button" data-product-id="${product.id}" aria-label="Lihat dan pesan ${product.name}">
          <div class="product-photo">
            <img loading="lazy" src="${product.cover}" alt="Mockup ${product.name}">
            ${fallbackMarkup(product)}
          </div>
          <div class="product-body">
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <p>${product.sub}</p>
            <span class="product-action"><span>PILIH & ORDER</span><span aria-hidden="true">→</span></span>
          </div>
        </button>
      </article>
    `).join('');

    elements.grid.querySelectorAll('.product-photo').forEach(attachImageFallback);
    elements.grid.querySelectorAll('.product-open').forEach((button) => {
      button.addEventListener('click', () => openProduct(button.dataset.productId, button));
    });
  }

  function modalFallbackMarkup(product) {
    elements.modalFallback.dataset.accent = product.accent;
    elements.modalFallback.innerHTML = `
      <span class="fallback-category">${product.category}</span>
      <strong class="fallback-name">${product.name}</strong>
      <span class="fallback-note">Foto segera tersedia</span>`;
  }

  function renderGallery() {
    const images = currentProduct.images || [];
    elements.modalImg.hidden = false;
    elements.modalFallback.hidden = true;
    modalFallbackMarkup(currentProduct);

    if (!images.length) {
      elements.modalImg.hidden = true;
      elements.modalFallback.hidden = false;
      elements.galleryDots.replaceChildren();
      return;
    }

    elements.modalImg.src = images[currentImageIndex];
    elements.modalImg.alt = `Mockup ${currentProduct.name}, gambar ${currentImageIndex + 1}`;
    elements.modalImg.onerror = () => {
      elements.modalImg.hidden = true;
      elements.modalFallback.hidden = false;
    };

    elements.galleryDots.replaceChildren(...images.map((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `gallery-dot${index === currentImageIndex ? ' active' : ''}`;
      dot.setAttribute('aria-label', `Tampilkan gambar ${index + 1} dari ${images.length}`);
      dot.setAttribute('aria-current', index === currentImageIndex ? 'true' : 'false');
      dot.addEventListener('click', () => {
        currentImageIndex = index;
        renderGallery();
      });
      return dot;
    }));
  }

  function renderOptions() {
    elements.configOptions.replaceChildren(...currentProduct.options.map(([group, values]) => {
      selections[group] = values[0];
      const wrapper = document.createElement('fieldset');
      wrapper.className = 'option-group';
      const legend = document.createElement('legend');
      legend.className = 'option-group-label';
      legend.textContent = group;
      const options = document.createElement('div');
      options.className = 'options';
      values.forEach((value, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `option${index === 0 ? ' selected' : ''}`;
        button.textContent = value;
        button.setAttribute('aria-pressed', String(index === 0));
        button.addEventListener('click', () => {
          options.querySelectorAll('.option').forEach((item) => {
            item.classList.remove('selected');
            item.setAttribute('aria-pressed', 'false');
          });
          button.classList.add('selected');
          button.setAttribute('aria-pressed', 'true');
          selections[group] = value;
        });
        options.append(button);
      });
      wrapper.append(legend, options);
      return wrapper;
    }));
  }

  function openProduct(productId, trigger) {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    currentProduct = product;
    currentImageIndex = 0;
    quantity = product.defaultQty;
    selections = {};
    triggerElement = trigger;

    elements.modalCat.textContent = product.category;
    elements.modalTitle.textContent = product.name;
    elements.modalSub.textContent = product.sub;
    elements.qty.textContent = quantity;
    elements.qtyUnit.textContent = product.unit;
    elements.sizeGroup.hidden = !product.requiresSize;
    elements.sizeInput.required = product.requiresSize;
    elements.sizeInput.value = '';
    elements.notes.value = '';
    elements.orderError.hidden = true;
    elements.orderError.textContent = '';
    renderOptions();
    renderGallery();

    elements.modal.hidden = false;
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => elements.modalClose.focus());
  }

  function closeModal() {
    if (elements.modal.hidden) return;
    elements.modal.hidden = true;
    document.body.classList.remove('modal-open');
    elements.modalImg.onerror = null;
    if (triggerElement) triggerElement.focus();
  }

  function handleModalKeys(event) {
    if (elements.modal.hidden) return;
    if (event.key === 'Escape') {
      closeModal();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...elements.modal.querySelectorAll('button:not([disabled]), input:not([disabled]), textarea:not([disabled])')].filter((item) => !item.hidden && item.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function updateQuantity(direction) {
    quantity = changeQuantity(quantity, direction, currentProduct);
    elements.qty.textContent = quantity;
  }

  function submitOrder() {
    const order = {
      size: elements.sizeInput.value,
      quantity,
      notes: elements.notes.value,
    };
    const errors = validateOrder(currentProduct, order);
    if (errors.length) {
      elements.orderError.textContent = errors.join(' ');
      elements.orderError.hidden = false;
      elements.sizeInput.focus();
      return;
    }
    elements.orderError.hidden = true;
    const message = buildWhatsAppMessage(currentProduct, selections, order);
    window.open(buildWhatsAppUrl(BUSINESS_PHONE, message), '_blank', 'noopener,noreferrer');
  }

  elements.search.addEventListener('input', renderProducts);
  elements.menuToggle.addEventListener('click', () => {
    const expanded = elements.menuToggle.getAttribute('aria-expanded') === 'true';
    elements.menuToggle.setAttribute('aria-expanded', String(!expanded));
    elements.navLinks.classList.toggle('open', !expanded);
    elements.menuToggle.querySelector('.sr-only').textContent = expanded ? 'Buka menu' : 'Tutup menu';
  });
  elements.navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    elements.menuToggle.setAttribute('aria-expanded', 'false');
    elements.navLinks.classList.remove('open');
  }));
  elements.modalClose.addEventListener('click', closeModal);
  elements.modal.querySelector('[data-close-modal]').addEventListener('click', closeModal);
  elements.qtyMinus.addEventListener('click', () => updateQuantity(-1));
  elements.qtyPlus.addEventListener('click', () => updateQuantity(1));
  elements.orderButton.addEventListener('click', submitOrder);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && elements.navLinks.classList.contains('open')) {
      elements.menuToggle.setAttribute('aria-expanded', 'false');
      elements.navLinks.classList.remove('open');
      elements.menuToggle.focus();
    }
    handleModalKeys(event);
  });

  renderFilters();
  renderProducts();
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
  initApp,
};

if (typeof module !== 'undefined' && module.exports) module.exports = publicApi;
if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', initApp);
