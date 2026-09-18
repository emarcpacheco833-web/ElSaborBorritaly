import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { cartTotal, comboName, itemTotal, useCart, type CartItem } from "@/lib/cart";
import { getCombo, summarize } from "@/lib/menu";
import { cn, formatPrice } from "@/lib/utils";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSent: () => void;
};

export function CartSheet({ open, onOpenChange, onSent }: Props) {
  const items = useCart((s) => s.items);
  const name = useCart((s) => s.name);
  const mode = useCart((s) => s.mode);
  const orderNotes = useCart((s) => s.orderNotes);
  const setName = useCart((s) => s.setName);
  const setMode = useCart((s) => s.setMode);
  const setOrderNotes = useCart((s) => s.setOrderNotes);
  const setQty = useCart((s) => s.setQty);
  const removeItem = useCart((s) => s.removeItem);
  const send = useCart((s) => s.send);
  const total = cartTotal(items);

  function handleSend() {
    const ticket = send();
    if (!ticket) return;
    onOpenChange(false);
    onSent();
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <div className="border-b border-border px-5 py-5 pr-14">
          <SheetTitle>Tu pedido</SheetTitle>
          <SheetDescription>Revisa los combos y envía el menú a la cocina.</SheetDescription>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted">
              Todavía no hay combos. Elige uno del menú para armarlo.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <CartRow
                  key={item.uid}
                  item={item}
                  onQty={(q) => setQty(item.uid, q)}
                  onRemove={() => removeItem(item.uid)}
                />
              ))}
            </ul>
          )}

          {items.length > 0 ? (
            <div className="mt-8 space-y-4">
              <div>
                <Label htmlFor="cliente">Nombre</Label>
                <Input
                  id="cliente"
                  className="mt-2"
                  placeholder="¿A nombre de quién?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <p className="text-sm font-medium">Cómo lo quieres</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {(
                    [
                      ["recoger", "Para recoger"],
                      ["mesa", "Comer aquí"],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setMode(value)}
                      className={cn(
                        "h-11 rounded-md border text-sm font-medium",
                        mode === value
                          ? "border-forest bg-forest text-forest-foreground"
                          : "border-border bg-surface-2",
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="pedido-notas">Notas del pedido</Label>
                <Textarea
                  id="pedido-notas"
                  className="mt-2"
                  placeholder="Mesa, hora, instrucciones…"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                />
              </div>
            </div>
          ) : null}
        </div>
        {items.length > 0 ? (
          <div className="border-t border-border p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-muted">Total</span>
              <span className="font-display text-2xl font-semibold tabular-nums">
                {formatPrice(total)}
              </span>
            </div>
            <Button className="w-full" size="lg" onClick={handleSend}>
              Enviar pedido
            </Button>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

function CartRow({
  item,
  onQty,
  onRemove,
}: {
  item: CartItem;
  onQty: (qty: number) => void;
  onRemove: () => void;
}) {
  const combo = getCombo(item.comboId);
  const lines = combo ? summarize(combo, item.selections) : [];

  return (
    <li className="rounded-lg bg-surface-2 p-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium">{comboName(item.comboId)}</p>
          <ul className="mt-1 space-y-0.5 text-xs text-muted">
            {lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            {item.notes ? <li>Notas: {item.notes}</li> : null}
          </ul>
        </div>
        <p className="shrink-0 font-medium tabular-nums">{formatPrice(itemTotal(item))}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-9"
            onClick={() => onQty(item.qty - 1)}
            aria-label="Menos"
          >
            <Minus className="size-3.5" />
          </Button>
          <span className="w-6 text-center text-sm font-semibold tabular-nums">{item.qty}</span>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-9"
            onClick={() => onQty(item.qty + 1)}
            aria-label="Más"
          >
            <Plus className="size-3.5" />
          </Button>
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={onRemove}>
          <Trash2 className="size-3.5" />
          Quitar
        </Button>
      </div>
    </li>
  );
}
