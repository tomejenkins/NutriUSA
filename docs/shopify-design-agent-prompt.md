# Shopify Design Agent Prompt — NutriUSA

Use this prompt with your Shopify website design agent.

---

You are an expert Shopify theme implementation agent. Your task is to **recreate and closely match** an existing NutriUSA website design system and page structure with high visual fidelity, while keeping the result performant, mobile-first, and editable in Shopify.

## Goal
Build a Shopify storefront that matches the existing NutriUSA frontend’s look-and-feel as closely as possible, including:
- visual style
- brand colors
- spacing rhythm
- component shapes
- header/footer behavior
- homepage section order and layout patterns
- call-to-action hierarchy

Treat this as a “design system migration + visual clone” from the existing implementation into Shopify.

## Non-negotiable design direction
- Brand personality: premium, trustworthy, educational wellness.
- Visual mood: clean white + deep navy foundation with premium gold accents.
- Layout width: centered max-width shell with generous horizontal padding and vertical breathing room.
- Surface style: rounded cards, subtle borders, soft premium shadows.
- CTA style: pill-shaped buttons, clear hierarchy, strong contrast.
- Hero style: full-bleed image carousel with dark navy gradient overlay and white text.

## Required color tokens (exact hex values)
Create theme settings/tokens and use them consistently:
- `navy`: `#0E2341`
- `gold`: `#C8A45B`
- `slatewarm`: `#65758B`
- `cream`: `#F7F4EE`
- body background: white
- primary body text: slate-900 equivalent

## Core spacing + shape system
- Page container max width: equivalent to Tailwind `max-w-7xl`.
- Horizontal container padding: responsive, approx 16px / 24px / 32px across breakpoints.
- Section vertical spacing: generous (roughly 48–64px desktop).
- Card radius: ~20px (`1.25rem`).
- Buttons: full pill shape (`rounded-full`) with medium weight text.
- Border usage: light neutral border for cards and section separators.

## Typography and content tone
- Use a modern sans-serif stack similar to Shopify defaults unless a licensed brand font is provided.
- Section headings: semibold, high contrast, confident.
- Supporting copy: quieter gray/slate text for readability.
- Tone: clear, credible, education-first, not hype-heavy.

## Global shell structure to replicate
1. Sticky header with border and slight translucent/blurred white background.
2. Top utility/announcement strip in navy with small white text.
3. Main content area with stacked sections.
4. Footer on cream background with top border and 4-column link/content layout.

## Header requirements
Implement a sticky header matching these behaviors:
- Top strip: navy background, small centered white text.
- Main row:
  - Left: NutriUSA logo image.
  - Center/primary nav on desktop: Shop, Categories, Brands, Articles, Trust & Quality, Wholesale.
  - Right icons: Search, Account, Cart.
  - Mobile: hide full nav and show menu icon.
- Header style: `border-bottom`, white with ~95% opacity feel, subtle backdrop blur.

## Navigation + IA
Replicate core nav labels and destinations:
- Shop
- Categories
- Brands
- Articles
- Trust & Quality
- Wholesale

Also preserve utility destinations in footer:
- Catalog, Categories, Offers
- About, Trust & Quality, Wholesale
- Shipping & Returns, Terms, Privacy

## Homepage section order (match closely)
Recreate homepage with this sequence:
1. Hero carousel
2. Shop by Goal (8 compact cards)
3. Shop by Category (featured category cards grid)
4. Trust & Quality Modules (3-column trust statements)
5. Featured Products (with “View catalog” outline CTA)
6. Brands & Partners (summary cards)
7. Educational Articles (2-column article cards)
8. Testimonials + FAQ preview split layout
9. Newsletter callout block in navy with white text and gold subscribe CTA

## Hero carousel specifications
- Height: approx 64vh with a practical min-height around 460px.
- Full-width background images (`object-cover`).
- Overlay: left-to-right navy gradient to preserve text readability.
- Content block max width: around 3xl.
- Text hierarchy:
  - uppercase small subtitle in gold with letter spacing
  - large white headline
  - short supportive paragraph in high-opacity white
- CTA row:
  - Primary CTA = gold button with navy text
  - Secondary CTA = light neutral button
- Auto-rotate interval: ~5 seconds with smooth fade transitions.

## Card component style rules
For category/product/article/trust cards:
- White background
- Light neutral border
- Radius around 20px
- Subtle shadow
- Slightly elevated shadow on hover
- Comfortable inner padding

## Button system to mirror
Create reusable button variants:
- Primary: navy background, white text
- Secondary: light gray background, dark text
- Ghost: text-only/soft hover
- Outline: navy border + navy text + pale navy hover
- Premium: gold background + navy text
All should be pill-shaped and consistently sized.

## Footer requirements
- Background: cream (`#F7F4EE`)
- Top border separator
- 4 columns desktop; stacked on mobile
- Column 1: logo + short premium wellness trust statement
- Remaining columns: Shop, Company, Legal links
- Link styling: subtle slate text with clear hover state

## Responsive behavior requirements
- Mobile-first build.
- Collapse desktop nav into menu trigger at smaller breakpoints.
- Maintain readable hero text and CTA stacking on small screens.
- Convert large multi-column grids to 1–2 columns on tablet/mobile.
- Preserve spacing rhythm; avoid cramped cards.

## Shopify implementation constraints
- Build with Online Store 2.0 sections/blocks where possible.
- Expose brand colors and section headings in Theme Settings for editor control.
- Keep section schemas clean and merchant-editable (hero slides, featured collections, trust items, testimonials, FAQs, newsletter text).
- Minimize app dependencies; prefer native theme features and lightweight JS.

## Data/content mapping guidance
Map existing content domains into Shopify equivalents:
- Featured categories -> featured collections blocks
- Featured products -> product grid section
- Brands & partners -> custom blocks section
- Articles -> blog posts section
- Testimonials/FAQ -> theme blocks or metaobjects

## Accessibility + quality bar
- Ensure color contrast is AA-compliant, especially gold on light backgrounds.
- Add accessible labels for icon-only controls (search/account/cart/menu).
- Ensure keyboard navigation works for nav, carousel controls, accordion/FAQ.
- Optimize image loading and avoid layout shift.
- Keep performance strong on mobile.

## Acceptance criteria (must pass)
1. Visual comparison against source pages shows strong match in color, spacing, hierarchy, and component form.
2. Header/footer and homepage sections appear in the exact intended order.
3. Button variants and card styles are consistently applied.
4. Mobile and desktop layouts both feel intentional and polished.
5. Merchant can edit major content in Shopify Theme Editor without code edits.

## Execution plan for the agent
1. Audit existing source visuals and extract reusable style tokens.
2. Set global theme settings (colors, typography, spacing defaults).
3. Build/override header + footer.
4. Implement homepage sections in required order.
5. Refine components (cards, buttons, badges, icons).
6. Tune responsive breakpoints.
7. Perform visual QA pass and iterate until close-match fidelity is achieved.

## Definition of done
Deliver a Shopify theme implementation that a stakeholder would consider “nearly identical in style and structure” to the NutriUSA source, while preserving Shopify-native maintainability.

---

If anything conflicts, prioritize: **visual fidelity to the NutriUSA source design system + clean Shopify editability**.
