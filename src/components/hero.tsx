import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="relative min-h-[78dvh] md:min-h-[70vh]">
        <img
          src="/images/hero.jpg"
          alt="Terraza de Sabor Boriitaly en Ceiba al atardecer"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-espresso via-espresso/55 to-espresso/20" />
        <div className="relative mx-auto flex min-h-[78dvh] max-w-6xl flex-col justify-end px-4 pt-24 pb-14 md:min-h-[70vh] md:pb-16">
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            Restaurante familiar · Ceiba
          </p>
          <h1 className="max-w-2xl font-display text-5xl leading-[0.95] font-semibold text-primary-foreground sm:text-6xl md:text-7xl">
            Criollo e italiano,
            <span className="italic"> en un solo plato.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            Mofongo con salsa de la casa, pizza, pastas y hamburguesa casera de media libra.
            Elige tu combo, arma lo que lleva, y envía el pedido.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#combos">
                Ver combos
                <ArrowDown />
              </a>
            </Button>
            <Button asChild size="lg" variant="cream">
              <a href="#visita">Cómo llegar</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
