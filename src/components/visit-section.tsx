import { Clock3, MapPin, Instagram } from "lucide-react";
import { HOURS } from "@/lib/menu";

export function VisitSection() {
  return (
    <section id="visita" className="border-t border-border bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">Ceiba</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-forest-foreground md:text-5xl">
            Ven a la mesa
          </h2>
          <p className="mt-4 max-w-md text-forest-foreground/80">
            Restaurante familiar en Ave. Lauro Piñero, esquina PR-975. Terraza al aire libre,
            sazón boricua y platos italianos hechos en casa.
          </p>
          <div className="mt-8 space-y-5">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
              <div>
                <p className="font-medium">Dirección</p>
                <p className="text-sm text-forest-foreground/75">
                  Ave. Lauro Piñero esq. carretera 975
                  <br />
                  Ceiba, Puerto Rico 00735
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=18.26729,-65.63982"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-sm font-medium text-gold underline-offset-4 hover:underline"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Instagram className="mt-0.5 size-5 shrink-0 text-gold" />
              <div>
                <p className="font-medium">Instagram</p>
                <a
                  href="https://www.instagram.com/saborboriitaly/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gold underline-offset-4 hover:underline"
                >
                  @saborboriitaly
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-forest-foreground/5 p-5 md:p-6">
          <div className="mb-4 flex items-center gap-2">
            <Clock3 className="size-5 text-gold" />
            <h3 className="font-display text-2xl font-semibold">Horario</h3>
          </div>
          <ul className="divide-y divide-forest-foreground/10">
            {HOURS.map((row) => (
              <li key={row.day} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                <span className="font-medium">{row.day}</span>
                <span className={row.time === "Cerrado" ? "text-forest-foreground/50" : ""}>
                  {row.time}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-forest-foreground/55">
            Horario publicado como referencia. Confirma en Instagram el día que visites.
          </p>
        </div>
      </div>
    </section>
  );
}
