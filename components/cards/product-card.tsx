import Image from "next/image";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-surface">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100"><Image src={product.image} alt={product.name} fill className="object-cover" /></div>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">{product.category}</p>
      <h3 className="mt-1 text-lg font-semibold text-navy">{product.name}</h3>
      <p className="text-sm text-slate-600">{product.subtitle}</p>
      <div className="mt-3 flex items-center justify-between"><span className="font-semibold text-navy">${product.price.toFixed(2)}</span><span className="text-sm text-amber-600">★ {product.rating.toFixed(1)}</span></div>
      <div className="mt-4 flex gap-2"><Button href={`/products/${product.slug}`} variant="outline" className="flex-1">View</Button><Button variant="premium" className="flex-1">Add</Button></div>
    </article>
  );
}
