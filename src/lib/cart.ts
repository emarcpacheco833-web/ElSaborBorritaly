import { create } from "zustand";
import { persist } from "zustand/middleware";
import { COMBOS, getCombo, unitPrice } from "./menu";
import { uid } from "./utils";

export type CartItem = {
  uid: string;
  comboId: string;
  qty: number;
  selections: Record<string, string[]>;
  notes: string;
  unitPrice: number;
};

export type OrderTicket = {
  number: string;
  name: string;
  mode: "recoger" | "mesa";
  notes: string;
  items: CartItem[];
  total: number;
  createdAt: string;
};

type CartState = {
  items: CartItem[];
  name: string;
  mode: "recoger" | "mesa";
  orderNotes: string;
  lastTicket: OrderTicket | null;
  addItem: (item: Omit<CartItem, "uid" | "unitPrice">) => void;
  removeItem: (itemUid: string) => void;
  setQty: (itemUid: string, qty: number) => void;
  setName: (name: string) => void;
  setMode: (mode: "recoger" | "mesa") => void;
  setOrderNotes: (notes: string) => void;
  clear: () => void;
  send: () => OrderTicket | null;
};

export function itemTotal(item: CartItem) {
  return item.unitPrice * item.qty;
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + itemTotal(item), 0);
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      name: "",
      mode: "recoger",
      orderNotes: "",
      lastTicket: null,
      addItem: (item) => {
        const combo = getCombo(item.comboId);
        if (!combo) return;
        const price = unitPrice(combo, item.selections);
        set((s) => ({
          items: [
            ...s.items,
            { ...item, uid: uid(), unitPrice: price, qty: Math.max(1, item.qty) },
          ],
        }));
      },
      removeItem: (itemUid) =>
        set((s) => ({ items: s.items.filter((i) => i.uid !== itemUid) })),
      setQty: (itemUid, qty) =>
        set((s) => ({
          items: s.items
            .map((i) => (i.uid === itemUid ? { ...i, qty: Math.max(1, qty) } : i))
            .filter((i) => i.qty > 0),
        })),
      setName: (name) => set({ name }),
      setMode: (mode) => set({ mode }),
      setOrderNotes: (orderNotes) => set({ orderNotes }),
      clear: () => set({ items: [] }),
      send: () => {
        const { items, name, mode, orderNotes } = get();
        if (!items.length) return null;
        const ticket: OrderTicket = {
          number: `SB-${Math.floor(1000 + Math.random() * 9000)}`,
          name: name.trim() || "Cliente",
          mode,
          notes: orderNotes.trim(),
          items,
          total: cartTotal(items),
          createdAt: new Date().toISOString(),
        };
        set({ lastTicket: ticket, items: [], orderNotes: "" });
        return ticket;
      },
    }),
    {
      name: "sabor-boriitaly-pedido",
      partialize: (s) => ({
        items: s.items,
        name: s.name,
        mode: s.mode,
        orderNotes: s.orderNotes,
      }),
    },
  ),
);

export function comboName(id: string) {
  return COMBOS.find((c) => c.id === id)?.name ?? "Combo";
}
