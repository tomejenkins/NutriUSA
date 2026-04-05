import { ProductCard } from "@/components/cards/product-card";
import { PageHero } from "@/components/sections/page-hero";
import { repo } from "@/lib/api/repository";

export default async function ShopPage() {
  const products = await repo.getProducts();
  return <><PageHero title="Catalog" subtitle="Mock shopping experience with searchable and filterable layout ready for backend integration." /><section className="container-shell py-8"><div className="grid gap-3 rounded-2xl border border-slate-200 p-4 md:grid-cols-5"><input className="rounded-full border px-4 py-2 md:col-span-2" placeholder="Search supplements"/><select className="rounded-full border px-4 py-2"><option>Category</option></select><select className="rounded-full border px-4 py-2"><option>Brand</option></select><select className="rounded-full border px-4 py-2"><option>Sort</option></select></div><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.map((p)=><ProductCard key={p.slug} product={p} />)}</div></section></>;
}
