import Link from "next/link";
import { Category } from "@/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categories/${category.slug}`} className="card-surface block" style={{ borderTop: `3px solid ${category.theme.accent}` }}>
      <h3 className="text-lg font-semibold text-navy">{category.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{category.summary}</p>
      <p className="mt-4 text-sm font-medium text-navy">Explore collection →</p>
    </Link>
  );
}
