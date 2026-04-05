export interface HeroSlide { id: string; title: string; subtitle: string; body: string; desktopImage: string; mobileImage: string; alt: string; primaryCta: {label:string;href:string}; secondaryCta:{label:string;href:string}; theme: "trust"|"sport"|"warm"|"fresh"|"global"|"promo"; }
export interface CategoryTheme { accent: string; gradient: string; mood: string; }
export interface Category { slug:string; name:string; summary:string; heroImage:string; goalTags:string[]; subcategories:string[]; benefits:string[]; related:string[]; theme: CategoryTheme; }
export interface Product { id:string; slug:string; name:string; subtitle:string; category:string; categorySlug:string; image:string; price:number; rating:number; badges:string[]; benefits:string[]; ingredients:string[]; directions:string; supplementFacts:string[]; brand:string; tags:string[]; }
export interface Brand { slug:string; name:string; summary:string; logo:string; }
export interface Article { slug:string; title:string; excerpt:string; image:string; category:string; readTime:string; content:string[]; }
export interface FAQ { id:string; question:string; answer:string; category?:string; }
export interface Testimonial { id:string; name:string; role:string; quote:string; }
export interface InquiryRequest { company:string; contactName:string; email:string; country:string; message:string; }
export interface NewsletterSignup { email:string; interests:string[]; }
