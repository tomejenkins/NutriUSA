import { CategoryCard } from "@/components/cards/category-card";
import { ProductCard } from "@/components/cards/product-card";
import { Button } from "@/components/ui/button";
import { Category, FAQ, Product } from "@/lib/types";

export function CategoryTemplate({ category, products, relatedCategories, faqs }: { category: Category; products: Product[]; relatedCategories: Category[]; faqs: FAQ[] }) {
  return (
    <>
      <section className={`bg-gradient-to-r ${category.theme.gradient} py-16 text-white`}><div className="container-shell"><p className="text-sm uppercase tracking-[0.2em] text-gold">{category.theme.mood} wellness mood</p><h1 className="mt-2 text-4xl font-semibold">{category.name}</h1><p className="mt-3 max-w-2xl text-white/85">{category.summary}</p><div className="mt-5 flex flex-wrap gap-2">{category.subcategories.map(s=><span key={s} className="rounded-full bg-white/20 px-3 py-1 text-sm">{s}</span>)}</div></div></section>
      <section className="container-shell py-12"><h2 className="section-title">Featured benefits</h2><div className="mt-5 grid gap-4 md:grid-cols-3">{category.benefits.map((b)=><div key={b} className="card-surface">{b}</div>)}</div></section>
      <section className="container-shell py-12"><div className="flex items-end justify-between"><h2 className="section-title">Featured products</h2><Button href="/shop" variant="outline">View catalog</Button></div><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.map((p)=><ProductCard key={p.slug} product={p} />)}</div></section>
      <section className="container-shell py-12"><h2 className="section-title">Education spotlight</h2><div className="card-surface mt-5">Practical guidance for {category.name.toLowerCase()} will be enriched with clinical references and localized education in later phases.</div></section>
      <section className="container-shell py-12"><h2 className="section-title">Related categories</h2><div className="mt-5 grid gap-4 md:grid-cols-3">{relatedCategories.map(c=><CategoryCard key={c.slug} category={c} />)}</div></section>
      <section className="container-shell py-12"><h2 className="section-title">Category FAQ</h2><div className="mt-4 space-y-3">{faqs.map((f)=><details key={f.id} className="rounded-xl border border-slate-200 p-3"><summary className="font-medium text-navy">{f.question}</summary><p className="mt-2 text-sm text-slate-600">{f.answer}</p></details>)}</div></section>
    </>
  );
}
