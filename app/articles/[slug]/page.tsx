import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { repo } from "@/lib/api/repository";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await repo.getArticle(slug);
  if (!article) return notFound();
  return <><PageHero title={article.title} subtitle={article.excerpt} /><article className="container-shell py-12 prose max-w-3xl"><div className="space-y-4 text-slate-700">{article.content.map((p)=><p key={p}>{p}</p>)}</div></article></>;
}
