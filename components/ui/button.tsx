import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const styles = {
  primary: "bg-navy text-white hover:bg-navy/90",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  ghost: "text-navy hover:bg-navy/5",
  outline: "border border-navy text-navy hover:bg-navy/5",
  premium: "bg-gold text-navy hover:bg-gold/90"
};

export function Button({ href, children, variant = "primary", className = "" }: { href?: string; children: ReactNode; variant?: keyof typeof styles; className?: string; }) {
  const base = cn("inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition", styles[variant], className);
  if (href) return <Link href={href} className={base}>{children}</Link>;
  return <button className={base}>{children}</button>;
}
