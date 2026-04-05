import { CategoryCard } from "@/components/cards/category-card";
import { ProductCard } from "@/components/cards/product-card";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/data/mock";
import { repo } from "@/lib/api/repository";

export default async function HomePage() {
  const [featuredCategories, featuredProducts, brands, articles, faqs, testimonials] = await Promise.all([
    repo.getFeaturedCategories(), repo.getFeaturedProducts(), repo.getBrands(), repo.getArticles(), repo.getFaqs(), repo.getTestimonials()
  ]);

  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <section className="container-shell py-16"><h2 className="section-title">Shop by Goal</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["Energy & Performance","Heart Support","Immune Defense","Family Health","Beauty & Vitality","Sleep & Relaxation","Daily Wellness","Diabetes Support"].map(g=><div key={g} className="card-surface text-sm font-medium text-navy">{g}</div>)}</div></section>
      <section className="container-shell py-12"><h2 className="section-title">Shop by Category</h2><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{featuredCategories.map((c)=><CategoryCard key={c.slug} category={c} />)}</div></section>
      <section className="container-shell py-12"><h2 className="section-title">Trust & Quality Modules</h2><p className="section-subtitle">Placeholder trust statements ready for verified compliance updates.</p><div className="mt-6 grid gap-4 md:grid-cols-3">{["Quality checked workflows","Imported with care","Transparent sourcing roadmap","Future third-party testing","Customer-first support","Education-led product guidance"].map(b=><div key={b} className="card-surface">{b}</div>)}</div></section>
      <section className="container-shell py-12"><div className="flex items-end justify-between"><h2 className="section-title">Featured Products</h2><Button href="/shop" variant="outline">View catalog</Button></div><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{featuredProducts.map((p)=><ProductCard key={p.slug} product={p}/>)}</div></section>
      <section className="container-shell py-12"><h2 className="section-title">Brands & Partners</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{brands.map((b)=><div key={b.slug} className="card-surface"><h3 className="font-semibold text-navy">{b.name}</h3><p className="mt-2 text-sm text-slate-600">{b.summary}</p></div>)}</div></section>
      <section className="container-shell py-12"><h2 className="section-title">Educational Articles</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{articles.map((a)=><article key={a.slug} className="card-surface"><p className="text-xs uppercase tracking-widest text-slatewarm">{a.category}</p><h3 className="mt-2 text-xl font-semibold text-navy">{a.title}</h3><p className="mt-2 text-sm text-slate-600">{a.excerpt}</p><Button href={`/articles/${a.slug}`} variant="ghost" className="mt-3 px-0">Read article →</Button></article>)}</div></section>
      <section className="container-shell grid gap-6 py-12 lg:grid-cols-2"><TestimonialCarousel items={testimonials} /><div className="card-surface"><h2 className="section-title">FAQ Preview</h2><div className="mt-4 space-y-3">{faqs.map((f)=><details key={f.id} className="rounded-xl border border-slate-200 p-3"><summary className="cursor-pointer font-medium text-navy">{f.question}</summary><p className="mt-2 text-sm text-slate-600">{f.answer}</p></details>)}</div></div></section>
      <section className="container-shell py-12"><div className="rounded-2xl bg-navy px-6 py-10 text-white"><h2 className="text-3xl font-semibold">Newsletter</h2><p className="mt-2 text-white/80">Receive product launches, educational content, and seasonal offers.</p><form className="mt-5 flex flex-col gap-3 sm:flex-row"><input className="w-full rounded-full px-4 py-3 text-slate-900" placeholder="Email address" /><Button variant="premium">Subscribe</Button></form></div></section>
    </>
  );
}
