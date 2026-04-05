import { PageHero } from "@/components/sections/page-hero";
import { repo } from "@/lib/api/repository";
export default async function BrandsPage(){const brands=await repo.getBrands();return <><PageHero title="Brands & Partners" subtitle="Current and future portfolio partners aligned with quality-first standards."/><section className="container-shell grid gap-4 py-12 md:grid-cols-3">{brands.map(b=><div key={b.slug} className="card-surface"><h2 className="text-xl font-semibold text-navy">{b.name}</h2><p className="mt-2 text-sm text-slate-600">{b.summary}</p></div>)}</section></>}
