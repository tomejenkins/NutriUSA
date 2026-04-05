import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards/product-card";
import { Button } from "@/components/ui/button";
import { repo } from "@/lib/api/repository";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await repo.getProduct(slug);
  if (!product) return notFound();
  const related = (await repo.getProducts()).filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, 4);
  return <section className="container-shell py-12"><div className="grid gap-8 lg:grid-cols-2"><div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100"><Image src={product.image} alt={product.name} fill className="object-cover"/></div><div><p className="text-sm uppercase tracking-widest text-slatewarm">{product.category}</p><h1 className="mt-2 text-4xl font-semibold text-navy">{product.name}</h1><p className="mt-2 text-slate-600">{product.subtitle}</p><p className="mt-4 text-2xl font-semibold text-navy">${product.price.toFixed(2)}</p><p className="text-amber-600">★ {product.rating.toFixed(1)}</p><div className="mt-6 flex gap-3"><Button variant="premium">Add to cart</Button><Button variant="outline" href="/compare">Compare</Button></div><div className="mt-8 space-y-4">{[{title:"Supplement Facts",values:product.supplementFacts},{title:"Ingredients",values:product.ingredients}].map(s=><div key={s.title} className="card-surface"><h2 className="font-semibold text-navy">{s.title}</h2><ul className="mt-2 list-disc pl-5 text-sm text-slate-600">{s.values.map(v=><li key={v}>{v}</li>)}</ul></div>)}<div className="card-surface"><h2 className="font-semibold text-navy">Directions</h2><p className="mt-2 text-sm text-slate-600">{product.directions}</p></div></div></div></div><h2 className="section-title mt-14">Related products</h2><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{related.map((p)=><ProductCard key={p.slug} product={p}/>)}</div></section>;
}
