"use client";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="bg-navy py-2 text-center text-xs text-white">Free shipping thresholds and promo modules are configurable. English experience is active.</div>
      <div className="container-shell flex items-center gap-4 py-4">
        <Link href="/" className="shrink-0"><Image src="/logo/nutriusa-logo.png" alt="NutriUSA Importaciones" width={170} height={46} /></Link>
        <nav className="hidden flex-1 items-center gap-6 lg:flex">{siteConfig.nav.map((item)=><Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-navy">{item.label}</Link>)}</nav>
        <div className="ml-auto flex items-center gap-2">
          <button className="rounded-full p-2 hover:bg-slate-100" aria-label="Search"><Search size={18}/></button>
          <Link href="/account/login" className="rounded-full p-2 hover:bg-slate-100" aria-label="Account"><User size={18}/></Link>
          <Link href="/cart" className="rounded-full p-2 hover:bg-slate-100" aria-label="Cart"><ShoppingCart size={18}/></Link>
          <button className="rounded-full p-2 hover:bg-slate-100 lg:hidden" aria-label="Menu"><Menu size={18}/></button>
        </div>
      </div>
    </header>
  );
}
