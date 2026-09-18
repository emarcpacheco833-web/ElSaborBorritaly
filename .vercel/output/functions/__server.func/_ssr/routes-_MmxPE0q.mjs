import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as ShoppingBag, c as MapPin, d as Check, f as ArrowDown, i as Trash2, l as Instagram, n as Users, o as Plus, s as Minus, t as X, u as Clock3 } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-_MmxPE0q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatPrice(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(value);
}
function uid() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,transform,box-shadow,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
			forest: "bg-forest text-forest-foreground hover:bg-forest/90",
			outline: "border border-border bg-surface text-fg hover:bg-surface-2",
			ghost: "text-fg hover:bg-surface-2",
			cream: "bg-surface text-fg shadow-sm hover:bg-surface-2"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-md border border-border bg-surface px-3 text-base text-fg outline-none transition-[box-shadow,border-color] placeholder:text-muted/80 focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("text-sm font-medium text-fg", className),
		...props
	});
}
var Sheet = Dialog$1;
function SheetContent({ className, children, side = "right", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, { className: "fixed inset-0 z-50 bg-espresso/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed z-50 flex flex-col overflow-hidden bg-surface text-fg shadow-[var(--shadow-lift)] outline-none", side === "right" && "inset-y-0 right-0 h-full w-full max-w-md border-l border-border", side === "bottom" && "inset-x-0 bottom-0 max-h-[92dvh] rounded-t-xl border-t border-border", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-3 right-3 z-10 flex size-11 items-center justify-center rounded-md text-muted hover:bg-surface-2 hover:text-fg",
			"aria-label": "Cerrar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
		})]
	})] });
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-2xl font-semibold text-fg", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-base text-fg outline-none transition-[box-shadow,border-color] placeholder:text-muted/80 focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
var COMBOS = [
	{
		id: "mofongo-casa",
		name: "Combo Mofongo de la Casa",
		tagline: "Especialidad de la casa",
		description: "Mofongo majado al momento con ajo y sazón. Elige el relleno y pide la salsa de la casa — criolla, ajillo, rosa, blanca o picante.",
		price: 16.95,
		image: "/images/mofongo.jpg",
		category: "mofongo",
		serves: "1 persona",
		featured: true,
		groups: [
			{
				id: "base",
				label: "Base del mofongo",
				type: "single",
				required: true,
				options: [
					{
						id: "verde",
						label: "Plátano verde"
					},
					{
						id: "trifongo",
						label: "Trifongo (verde, maduro y yuca)",
						priceDelta: 2
					},
					{
						id: "yuca",
						label: "Yuca",
						priceDelta: 1.5
					}
				]
			},
			{
				id: "relleno",
				label: "Relleno",
				type: "single",
				required: true,
				options: [
					{
						id: "pollo",
						label: "Pollo"
					},
					{
						id: "carne-frita",
						label: "Carne frita"
					},
					{
						id: "chicharron-pollo",
						label: "Chicharrón de pollo"
					},
					{
						id: "camarones",
						label: "Camarones",
						priceDelta: 4
					},
					{
						id: "churrasco",
						label: "Churrasco",
						priceDelta: 6
					},
					{
						id: "mixto",
						label: "Mixto de carnes",
						priceDelta: 3
					}
				]
			},
			{
				id: "salsa",
				label: "Salsa de la casa",
				hint: "Pide la salsa de la casa — es la firma de Sabor Boriitaly",
				type: "single",
				required: true,
				options: [
					{
						id: "criolla",
						label: "Criolla"
					},
					{
						id: "ajillo",
						label: "Ajillo"
					},
					{
						id: "rosa",
						label: "Rosa"
					},
					{
						id: "blanca",
						label: "Blanca"
					},
					{
						id: "picante",
						label: "Picante de la casa"
					}
				]
			},
			{
				id: "lado",
				label: "Acompañante",
				type: "single",
				required: true,
				options: [
					{
						id: "ensalada",
						label: "Ensalada verde"
					},
					{
						id: "arroz",
						label: "Arroz blanco"
					},
					{
						id: "tostones",
						label: "Tostones"
					},
					{
						id: "maduros",
						label: "Maduros"
					}
				]
			},
			{
				id: "extras",
				label: "Extras",
				type: "multi",
				required: false,
				options: [
					{
						id: "extra-salsa",
						label: "Extra salsa de la casa",
						priceDelta: 1
					},
					{
						id: "queso-frito",
						label: "Queso frito",
						priceDelta: 2
					},
					{
						id: "aguacate",
						label: "Aguacate",
						priceDelta: 1.5
					}
				]
			}
		]
	},
	{
		id: "pizza-boriitaly",
		name: "Combo Pizza Boriitaly",
		tagline: "Italia con sazón boricua",
		description: "Masa horneada, mozzarella fundida y toppings a tu gusto. Prueba la pizza boricua con pernil y plátano, o arma la clásica.",
		price: 14.95,
		image: "/images/pizza.jpg",
		category: "pizza",
		serves: "1 a 4",
		featured: true,
		groups: [
			{
				id: "tamano",
				label: "Tamaño",
				type: "single",
				required: true,
				options: [
					{
						id: "personal",
						label: "Personal (10\")"
					},
					{
						id: "mediana",
						label: "Mediana (14\")",
						priceDelta: 4
					},
					{
						id: "familiar",
						label: "Familiar (16\")",
						priceDelta: 10
					}
				]
			},
			{
				id: "sabor",
				label: "Sabor",
				type: "single",
				required: true,
				options: [
					{
						id: "queso",
						label: "Queso"
					},
					{
						id: "pepperoni",
						label: "Pepperoni"
					},
					{
						id: "jamon",
						label: "Jamón"
					},
					{
						id: "vegetales",
						label: "Vegetales"
					},
					{
						id: "boricua",
						label: "Boricua — pernil y plátano",
						priceDelta: 3
					},
					{
						id: "cuatro",
						label: "Cuatro quesos",
						priceDelta: 2
					},
					{
						id: "suprema",
						label: "Suprema",
						priceDelta: 3
					}
				]
			},
			{
				id: "extras",
				label: "Extras",
				type: "multi",
				required: false,
				options: [
					{
						id: "extra-queso",
						label: "Extra queso",
						priceDelta: 2
					},
					{
						id: "jalapenos",
						label: "Jalapeños"
					},
					{
						id: "cebolla",
						label: "Cebolla"
					},
					{
						id: "champi",
						label: "Champiñones",
						priceDelta: 1
					},
					{
						id: "orilla",
						label: "Orilla rellena de queso",
						priceDelta: 3
					}
				]
			},
			{
				id: "bebida",
				label: "Bebida",
				type: "single",
				required: true,
				options: [
					{
						id: "sin",
						label: "Sin bebida"
					},
					{
						id: "refresco",
						label: "Refresco",
						priceDelta: 2
					},
					{
						id: "jugo",
						label: "Jugo natural",
						priceDelta: 2.5
					}
				]
			}
		]
	},
	{
		id: "pasta-italiana",
		name: "Combo Pasta Italiana",
		tagline: "Hecha al momento",
		description: "Pastas cremosas o en salsa de tomate, con el sazón de la casa. Elige la pasta, la salsa y la proteína.",
		price: 15.95,
		image: "/images/pasta.jpg",
		category: "pasta",
		serves: "1 persona",
		groups: [
			{
				id: "pasta",
				label: "Pasta",
				type: "single",
				required: true,
				options: [
					{
						id: "spaghetti",
						label: "Spaghetti"
					},
					{
						id: "fettuccine",
						label: "Fettuccine"
					},
					{
						id: "penne",
						label: "Penne"
					},
					{
						id: "lasagna",
						label: "Lasagna de la casa",
						priceDelta: 3
					}
				]
			},
			{
				id: "salsa",
				label: "Salsa",
				type: "single",
				required: true,
				options: [
					{
						id: "marinara",
						label: "Marinara"
					},
					{
						id: "alfredo",
						label: "Alfredo"
					},
					{
						id: "pesto",
						label: "Pesto"
					},
					{
						id: "bolonesa",
						label: "Boloñesa"
					},
					{
						id: "carbonara",
						label: "Carbonara"
					}
				]
			},
			{
				id: "proteina",
				label: "Proteína",
				type: "single",
				required: true,
				options: [
					{
						id: "ninguna",
						label: "Sin proteína extra"
					},
					{
						id: "pollo",
						label: "Pollo",
						priceDelta: 3
					},
					{
						id: "camarones",
						label: "Camarones",
						priceDelta: 5
					},
					{
						id: "res",
						label: "Res",
						priceDelta: 4
					}
				]
			},
			{
				id: "extras",
				label: "Extras",
				type: "multi",
				required: false,
				options: [{
					id: "pan-ajo",
					label: "Pan de ajo",
					priceDelta: 2
				}, {
					id: "parmesano",
					label: "Extra parmesano",
					priceDelta: 1
				}]
			}
		]
	},
	{
		id: "burger-media",
		name: "Combo Hamburguesa Casera ½ lb",
		tagline: "Home made, a tu gusto",
		description: "Hamburguesa casera de media libra, jugosa y hecha en casa. Elige el queso, el término y con qué la quieres.",
		price: 12.95,
		image: "/images/burger.jpg",
		category: "hamburguesa",
		serves: "1 persona",
		groups: [
			{
				id: "queso",
				label: "Queso",
				type: "single",
				required: true,
				options: [
					{
						id: "americano",
						label: "Americano"
					},
					{
						id: "suizo",
						label: "Suizo"
					},
					{
						id: "mozzarella",
						label: "Mozzarella"
					},
					{
						id: "sin",
						label: "Sin queso"
					}
				]
			},
			{
				id: "termino",
				label: "Término",
				type: "single",
				required: true,
				options: [
					{
						id: "medio",
						label: "Término medio"
					},
					{
						id: "tres-cuartos",
						label: "Tres cuartos"
					},
					{
						id: "bien",
						label: "Bien cocida"
					}
				]
			},
			{
				id: "extras",
				label: "Extras",
				type: "multi",
				required: false,
				options: [
					{
						id: "bacon",
						label: "Bacon",
						priceDelta: 1.5
					},
					{
						id: "huevo",
						label: "Huevo",
						priceDelta: 1
					},
					{
						id: "cebolla",
						label: "Cebolla caramelizada"
					},
					{
						id: "jalapenos",
						label: "Jalapeños"
					},
					{
						id: "aguacate",
						label: "Aguacate",
						priceDelta: 1.5
					}
				]
			},
			{
				id: "lado",
				label: "Acompañante",
				type: "single",
				required: true,
				options: [
					{
						id: "papas",
						label: "Papas fritas"
					},
					{
						id: "tostones",
						label: "Tostones"
					},
					{
						id: "yuca",
						label: "Yuca frita"
					},
					{
						id: "ensalada",
						label: "Ensalada"
					}
				]
			}
		]
	},
	{
		id: "mixto-boriitaly",
		name: "Combo Mixto Boriitaly",
		tagline: "Lo criollo y lo italiano",
		description: "El plato de la fusión: mofongo de un lado y pasta o pizza del otro. Para no tener que decidir.",
		price: 22.95,
		image: "/images/camarones.jpg",
		category: "mofongo",
		serves: "1 persona",
		featured: true,
		groups: [
			{
				id: "relleno",
				label: "Relleno del mofongo",
				type: "single",
				required: true,
				options: [
					{
						id: "pollo",
						label: "Pollo"
					},
					{
						id: "carne-frita",
						label: "Carne frita"
					},
					{
						id: "camarones",
						label: "Camarones",
						priceDelta: 3
					},
					{
						id: "churrasco",
						label: "Churrasco",
						priceDelta: 5
					}
				]
			},
			{
				id: "salsa",
				label: "Salsa de la casa",
				type: "single",
				required: true,
				options: [
					{
						id: "criolla",
						label: "Criolla"
					},
					{
						id: "ajillo",
						label: "Ajillo"
					},
					{
						id: "rosa",
						label: "Rosa"
					},
					{
						id: "picante",
						label: "Picante de la casa"
					}
				]
			},
			{
				id: "italiano",
				label: "El lado italiano",
				type: "single",
				required: true,
				options: [
					{
						id: "pasta-alfredo",
						label: "Pasta Alfredo"
					},
					{
						id: "pasta-marinara",
						label: "Pasta marinara"
					},
					{
						id: "pizza",
						label: "Pizza personal de queso"
					},
					{
						id: "lasagna",
						label: "Lasagna",
						priceDelta: 2
					}
				]
			},
			{
				id: "lado",
				label: "Acompañante",
				type: "single",
				required: true,
				options: [
					{
						id: "ensalada",
						label: "Ensalada verde"
					},
					{
						id: "tostones",
						label: "Tostones"
					},
					{
						id: "maduros",
						label: "Maduros"
					}
				]
			}
		]
	},
	{
		id: "familiar-ceiba",
		name: "Combo Familiar Ceiba",
		tagline: "Para compartir en la mesa",
		description: "Bandeja para 3 a 4 personas: dos proteínas, arroz, habichuelas, dos acompañantes y refresco de 2 litros.",
		price: 44.95,
		image: "/images/familiar.jpg",
		category: "familiar",
		serves: "3 a 4 personas",
		groups: [
			{
				id: "proteina-1",
				label: "Primera proteína",
				type: "single",
				required: true,
				options: [
					{
						id: "pollo",
						label: "Pollo"
					},
					{
						id: "pernil",
						label: "Pernil"
					},
					{
						id: "carne-frita",
						label: "Carne frita"
					},
					{
						id: "chuleta",
						label: "Chuletas"
					}
				]
			},
			{
				id: "proteina-2",
				label: "Segunda proteína",
				type: "single",
				required: true,
				options: [
					{
						id: "pollo",
						label: "Pollo"
					},
					{
						id: "pernil",
						label: "Pernil"
					},
					{
						id: "carne-frita",
						label: "Carne frita"
					},
					{
						id: "churrasco",
						label: "Churrasco",
						priceDelta: 8
					}
				]
			},
			{
				id: "arroz",
				label: "Arroz",
				type: "single",
				required: true,
				options: [
					{
						id: "blanco",
						label: "Arroz blanco"
					},
					{
						id: "gandules",
						label: "Arroz con gandules"
					},
					{
						id: "mamposteao",
						label: "Mamposteao"
					}
				]
			},
			{
				id: "habichuelas",
				label: "Habichuelas",
				type: "single",
				required: true,
				options: [
					{
						id: "rojas",
						label: "Rojas"
					},
					{
						id: "rosadas",
						label: "Rosadas"
					},
					{
						id: "sin",
						label: "Sin habichuelas"
					}
				]
			},
			{
				id: "lados",
				label: "Acompañantes (elige 2)",
				type: "multi",
				required: true,
				options: [
					{
						id: "tostones",
						label: "Tostones"
					},
					{
						id: "maduros",
						label: "Maduros"
					},
					{
						id: "yuca",
						label: "Yuca"
					},
					{
						id: "ensalada",
						label: "Ensalada"
					},
					{
						id: "papas",
						label: "Papas fritas"
					}
				]
			},
			{
				id: "refresco",
				label: "Refresco 2 litros",
				type: "single",
				required: true,
				options: [
					{
						id: "cola",
						label: "Cola"
					},
					{
						id: "lima",
						label: "Lima-limón"
					},
					{
						id: "sin",
						label: "Sin refresco",
						priceDelta: -2
					}
				]
			}
		]
	}
];
var HOURS = [
	{
		day: "Lunes",
		time: "Cerrado"
	},
	{
		day: "Martes",
		time: "Cerrado"
	},
	{
		day: "Miércoles",
		time: "11:00 a. m. – 9:00 p. m."
	},
	{
		day: "Jueves",
		time: "2:00 p. m. – 8:00 p. m."
	},
	{
		day: "Viernes",
		time: "12:00 p. m. – 8:00 p. m."
	},
	{
		day: "Sábado",
		time: "12:00 p. m. – 8:00 p. m."
	},
	{
		day: "Domingo",
		time: "12:00 p. m. – 8:00 p. m."
	}
];
function getCombo(id) {
	return COMBOS.find((c) => c.id === id);
}
function unitPrice(combo, selections) {
	let total = combo.price;
	for (const group of combo.groups) {
		const picked = selections[group.id] ?? [];
		for (const id of picked) {
			const opt = group.options.find((o) => o.id === id);
			total += opt?.priceDelta ?? 0;
		}
	}
	return total;
}
function defaultSelections(combo) {
	const next = {};
	for (const group of combo.groups) if (group.type === "single" && group.required && group.options[0]) next[group.id] = [group.options[0].id];
	else next[group.id] = [];
	return next;
}
function missingGroups(combo, selections) {
	return combo.groups.filter((g) => {
		if (!g.required) return false;
		const picked = selections[g.id] ?? [];
		if (g.id === "lados") return picked.length < 2;
		return picked.length === 0;
	});
}
function summarize(combo, selections) {
	return combo.groups.map((g) => {
		const picked = selections[g.id] ?? [];
		if (!picked.length) return null;
		const labels = picked.map((id) => g.options.find((o) => o.id === id)?.label).filter(Boolean).join(", ");
		return `${g.label}: ${labels}`;
	}).filter(Boolean);
}
function itemTotal(item) {
	return item.unitPrice * item.qty;
}
function cartTotal(items) {
	return items.reduce((sum, item) => sum + itemTotal(item), 0);
}
var useCart = create()(persist((set, get) => ({
	items: [],
	name: "",
	mode: "recoger",
	orderNotes: "",
	lastTicket: null,
	addItem: (item) => {
		const combo = getCombo(item.comboId);
		if (!combo) return;
		const price = unitPrice(combo, item.selections);
		set((s) => ({ items: [...s.items, {
			...item,
			uid: uid(),
			unitPrice: price,
			qty: Math.max(1, item.qty)
		}] }));
	},
	removeItem: (itemUid) => set((s) => ({ items: s.items.filter((i) => i.uid !== itemUid) })),
	setQty: (itemUid, qty) => set((s) => ({ items: s.items.map((i) => i.uid === itemUid ? {
		...i,
		qty: Math.max(1, qty)
	} : i).filter((i) => i.qty > 0) })),
	setName: (name) => set({ name }),
	setMode: (mode) => set({ mode }),
	setOrderNotes: (orderNotes) => set({ orderNotes }),
	clear: () => set({ items: [] }),
	send: () => {
		const { items, name, mode, orderNotes } = get();
		if (!items.length) return null;
		const ticket = {
			number: `SB-${Math.floor(1e3 + Math.random() * 9e3)}`,
			name: name.trim() || "Cliente",
			mode,
			notes: orderNotes.trim(),
			items,
			total: cartTotal(items),
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set({
			lastTicket: ticket,
			items: [],
			orderNotes: ""
		});
		return ticket;
	}
}), {
	name: "sabor-boriitaly-pedido",
	partialize: (s) => ({
		items: s.items,
		name: s.name,
		mode: s.mode,
		orderNotes: s.orderNotes
	})
}));
function comboName(id) {
	return COMBOS.find((c) => c.id === id)?.name ?? "Combo";
}
function CartSheet({ open, onOpenChange, onSent }) {
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
		if (!send()) return;
		onOpenChange(false);
		onSent();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border px-5 py-5 pr-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Tu pedido" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Revisa los combos y envía el menú a la cocina." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-5 py-4",
				children: [items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-10 text-center text-sm text-muted",
					children: "Todavía no hay combos. Elige uno del menú para armarlo."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartRow, {
						item,
						onQty: (q) => setQty(item.uid, q),
						onRemove: () => removeItem(item.uid)
					}, item.uid))
				}), items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "cliente",
							children: "Nombre"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "cliente",
							className: "mt-2",
							placeholder: "¿A nombre de quién?",
							value: name,
							onChange: (e) => setName(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Cómo lo quieres"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 grid grid-cols-2 gap-2",
							children: [["recoger", "Para recoger"], ["mesa", "Comer aquí"]].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMode(value),
								className: cn("h-11 rounded-md border text-sm font-medium", mode === value ? "border-forest bg-forest text-forest-foreground" : "border-border bg-surface-2"),
								children: label
							}, value))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "pedido-notas",
							children: "Notas del pedido"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "pedido-notas",
							className: "mt-2",
							placeholder: "Mesa, hora, instrucciones…",
							value: orderNotes,
							onChange: (e) => setOrderNotes(e.target.value)
						})] })
					]
				}) : null]
			}),
			items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: "Total"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-semibold tabular-nums",
						children: formatPrice(total)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					size: "lg",
					onClick: handleSend,
					children: "Enviar pedido"
				})]
			}) : null
		] })
	});
}
function CartRow({ item, onQty, onRemove }) {
	const combo = getCombo(item.comboId);
	const lines = combo ? summarize(combo, item.selections) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-lg bg-surface-2 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: comboName(item.comboId)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-1 space-y-0.5 text-xs text-muted",
				children: [lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line)), item.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Notas: ", item.notes] }) : null]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shrink-0 font-medium tabular-nums",
				children: formatPrice(itemTotal(item))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "icon",
						className: "size-9",
						onClick: () => onQty(item.qty - 1),
						"aria-label": "Menos",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-6 text-center text-sm font-semibold tabular-nums",
						children: item.qty
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "icon",
						className: "size-9",
						onClick: () => onQty(item.qty + 1),
						"aria-label": "Más",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				onClick: onRemove,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), "Quitar"]
			})]
		})]
	});
}
function Badge({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full bg-forest/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-forest uppercase", className),
		...props
	});
}
function ComboMenu({ onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "combos",
		className: "mx-auto max-w-6xl px-4 py-16 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.28em] text-primary uppercase",
					children: "Menú digital"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-semibold md:text-5xl",
					children: "Nuestros combos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Toca un combo, elige lo que lleva — relleno, salsa, tamaño, extras — y envía. Esta es la demostración del menú para mostrar en la mesa o desde el celular."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: COMBOS.map((combo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onSelect(combo),
				className: "group flex flex-col overflow-hidden rounded-xl bg-surface text-left shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-4/3 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: combo.image,
						alt: combo.name,
						className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
					}), combo.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "absolute top-3 left-3 bg-primary text-primary-foreground",
						children: "De la casa"
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-gold uppercase",
							children: combo.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-2xl leading-tight font-semibold",
							children: combo.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted",
							children: combo.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-end justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-semibold tabular-nums text-primary",
								children: formatPrice(combo.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1 text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3.5" }), combo.serves]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 inline-flex h-11 items-center justify-center rounded-md bg-forest text-sm font-medium text-forest-foreground",
							children: "Personalizar y pedir"
						})
					]
				})]
			}, combo.id))
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-espresso/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed z-50 flex flex-col overflow-hidden bg-surface text-fg shadow-[var(--shadow-lift)] outline-none", "inset-x-0 bottom-0 max-h-[92dvh] rounded-t-xl", "md:inset-auto md:top-1/2 md:left-1/2 md:w-full md:max-w-xl md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl md:max-h-[88vh]", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-3 right-3 z-10 flex size-11 items-center justify-center rounded-md text-muted hover:bg-surface-2 hover:text-fg",
			"aria-label": "Cerrar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
		})]
	})] });
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-2xl font-semibold leading-tight text-fg", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted", className),
		...props
	});
}
function CustomizeDialog({ combo, open, onOpenChange, onAdded, onReadyToSend }) {
	const addItem = useCart((s) => s.addItem);
	const [selections, setSelections] = (0, import_react.useState)({});
	const [notes, setNotes] = (0, import_react.useState)("");
	const [qty, setQty] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		if (!open || !combo) return;
		setSelections(defaultSelections(combo));
		setNotes("");
		setQty(1);
	}, [open, combo]);
	const price = (0, import_react.useMemo)(() => combo ? unitPrice(combo, selections) : 0, [combo, selections]);
	const missing = combo ? missingGroups(combo, selections) : [];
	const canSubmit = Boolean(combo) && missing.length === 0;
	function toggle(groupId, choiceId, type, max) {
		setSelections((prev) => {
			const current = prev[groupId] ?? [];
			if (type === "single") return {
				...prev,
				[groupId]: [choiceId]
			};
			const has = current.includes(choiceId);
			let next = has ? current.filter((id) => id !== choiceId) : [...current, choiceId];
			if (!has && max && next.length > max) next = next.slice(-max);
			return {
				...prev,
				[groupId]: next
			};
		});
	}
	function addToCart() {
		if (!combo || !canSubmit) return;
		addItem({
			comboId: combo.id,
			qty,
			selections,
			notes
		});
		onOpenChange(false);
		onAdded();
	}
	function sendNow() {
		if (!combo || !canSubmit) return;
		addItem({
			comboId: combo.id,
			qty,
			selections,
			notes
		});
		onOpenChange(false);
		onReadyToSend();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: combo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-40 shrink-0 overflow-hidden md:h-48",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: combo.image,
					alt: "",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-surface via-surface/20 to-transparent" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-5 pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.22em] text-gold uppercase",
						children: combo.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mt-1 pr-10",
						children: combo.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mt-2",
						children: combo.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-2xl font-semibold tabular-nums text-primary",
						children: [formatPrice(combo.price), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-sm font-normal text-muted",
							children: "base"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-6",
						children: [combo.groups.map((group) => {
							const picked = selections[group.id] ?? [];
							const invalid = missing.some((g) => g.id === group.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
									className: "flex items-baseline justify-between gap-3 text-sm font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [group.label, group.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 text-primary",
										children: "*"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 font-normal text-muted",
										children: "opcional"
									})] }), group.id === "lados" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-normal text-muted",
										children: [picked.length, "/2"]
									}) : null]
								}),
								group.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: group.hint
								}) : null,
								invalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-primary",
									children: "Elige esta opción para continuar"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: group.options.map((opt) => {
										const selected = picked.includes(opt.id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => toggle(group.id, opt.id, group.type, group.id === "lados" ? 2 : void 0),
											className: cn("min-h-11 rounded-md border px-3 py-2 text-left text-sm transition-colors", selected ? "border-forest bg-forest text-forest-foreground" : "border-border bg-surface-2 text-fg hover:border-forest/40"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-medium",
												children: opt.label
											}), opt.priceDelta ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: cn("block text-xs tabular-nums", selected ? "text-forest-foreground/80" : "text-muted"),
												children: [opt.priceDelta > 0 ? "+" : "", formatPrice(opt.priceDelta)]
											}) : null]
										}, opt.id);
									})
								})
							] }, group.id);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "notas",
							children: "Notas para la cocina"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "notas",
							className: "mt-2",
							placeholder: "Sin cebolla, extra salsa, alergias…",
							value: notes,
							onChange: (e) => setNotes(e.target.value)
						})] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 border-t border-border bg-surface p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								size: "icon",
								className: "size-11",
								onClick: () => setQty((q) => Math.max(1, q - 1)),
								"aria-label": "Menos",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-8 text-center text-base font-semibold tabular-nums",
								children: qty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								size: "icon",
								className: "size-11",
								onClick: () => setQty((q) => q + 1),
								"aria-label": "Más",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold tabular-nums text-fg",
						children: formatPrice(price * qty)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						disabled: !canSubmit,
						onClick: addToCart,
						children: "Añadir al pedido"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						disabled: !canSubmit,
						onClick: sendNow,
						children: "Enviar pedido"
					})]
				})]
			})
		] }) : null })
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "inicio",
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-[78dvh] md:min-h-[70vh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Terraza de Sabor Boriitaly en Ceiba al atardecer",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-espresso via-espresso/55 to-espresso/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[78dvh] max-w-6xl flex-col justify-end px-4 pt-24 pb-14 md:min-h-[70vh] md:pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-[0.28em] text-gold uppercase",
							children: "Restaurante familiar · Ceiba"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-2xl font-display text-5xl leading-[0.95] font-semibold text-primary-foreground sm:text-6xl md:text-7xl",
							children: ["Criollo e italiano,", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: " en un solo plato."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/85 md:text-lg",
							children: "Mofongo con salsa de la casa, pizza, pastas y hamburguesa casera de media libra. Elige tu combo, arma lo que lleva, y envía el pedido."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#combos",
									children: ["Ver combos", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "cream",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#visita",
									children: "Cómo llegar"
								})
							})]
						})
					]
				})
			]
		})
	});
}
function OrderSuccess({ open, onOpenChange }) {
	const ticket = useCart((s) => s.lastTicket);
	if (!ticket) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "md:max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-y-auto px-5 pt-12 pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex size-14 items-center justify-center rounded-full bg-forest text-forest-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mt-4 text-center",
						children: "Pedido enviado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "mt-2 text-center",
						children: [
							"Ticket ",
							ticket.number,
							" · ",
							ticket.mode === "mesa" ? "Comer aquí" : "Para recoger",
							" ·",
							" ",
							ticket.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-lg border border-border bg-surface-2 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3 text-sm",
								children: ticket.items.map((item) => {
									const combo = getCombo(item.comboId);
									const lines = combo ? summarize(combo, item.selections) : [];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-3 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											item.qty,
											" × ",
											comboName(item.comboId)
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums",
											children: formatPrice(itemTotal(item))
										})]
									}), lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: line
									}, line))] }, item.uid);
								})
							}),
							ticket.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-muted",
								children: ["Notas: ", ticket.notes]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex justify-between border-t border-border pt-3 font-display text-xl font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: formatPrice(ticket.total)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-center text-xs text-muted",
						children: "Demostración del menú digital. En el local, este envío llegaría a la cocina."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6 w-full",
						onClick: () => onOpenChange(false),
						children: "Volver al menú"
					})
				]
			})
		})
	});
}
function SiteHeader({ onOpenCart }) {
	const count = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#inicio",
				className: "flex min-w-0 items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/logo.jpg",
					alt: "Sabor Boriitaly",
					className: "size-10 rounded-full object-cover outline outline-1 -outline-offset-1 outline-espresso/10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-lg leading-none font-semibold tracking-tight text-fg md:text-xl",
						children: "Sabor Boriitaly"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-[11px] tracking-[0.18em] text-muted uppercase sm:block",
						children: "Ceiba · Puerto Rico"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#combos",
						className: "hidden h-11 items-center px-3 text-sm font-medium text-muted hover:text-fg sm:flex",
						children: "Combos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#visita",
						className: "hidden h-11 items-center px-3 text-sm font-medium text-muted hover:text-fg md:flex",
						children: "Visítanos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "forest",
						size: "sm",
						className: "relative pl-3.5 pr-3",
						onClick: onOpenCart,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}),
							"Pedido",
							count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-semibold text-primary-foreground tabular-nums",
								children: count
							}) : null
						]
					})
				]
			})]
		})
	});
}
function VisitSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "visita",
		className: "border-t border-border bg-forest text-forest-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.28em] text-gold uppercase",
					children: "Ceiba"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-semibold text-forest-foreground md:text-5xl",
					children: "Ven a la mesa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-forest-foreground/80",
					children: "Restaurante familiar en Ave. Lauro Piñero, esquina PR-975. Terraza al aire libre, sazón boricua y platos italianos hechos en casa."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "Dirección"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-forest-foreground/75",
								children: [
									"Ave. Lauro Piñero esq. carretera 975",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Ceiba, Puerto Rico 00735"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.google.com/maps/search/?api=1&query=18.26729,-65.63982",
								target: "_blank",
								rel: "noreferrer",
								className: "mt-1 inline-block text-sm font-medium text-gold underline-offset-4 hover:underline",
								children: "Cómo llegar"
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "mt-0.5 size-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "Instagram"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.instagram.com/saborboriitaly/",
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-gold underline-offset-4 hover:underline",
							children: "@saborboriitaly"
						})] })]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-forest-foreground/5 p-5 md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold",
							children: "Horario"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-forest-foreground/10",
						children: HOURS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-4 py-2.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: row.day
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: row.time === "Cerrado" ? "text-forest-foreground/50" : "",
								children: row.time
							})]
						}, row.day))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-forest-foreground/55",
						children: "Horario publicado como referencia. Confirma en Instagram el día que visites."
					})
				]
			})]
		})
	});
}
function Home() {
	const [combo, setCombo] = (0, import_react.useState)(null);
	const [customizeOpen, setCustomizeOpen] = (0, import_react.useState)(false);
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const [successOpen, setSuccessOpen] = (0, import_react.useState)(false);
	function openCombo(next) {
		setCombo(next);
		setCustomizeOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { onOpenCart: () => setCartOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboMenu, { onSelect: openCombo }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border bg-bg px-4 py-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-semibold",
						children: "Sabor Boriitaly"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Ceiba, Puerto Rico · Comida criolla e italiana"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted",
						children: "Demostración de menú digital. Precios ilustrativos para presentar el concepto."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomizeDialog, {
				combo,
				open: customizeOpen,
				onOpenChange: setCustomizeOpen,
				onAdded: () => setCartOpen(true),
				onReadyToSend: () => setCartOpen(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSheet, {
				open: cartOpen,
				onOpenChange: setCartOpen,
				onSent: () => setSuccessOpen(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSuccess, {
				open: successOpen,
				onOpenChange: setSuccessOpen
			})
		]
	});
}
//#endregion
export { Home as component };
