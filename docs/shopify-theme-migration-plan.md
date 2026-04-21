# Shopify OS 2.0 Migration Mapping (NutriUSA)

| Existing component | Keep mostly as-is / needs Shopify wiring / must be reworked | Reason |
|---|---|---|
| `components/layout/header.tsx` | Needs Shopify wiring | Preserve sticky/nav layout; replace nav source with `link_list`, account/search/cart routes, and cart count from `cart.item_count`. |
| `components/layout/footer.tsx` | Needs Shopify wiring | Preserve 4-column structure; replace static links with Shopify menus/settings and merchant-editable copy. |
| `components/sections/hero-carousel.tsx` + `lib/data/mock.ts` hero slides | Needs Shopify wiring | Preserve full-bleed carousel design; replace hardcoded slide array with section blocks/settings. |
| `components/cards/product-card.tsx` | Must be reworked | Static `product.price`/fake rating/add button must be replaced by real Liquid product data, money filters, availability, and product form variant IDs. |
| `app/products/[slug]/page.tsx` | Must be reworked | Mock repository data and fake add-to-cart need real `product` object, variant selection, and Liquid `form 'product'`. |
| `app/categories/[slug]/page.tsx` + `app/shop/page.tsx` | Must be reworked | Convert repo-driven mock loops to `collection.products` loops in collection templates/sections. |
| `app/cart/page.tsx` | Must be reworked | Placeholder page must become real cart page + drawer wired to Shopify cart endpoints. |
| `lib/api/repository.ts` | Must be reworked | Entire mock datastore access layer should be replaced by native Liquid objects as commerce source of truth. |
| `lib/data/mock.ts` | Must be reworked | Contains fake products, prices, categories, brands, FAQs, and testimonials; should no longer power commerce UI. |
| `tailwind.config.ts` and `app/globals.css` tokens/utilities | Keep mostly as-is (ported) | Brand colors, spacing rhythm, radius, and card shadows should be preserved in theme CSS for visual parity. |

## Hardcoded / fake-commerce hotspots found

- Mock product catalog, IDs, prices, images, and badges in `lib/data/mock.ts`.
- Static repository methods in `lib/api/repository.ts` returning fake arrays.
- Product card and PDP add-to-cart buttons that are not wired to Shopify forms.
- Placeholder cart page with no real cart line items.
- Hardcoded category and goal modules not editable via merchant settings.
