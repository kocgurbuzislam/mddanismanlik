import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "bg-accent text-cream shadow-[0_8px_30px_rgba(184,134,11,0.3)] hover:bg-accent-hover hover:-translate-y-0.5",
    outline:
      "border border-border bg-cream/80 text-foreground backdrop-blur-sm hover:border-accent/40 hover:bg-cream",
    ghost: "text-foreground hover:text-accent",
  };

  const classes = cn(base, variants[variant], className);

  const isAnchorLink =
    external || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isAnchorLink) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
