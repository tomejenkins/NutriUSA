import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { repo } from "@/lib/api/repository";

export default async function ArticlesPage() {
  const articles = await repo.getArticles();
  return <><PageHero title="Articles" subtitle="Educational wellness content designed to build long-term customer confidence." /><section className="container-shell grid gap-4 py-12 md:grid-cols-2">{articles.map((a)=><article key={a.slug} className="card-surface"><p className="text-xs uppercase tracking-widest text-slatewarm">{a.category} · {a.readTime}</p><h2 className="mt-2 text-2xl font-semibold text-navy">{a.title}</h2><p className="mt-2 text-sm text-slate-600">{a.excerpt}</p><Button href={`/articles/${a.slug}`} className="mt-4" variant="outline">Open article</Button></article>)}</section></>;
}
