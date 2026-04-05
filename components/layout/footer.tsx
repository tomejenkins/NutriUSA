import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-cream">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-4">
        <div><Image src="/logo/nutriusa-logo.png" alt="NutriUSA Importaciones" width={180} height={50}/><p className="mt-3 text-sm text-slate-600">Premium imported wellness, built for trust, education, and long-term health routines.</p></div>
        <div><h3 className="font-semibold text-navy">Shop</h3><ul className="mt-3 space-y-2 text-sm text-slate-600"><li><Link href="/shop">Catalog</Link></li><li><Link href="/categories">Categories</Link></li><li><Link href="/offers">Offers</Link></li></ul></div>
        <div><h3 className="font-semibold text-navy">Company</h3><ul className="mt-3 space-y-2 text-sm text-slate-600"><li><Link href="/about">About</Link></li><li><Link href="/trust-quality">Trust & Quality</Link></li><li><Link href="/wholesale">Wholesale</Link></li></ul></div>
        <div><h3 className="font-semibold text-navy">Legal</h3><ul className="mt-3 space-y-2 text-sm text-slate-600"><li><Link href="/shipping-returns">Shipping & Returns</Link></li><li><Link href="/terms">Terms</Link></li><li><Link href="/privacy">Privacy</Link></li></ul></div>
      </div>
    </footer>
  );
}
