import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";

type Props = {
  onOpenCart: () => void;
};

export function SiteHeader({ onOpenCart }: Props) {
  const count = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <img
            src="/images/logo.jpg"
            alt="Sabor Boriitaly"
            className="size-10 rounded-full object-cover outline outline-1 -outline-offset-1 outline-espresso/10"
          />
          <span className="min-w-0">
            <span className="block font-display text-lg leading-none font-semibold tracking-tight text-fg md:text-xl">
              Sabor Boriitaly
            </span>
            <span className="hidden text-[11px] tracking-[0.18em] text-muted uppercase sm:block">
              Ceiba · Puerto Rico
            </span>
          </span>
        </a>
        <nav className="flex items-center gap-1">
          <a
            href="#combos"
            className="hidden h-11 items-center px-3 text-sm font-medium text-muted hover:text-fg sm:flex"
          >
            Combos
          </a>
          <a
            href="#visita"
            className="hidden h-11 items-center px-3 text-sm font-medium text-muted hover:text-fg md:flex"
          >
            Visítanos
          </a>
          <Button variant="forest" size="sm" className="relative pl-3.5 pr-3" onClick={onOpenCart}>
            <ShoppingBag />
            Pedido
            {count > 0 ? (
              <span className="ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-semibold text-primary-foreground tabular-nums">
                {count}
              </span>
            ) : null}
          </Button>
        </nav>
      </div>
    </header>
  );
}
