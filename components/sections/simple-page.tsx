import { PageHero } from "@/components/sections/page-hero";

export function SimplePage({ title, subtitle, points }: { title: string; subtitle: string; points: string[] }) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />
      <section className="container-shell py-12"><div className="grid gap-4 md:grid-cols-2">{points.map((p) => <div key={p} className="card-surface">{p}</div>)}</div></section>
    </>
  );
}
