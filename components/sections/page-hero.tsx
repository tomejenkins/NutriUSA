export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-gradient-to-r from-navy to-sky-900 py-16 text-white">
      <div className="container-shell">
        <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-white/85">{subtitle}</p>
      </div>
    </section>
  );
}
