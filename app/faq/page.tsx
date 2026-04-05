import { PageHero } from "@/components/sections/page-hero";
import { repo } from "@/lib/api/repository";
export default async function FaqPage(){const faqs=await repo.getFaqs();return <><PageHero title="Frequently Asked Questions" subtitle="Clear answers for shopping, product quality, and shipping placeholders."/><section className="container-shell py-12 space-y-3">{faqs.map(f=><details key={f.id} className="card-surface"><summary className="font-medium text-navy">{f.question}</summary><p className="mt-2 text-sm text-slate-600">{f.answer}</p></details>)}</section></>}
