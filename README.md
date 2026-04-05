# NutriUSA Importaciones Web (Fresh Rebuild)

Premium, English-first Next.js storefront scaffold for **NutriUSA Importaciones**.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Mock API routes + repository abstraction

## Run
```bash
npm install
npm run dev
```

## Key folders
- `app/` routes and pages
- `app/api/` mock backend endpoints
- `components/` reusable UI + sections
- `lib/types/` domain interfaces
- `lib/data/mock.ts` mock seed content
- `lib/api/repository.ts` data abstraction layer
- `lib/config/site.ts` nav + site config
- `public/logo/` official logo assets

## Replace mock API with real backend later
1. Keep page/components unchanged.
2. Replace functions in `lib/api/repository.ts` with real HTTP or SDK calls.
3. Optionally keep `/app/api/*` as a BFF layer.

## Update content
- Homepage/category/product/article seed content: `lib/data/mock.ts`
- Category mood/theming data: `lib/data/mock.ts` (`category.theme` fields)
- Global nav/site metadata: `lib/config/site.ts`
- Logo files: `public/logo/*`

## Add products later
- Add structured product objects to `lib/data/mock.ts` (`products` array).
- Ensure `slug`, `categorySlug`, and tags are set for filtering and routing.
