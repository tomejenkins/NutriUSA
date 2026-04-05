import { notFound } from "next/navigation";
import { CategoryTemplate } from "@/components/sections/category-template";
import { repo } from "@/lib/api/repository";

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await repo.getCategory(slug);
  if (!category) return notFound();
  const all = await repo.getProducts();
  const products = all.filter((p) => p.categorySlug === slug).slice(0, 8);
  const relatedCategories = (await repo.getCategories()).filter((c) => category.related.includes(c.slug));
  const faqs = (await repo.getFaqs()).slice(0, 3);
  return <CategoryTemplate category={category} products={products} relatedCategories={relatedCategories} faqs={faqs} />;
}
