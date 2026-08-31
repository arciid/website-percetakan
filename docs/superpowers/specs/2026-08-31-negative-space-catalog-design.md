# Borneo Grafisindo Negative-Space Catalog Redesign

## Objective

Refactor the existing static catalog into a cleaner, responsive, accessible product-ordering website without adding downloaded or AI-generated images. The redesign must preserve all 23 products, use the available local assets when present, and provide intentional category-based placeholders for missing assets.

## Visual Direction

The visual language is industrial-premium: off-white paper backgrounds, strong black typography, generous negative space, restrained yellow accents, and red reserved for emphasis. Empty space is treated as part of the composition rather than an area to fill.

Product cards use square `1:1` media. Product imagery uses `object-fit: contain` so mockups are not cropped and retain breathing room. Desktop uses four columns, tablet uses two, and mobile uses one. Card content has consistent vertical alignment so calls to action line up across a row.

The large product gallery in the modal remains landscape-oriented. On desktop the gallery and configuration panel sit side by side; on mobile the gallery appears above the configuration.

## Architecture

The current single-file implementation will be split into three focused files:

- `index.html`: semantic page structure, navigation, catalog containers, modal, and accessible labels.
- `style.css`: all visual rules, responsive breakpoints, negative-space layout, placeholders, modal states, and focus styles.
- `script.js`: business configuration, product data, filtering, modal state, option selection, gallery behavior, quantity rules, and WhatsApp message construction.

No framework, package dependency, backend, build step, or API is introduced.

## Catalog Data

All existing 23 products and seven categories remain available. Each product has:

- identity, title, short description, and category;
- optional cover and gallery paths;
- configuration groups and values;
- order unit and default quantity;
- quantity increment and minimum;
- optional size requirement;
- visual accent used by the fallback placeholder.

Missing images fail gracefully into a branded category placeholder. The UI communicates that a photo is not yet available while keeping the product orderable.

Search covers product names, descriptions, categories, materials, finishing choices, and other option values. A visible result count reflects the active category and search query.

## Product Configuration

The oversized option button bug is removed. Option controls are compact, wrap naturally, expose a clear selected state, and remain keyboard accessible.

The modal collects:

- product configuration selections;
- quantity with product-specific unit and increment;
- size when relevant;
- optional customer notes.

Image switching uses explicit mappings only where reliable. It must not guess from loose word matches such as `laminating` or `sisi`. If no explicit mapping exists, the current gallery image remains unchanged.

## WhatsApp Ordering

The WhatsApp destination is `6282250965219`. The generated message contains:

- product name and category;
- every selected option;
- size when provided;
- quantity and unit;
- customer notes when provided.

Required values are validated before opening WhatsApp. The application does not invent prices, addresses, operating hours, delivery promises, or other business data.

## Navigation and Responsive Behavior

Desktop navigation remains visible. Mobile navigation becomes a genuine expandable menu with an accessible toggle state. Selecting a link closes the menu.

Key responsive behavior:

- four catalog columns on wide desktop;
- two columns on tablets;
- one column on phones;
- section headers and calls to action stack cleanly when space is limited;
- portfolio composition simplifies on small screens;
- touch targets remain large enough without excessive padding.

## Accessibility

The redesign includes:

- keyboard-operable product cards and controls;
- visible focus styles;
- an accessible dialog name and `aria-modal` state;
- Escape-to-close behavior;
- focus movement into the modal and restoration to the triggering card;
- labeled gallery controls;
- an accessible mobile menu toggle;
- status text for search results;
- reduced-motion handling for users who request it.

## Error Handling

Image failures reveal the associated placeholder instead of leaving a broken icon. An invalid product identifier does not open the modal. WhatsApp ordering is blocked with an inline validation message when required order information is missing.

The page remains useful when JavaScript is unavailable by retaining the marketing content and a direct WhatsApp consultation link in the HTML.

## Testing

Verification will cover:

- HTML, CSS, and JavaScript loading without console errors;
- all 23 products and seven filters rendering;
- text search and option-value search;
- missing-image fallback behavior;
- square card media and four/two/one-column breakpoints;
- product modal open, close, Escape, focus restoration, and option selection;
- product-specific quantity behavior;
- required-size validation;
- WhatsApp URL and encoded message contents;
- desktop and mobile navigation;
- confirmation that no unrelated files or user changes are overwritten.

## Out of Scope

- Generating, downloading, or licensing new product images;
- product pricing calculations;
- shopping cart, checkout, payment, login, or backend storage;
- file uploads;
- analytics and third-party tracking;
- fabricating missing business details.
