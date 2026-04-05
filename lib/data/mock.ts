import { Article, Brand, Category, FAQ, HeroSlide, Product, Testimonial } from "@/lib/types";

export const heroSlides: HeroSlide[] = [
{id:"h1",title:"Premium Wellness, Imported with Purpose",subtitle:"NutriUSA Importaciones",body:"Trusted supplements curated for modern families and high-performance lifestyles.",desktopImage:"https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1800&q=80",mobileImage:"https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80",alt:"Premium wellness products",primaryCta:{label:"Explore Catalog",href:"/shop"},secondaryCta:{label:"Why Trust Us",href:"/trust-quality"},theme:"trust"},
{id:"h2",title:"Fuel Strength and Endurance",subtitle:"Sports Performance",body:"Structured formulas for training blocks, game days, and measurable recovery.",desktopImage:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=80",mobileImage:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",alt:"Athletic training",primaryCta:{label:"Shop Sports Nutrition",href:"/categories/sports-nutrition"},secondaryCta:{label:"View Protein",href:"/categories/protein"},theme:"sport"},
{id:"h3",title:"Care for Heart, Metabolic, and Family Wellness",subtitle:"Daily Health Foundations",body:"Balanced wellness support with clean, transparent ingredient direction.",desktopImage:"https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1800&q=80",mobileImage:"https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80",alt:"Family wellness",primaryCta:{label:"Discover Heart Health",href:"/categories/heart-health"},secondaryCta:{label:"Browse FAQs",href:"/faq"},theme:"warm"}
];

const names=["Sports Nutrition","Protein","Pre-Workout / Energy","Recovery / Hydration","Multivitamins","Heart Health","Diabetes Support","Immune Support","Digestive Health","Joint & Bone Health","Beauty / Hair / Skin","Kids & Family","Men's Health","Women's Health","Weight Management","Sleep & Stress Support"];
const slugs=["sports-nutrition","protein","pre-workout-energy","recovery-hydration","multivitamins","heart-health","diabetes-support","immune-support","digestive-health","joint-bone-health","beauty-hair-skin","kids-family","mens-health","womens-health","weight-management","sleep-stress-support"];

export const categories: Category[] = slugs.map((slug, i) => ({
slug,name:names[i],summary:`Professional-grade ${names[i]} collections designed for quality-focused routines.`,heroImage:`https://images.unsplash.com/photo-${1510000000000+i}000?auto=format&fit=crop&w=1600&q=80`,goalTags:["Daily Wellness","Quality Sourcing","Smart Supplementation"],subcategories:["Top Picks","Premium Imports","Essentials"],benefits:["Transparent ingredient direction","Curated for USA + Peru demand","Built for routine adherence"],related:slugs.filter(s=>s!==slug).slice(0,3),theme:{accent:i%3===0?"#C8A45B":"#2D6A9F",gradient:i%4===0?"from-navy to-slate-700":"from-sky-900 to-blue-700",mood:i%2===0?"confident":"supportive"}
}));

export const products: Product[] = Array.from({length:24}).map((_,i)=>({
id:`p${i+1}`,
slug:`nutri-product-${i+1}`,
name:`Nutri Formula ${i+1}`,
subtitle:i%2===0?"Advanced daily support":"Performance and recovery blend",
category:names[i%names.length],
categorySlug:slugs[i%slugs.length],
image:`https://picsum.photos/seed/nutri-${i+1}/800/800`,
price:29 + i,
rating:4 + (i%10)/10,
badges:[i%3===0?"Popular":"Premium", i%5===0?"New":"Imported"],
benefits:["Targeted nutrient profile","Easy daily routine","Premium sourcing"],
ingredients:["Vitamin complex", "Mineral matrix", "Botanical extract"],
directions:"Take 2 capsules daily with water after meals.",
supplementFacts:["Serving size: 2 capsules", "Servings per container: 30", "Vitamin D3: 25mcg"],
brand:i%2===0?"NutriElite Labs":"VitalCore",
tags:["Gluten Free","No Added Sugar"]
}));

export const brands: Brand[] = [
{slug:"nutrielite",name:"NutriElite Labs",summary:"Clinical-forward performance supplements.",logo:"https://picsum.photos/seed/brand1/220/120"},
{slug:"vitalcore",name:"VitalCore",summary:"Everyday wellness essentials.",logo:"https://picsum.photos/seed/brand2/220/120"},
{slug:"primebalance",name:"PrimeBalance",summary:"Cardio and metabolic support portfolio.",logo:"https://picsum.photos/seed/brand3/220/120"}
];

export const articles: Article[] = [
{slug:"smart-supplement-routine",title:"How to Build a Smarter Supplement Routine",excerpt:"A practical framework for consistency, dosage timing, and lifestyle fit.",image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",category:"Education",readTime:"6 min",content:["Start with goals.","Choose quality and track adherence."]},
{slug:"immune-support-basics",title:"Immune Support Basics for Busy Families",excerpt:"Simple, evidence-aware habits for daily resilience.",image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",category:"Immune",readTime:"5 min",content:["Layer sleep, nutrition, and hydration.","Supplement thoughtfully."]}
];

export const faqs: FAQ[] = [
{id:"f1",question:"Are certifications shown on this website final?",answer:"No. Trust modules are placeholders that will be updated with verified certifications.",category:"global"},
{id:"f2",question:"Do you ship to Peru and the United States?",answer:"Yes, this mock storefront reflects a USA + Peru distribution direction.",category:"shipping"}
];

export const testimonials: Testimonial[] = [
{id:"t1",name:"Andrea M.",role:"Retail Customer",quote:"NutriUSA Importaciones feels premium and clear about quality without overpromising."},
{id:"t2",name:"Luis R.",role:"Gym Owner",quote:"The category organization makes it easy to recommend products by goal."}
];
