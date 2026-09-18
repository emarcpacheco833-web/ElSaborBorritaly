import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { comboName, itemTotal, useCart } from "@/lib/cart";
import { getCombo, summarize } from "@/lib/menu";
import { formatPrice } from "@/lib/utils";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function OrderSuccess({ open, onOpenChange }: Props) {
  const ticket = useCart((s) => s.lastTicket);
  if (!ticket) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="md:max-w-md">
        <div className="overflow-y-auto px-5 pt-12 pb-8">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-forest text-forest-foreground">
            <Check className="size-7" />
          </div>
          <DialogTitle className="mt-4 text-center">Pedido enviado</DialogTitle>
          <DialogDescription className="mt-2 text-center">
            Ticket {ticket.number} · {ticket.mode === "mesa" ? "Comer aquí" : "Para recoger"} ·{" "}
            {ticket.name}
          </DialogDescription>
          <div className="mt-6 rounded-lg border border-border bg-surface-2 p-4">
            <ul className="space-y-3 text-sm">
              {ticket.items.map((item) => {
                const combo = getCombo(item.comboId);
                const lines = combo ? summarize(combo, item.selections) : [];
                return (
                  <li key={item.uid}>
                    <div className="flex justify-between gap-3 font-medium">
                      <span>
                        {item.qty} × {comboName(item.comboId)}
                      </span>
                      <span className="tabular-nums">{formatPrice(itemTotal(item))}</span>
                    </div>
                    {lines.map((line) => (
                      <p key={line} className="text-xs text-muted">
                        {line}
                      </p>
                    ))}
                  </li>
                );
              })}
            </ul>
            {ticket.notes ? (
              <p className="mt-3 text-xs text-muted">Notas: {ticket.notes}</p>
            ) : null}
            <p className="mt-4 flex justify-between border-t border-border pt-3 font-display text-xl font-semibold">
              <span>Total</span>
              <span className="tabular-nums">{formatPrice(ticket.total)}</span>
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            Demostración del menú digital. En el local, este envío llegaría a la cocina.
          </p>
          <Button className="mt-6 w-full" onClick={() => onOpenChange(false)}>
            Volver al menú
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
