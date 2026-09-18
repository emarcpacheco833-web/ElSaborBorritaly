import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CartSheet } from "@/components/cart-sheet";
import { ComboMenu } from "@/components/combo-menu";
import { CustomizeDialog } from "@/components/customize-dialog";
import { Hero } from "@/components/hero";
import { OrderSuccess } from "@/components/order-success";
import { SiteHeader } from "@/components/site-header";
import { VisitSection } from "@/components/visit-section";
import type { Combo } from "@/lib/menu";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [combo, setCombo] = useState<Combo | null>(null);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  function openCombo(next: Combo) {
    setCombo(next);
    setCustomizeOpen(true);
  }

  return (
    <div className="min-h-dvh">
      <SiteHeader onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <ComboMenu onSelect={openCombo} />
        <VisitSection />
      </main>
      <footer className="border-t border-border bg-bg px-4 py-8 text-center">
        <p className="font-display text-xl font-semibold">Sabor Boriitaly</p>
        <p className="mt-1 text-sm text-muted">Ceiba, Puerto Rico · Comida criolla e italiana</p>
        <p className="mt-3 text-xs text-muted">
          Demostración de menú digital. Precios ilustrativos para presentar el concepto.
        </p>
      </footer>
      <CustomizeDialog
        combo={combo}
        open={customizeOpen}
        onOpenChange={setCustomizeOpen}
        onAdded={() => setCartOpen(true)}
        onReadyToSend={() => setCartOpen(true)}
      />
      <CartSheet open={cartOpen} onOpenChange={setCartOpen} onSent={() => setSuccessOpen(true)} />
      <OrderSuccess open={successOpen} onOpenChange={setSuccessOpen} />
    </div>
  );
}
