import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { COMBOS, type Combo } from "@/lib/menu";
import { formatPrice } from "@/lib/utils";

type Props = {
  onSelect: (combo: Combo) => void;
};

export function ComboMenu({ onSelect }: Props) {
  return (
    <section id="combos" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">
          Menú digital
        </p>
        <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">Nuestros combos</h2>
        <p className="mt-3 text-muted">
          Toca un combo, elige lo que lleva — relleno, salsa, tamaño, extras — y envía. Esta es
          la demostración del menú para mostrar en la mesa o desde el celular.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {COMBOS.map((combo) => (
          <button
            key={combo.id}
            type="button"
            onClick={() => onSelect(combo)}
            className="group flex flex-col overflow-hidden rounded-xl bg-surface text-left shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                src={combo.image}
                alt={combo.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {combo.featured ? (
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  De la casa
                </Badge>
              ) : null}
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-xs font-medium tracking-wide text-gold uppercase">{combo.tagline}</p>
              <h3 className="mt-1 font-display text-2xl leading-tight font-semibold">{combo.name}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{combo.description}</p>
              <div className="mt-4 flex items-end justify-between gap-3">
                <p className="font-display text-2xl font-semibold tabular-nums text-primary">
                  {formatPrice(combo.price)}
                </p>
                <p className="flex items-center gap-1 text-xs text-muted">
                  <Users className="size-3.5" />
                  {combo.serves}
                </p>
              </div>
              <span className="mt-4 inline-flex h-11 items-center justify-center rounded-md bg-forest text-sm font-medium text-forest-foreground">
                Personalizar y pedir
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
