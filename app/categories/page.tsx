import { CategoryCard } from "@/components/cards/category-card";
import { PageHero } from "@/components/sections/page-hero";
import { repo } from "@/lib/api/repository";

export default async function CategoriesPage() {
  const categories = await repo.getCategories();
  return <><PageHero title="All Health Categories" subtitle="A unified design system with category-specific mood treatments for a premium shopping experience." /><section className="container-shell py-12"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{categories.map((c)=><CategoryCard key={c.slug} category={c} />)}</div></section></>;
}
