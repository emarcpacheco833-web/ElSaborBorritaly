import { Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/lib/cart";
import {
  defaultSelections,
  missingGroups,
  unitPrice,
  type Combo,
} from "@/lib/menu";
import { cn, formatPrice } from "@/lib/utils";

type Props = {
  combo: Combo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdded: () => void;
  onReadyToSend: () => void;
};

export function CustomizeDialog({ combo, open, onOpenChange, onAdded, onReadyToSend }: Props) {
  const addItem = useCart((s) => s.addItem);
  const [selections, setSelections] = useState<Record<string, string[]>>({});
  const [notes, setNotes] = useState("");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!open || !combo) return;
    setSelections(defaultSelections(combo));
    setNotes("");
    setQty(1);
  }, [open, combo]);

  const price = useMemo(
    () => (combo ? unitPrice(combo, selections) : 0),
    [combo, selections],
  );
  const missing = combo ? missingGroups(combo, selections) : [];
  const canSubmit = Boolean(combo) && missing.length === 0;

  function toggle(groupId: string, choiceId: string, type: "single" | "multi", max?: number) {
    setSelections((prev) => {
      const current = prev[groupId] ?? [];
      if (type === "single") return { ...prev, [groupId]: [choiceId] };
      const has = current.includes(choiceId);
      let next = has ? current.filter((id) => id !== choiceId) : [...current, choiceId];
      if (!has && max && next.length > max) next = next.slice(-max);
      return { ...prev, [groupId]: next };
    });
  }

  function addToCart() {
    if (!combo || !canSubmit) return;
    addItem({ comboId: combo.id, qty, selections, notes });
    onOpenChange(false);
    onAdded();
  }

  function sendNow() {
    if (!combo || !canSubmit) return;
    addItem({ comboId: combo.id, qty, selections, notes });
    onOpenChange(false);
    onReadyToSend();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {combo ? (
          <>
            <div className="relative h-40 shrink-0 overflow-hidden md:h-48">
              <img src={combo.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/20 to-transparent" />
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-4">
              <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
                {combo.tagline}
              </p>
              <DialogTitle className="mt-1 pr-10">{combo.name}</DialogTitle>
              <DialogDescription className="mt-2">{combo.description}</DialogDescription>
              <p className="mt-2 font-display text-2xl font-semibold tabular-nums text-primary">
                {formatPrice(combo.price)}
                <span className="ml-2 text-sm font-normal text-muted">base</span>
              </p>

              <div className="mt-6 space-y-6">
                {combo.groups.map((group) => {
                  const picked = selections[group.id] ?? [];
                  const invalid = missing.some((g) => g.id === group.id);
                  return (
                    <fieldset key={group.id}>
                      <legend className="flex items-baseline justify-between gap-3 text-sm font-semibold">
                        <span>
                          {group.label}
                          {group.required ? (
                            <span className="ml-1 text-primary">*</span>
                          ) : (
                            <span className="ml-1 font-normal text-muted">opcional</span>
                          )}
                        </span>
                        {group.id === "lados" ? (
                          <span className="text-xs font-normal text-muted">{picked.length}/2</span>
                        ) : null}
                      </legend>
                      {group.hint ? <p className="mt-1 text-xs text-muted">{group.hint}</p> : null}
                      {invalid ? (
                        <p className="mt-1 text-xs text-primary">Elige esta opción para continuar</p>
                      ) : null}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {group.options.map((opt) => {
                          const selected = picked.includes(opt.id);
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() =>
                                toggle(group.id, opt.id, group.type, group.id === "lados" ? 2 : undefined)
                              }
                              className={cn(
                                "min-h-11 rounded-md border px-3 py-2 text-left text-sm transition-colors",
                                selected
                                  ? "border-forest bg-forest text-forest-foreground"
                                  : "border-border bg-surface-2 text-fg hover:border-forest/40",
                              )}
                            >
                              <span className="block font-medium">{opt.label}</span>
                              {opt.priceDelta ? (
                                <span
                                  className={cn(
                                    "block text-xs tabular-nums",
                                    selected ? "text-forest-foreground/80" : "text-muted",
                                  )}
                                >
                                  {opt.priceDelta > 0 ? "+" : ""}
                                  {formatPrice(opt.priceDelta)}
                                </span>
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>
                  );
                })}

                <div>
                  <Label htmlFor="notas">Notas para la cocina</Label>
                  <Textarea
                    id="notas"
                    className="mt-2"
                    placeholder="Sin cebolla, extra salsa, alergias…"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="shrink-0 border-t border-border bg-surface p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="size-11"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Menos"
                  >
                    <Minus />
                  </Button>
                  <span className="w-8 text-center text-base font-semibold tabular-nums">{qty}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="size-11"
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Más"
                  >
                    <Plus />
                  </Button>
                </div>
                <p className="font-display text-2xl font-semibold tabular-nums text-fg">
                  {formatPrice(price * qty)}
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <Button type="button" variant="outline" disabled={!canSubmit} onClick={addToCart}>
                  Añadir al pedido
                </Button>
                <Button type="button" disabled={!canSubmit} onClick={sendNow}>
                  Enviar pedido
                </Button>
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
