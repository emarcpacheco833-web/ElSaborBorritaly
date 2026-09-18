export type Choice = {
  id: string;
  label: string;
  priceDelta?: number;
};

export type OptionGroup = {
  id: string;
  label: string;
  hint?: string;
  type: "single" | "multi";
  required: boolean;
  options: Choice[];
};

export type Combo = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  category: "mofongo" | "pizza" | "pasta" | "hamburguesa" | "familiar";
  serves: string;
  featured?: boolean;
  groups: OptionGroup[];
};

export const COMBOS: Combo[] = [
  {
    id: "mofongo-casa",
    name: "Combo Mofongo de la Casa",
    tagline: "Especialidad de la casa",
    description:
      "Mofongo majado al momento con ajo y sazón. Elige el relleno y pide la salsa de la casa — criolla, ajillo, rosa, blanca o picante.",
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
          { id: "verde", label: "Plátano verde" },
          { id: "trifongo", label: "Trifongo (verde, maduro y yuca)", priceDelta: 2 },
          { id: "yuca", label: "Yuca", priceDelta: 1.5 },
        ],
      },
      {
        id: "relleno",
        label: "Relleno",
        type: "single",
        required: true,
        options: [
          { id: "pollo", label: "Pollo" },
          { id: "carne-frita", label: "Carne frita" },
          { id: "chicharron-pollo", label: "Chicharrón de pollo" },
          { id: "camarones", label: "Camarones", priceDelta: 4 },
          { id: "churrasco", label: "Churrasco", priceDelta: 6 },
          { id: "mixto", label: "Mixto de carnes", priceDelta: 3 },
        ],
      },
      {
        id: "salsa",
        label: "Salsa de la casa",
        hint: "Pide la salsa de la casa — es la firma de Sabor Boriitaly",
        type: "single",
        required: true,
        options: [
          { id: "criolla", label: "Criolla" },
          { id: "ajillo", label: "Ajillo" },
          { id: "rosa", label: "Rosa" },
          { id: "blanca", label: "Blanca" },
          { id: "picante", label: "Picante de la casa" },
        ],
      },
      {
        id: "lado",
        label: "Acompañante",
        type: "single",
        required: true,
        options: [
          { id: "ensalada", label: "Ensalada verde" },
          { id: "arroz", label: "Arroz blanco" },
          { id: "tostones", label: "Tostones" },
          { id: "maduros", label: "Maduros" },
        ],
      },
      {
        id: "extras",
        label: "Extras",
        type: "multi",
        required: false,
        options: [
          { id: "extra-salsa", label: "Extra salsa de la casa", priceDelta: 1 },
          { id: "queso-frito", label: "Queso frito", priceDelta: 2 },
          { id: "aguacate", label: "Aguacate", priceDelta: 1.5 },
        ],
      },
    ],
  },
  {
    id: "pizza-boriitaly",
    name: "Combo Pizza Boriitaly",
    tagline: "Italia con sazón boricua",
    description:
      "Masa horneada, mozzarella fundida y toppings a tu gusto. Prueba la pizza boricua con pernil y plátano, o arma la clásica.",
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
          { id: "personal", label: "Personal (10\")" },
          { id: "mediana", label: "Mediana (14\")", priceDelta: 4 },
          { id: "familiar", label: "Familiar (16\")", priceDelta: 10 },
        ],
      },
      {
        id: "sabor",
        label: "Sabor",
        type: "single",
        required: true,
        options: [
          { id: "queso", label: "Queso" },
          { id: "pepperoni", label: "Pepperoni" },
          { id: "jamon", label: "Jamón" },
          { id: "vegetales", label: "Vegetales" },
          { id: "boricua", label: "Boricua — pernil y plátano", priceDelta: 3 },
          { id: "cuatro", label: "Cuatro quesos", priceDelta: 2 },
          { id: "suprema", label: "Suprema", priceDelta: 3 },
        ],
      },
      {
        id: "extras",
        label: "Extras",
        type: "multi",
        required: false,
        options: [
          { id: "extra-queso", label: "Extra queso", priceDelta: 2 },
          { id: "jalapenos", label: "Jalapeños" },
          { id: "cebolla", label: "Cebolla" },
          { id: "champi", label: "Champiñones", priceDelta: 1 },
          { id: "orilla", label: "Orilla rellena de queso", priceDelta: 3 },
        ],
      },
      {
        id: "bebida",
        label: "Bebida",
        type: "single",
        required: true,
        options: [
          { id: "sin", label: "Sin bebida" },
          { id: "refresco", label: "Refresco", priceDelta: 2 },
          { id: "jugo", label: "Jugo natural", priceDelta: 2.5 },
        ],
      },
    ],
  },
  {
    id: "pasta-italiana",
    name: "Combo Pasta Italiana",
    tagline: "Hecha al momento",
    description:
      "Pastas cremosas o en salsa de tomate, con el sazón de la casa. Elige la pasta, la salsa y la proteína.",
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
          { id: "spaghetti", label: "Spaghetti" },
          { id: "fettuccine", label: "Fettuccine" },
          { id: "penne", label: "Penne" },
          { id: "lasagna", label: "Lasagna de la casa", priceDelta: 3 },
        ],
      },
      {
        id: "salsa",
        label: "Salsa",
        type: "single",
        required: true,
        options: [
          { id: "marinara", label: "Marinara" },
          { id: "alfredo", label: "Alfredo" },
          { id: "pesto", label: "Pesto" },
          { id: "bolonesa", label: "Boloñesa" },
          { id: "carbonara", label: "Carbonara" },
        ],
      },
      {
        id: "proteina",
        label: "Proteína",
        type: "single",
        required: true,
        options: [
          { id: "ninguna", label: "Sin proteína extra" },
          { id: "pollo", label: "Pollo", priceDelta: 3 },
          { id: "camarones", label: "Camarones", priceDelta: 5 },
          { id: "res", label: "Res", priceDelta: 4 },
        ],
      },
      {
        id: "extras",
        label: "Extras",
        type: "multi",
        required: false,
        options: [
          { id: "pan-ajo", label: "Pan de ajo", priceDelta: 2 },
          { id: "parmesano", label: "Extra parmesano", priceDelta: 1 },
        ],
      },
    ],
  },
  {
    id: "burger-media",
    name: "Combo Hamburguesa Casera ½ lb",
    tagline: "Home made, a tu gusto",
    description:
      "Hamburguesa casera de media libra, jugosa y hecha en casa. Elige el queso, el término y con qué la quieres.",
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
          { id: "americano", label: "Americano" },
          { id: "suizo", label: "Suizo" },
          { id: "mozzarella", label: "Mozzarella" },
          { id: "sin", label: "Sin queso" },
        ],
      },
      {
        id: "termino",
        label: "Término",
        type: "single",
        required: true,
        options: [
          { id: "medio", label: "Término medio" },
          { id: "tres-cuartos", label: "Tres cuartos" },
          { id: "bien", label: "Bien cocida" },
        ],
      },
      {
        id: "extras",
        label: "Extras",
        type: "multi",
        required: false,
        options: [
          { id: "bacon", label: "Bacon", priceDelta: 1.5 },
          { id: "huevo", label: "Huevo", priceDelta: 1 },
          { id: "cebolla", label: "Cebolla caramelizada" },
          { id: "jalapenos", label: "Jalapeños" },
          { id: "aguacate", label: "Aguacate", priceDelta: 1.5 },
        ],
      },
      {
        id: "lado",
        label: "Acompañante",
        type: "single",
        required: true,
        options: [
          { id: "papas", label: "Papas fritas" },
          { id: "tostones", label: "Tostones" },
          { id: "yuca", label: "Yuca frita" },
          { id: "ensalada", label: "Ensalada" },
        ],
      },
    ],
  },
  {
    id: "mixto-boriitaly",
    name: "Combo Mixto Boriitaly",
    tagline: "Lo criollo y lo italiano",
    description:
      "El plato de la fusión: mofongo de un lado y pasta o pizza del otro. Para no tener que decidir.",
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
          { id: "pollo", label: "Pollo" },
          { id: "carne-frita", label: "Carne frita" },
          { id: "camarones", label: "Camarones", priceDelta: 3 },
          { id: "churrasco", label: "Churrasco", priceDelta: 5 },
        ],
      },
      {
        id: "salsa",
        label: "Salsa de la casa",
        type: "single",
        required: true,
        options: [
          { id: "criolla", label: "Criolla" },
          { id: "ajillo", label: "Ajillo" },
          { id: "rosa", label: "Rosa" },
          { id: "picante", label: "Picante de la casa" },
        ],
      },
      {
        id: "italiano",
        label: "El lado italiano",
        type: "single",
        required: true,
        options: [
          { id: "pasta-alfredo", label: "Pasta Alfredo" },
          { id: "pasta-marinara", label: "Pasta marinara" },
          { id: "pizza", label: "Pizza personal de queso" },
          { id: "lasagna", label: "Lasagna", priceDelta: 2 },
        ],
      },
      {
        id: "lado",
        label: "Acompañante",
        type: "single",
        required: true,
        options: [
          { id: "ensalada", label: "Ensalada verde" },
          { id: "tostones", label: "Tostones" },
          { id: "maduros", label: "Maduros" },
        ],
      },
    ],
  },
  {
    id: "familiar-ceiba",
    name: "Combo Familiar Ceiba",
    tagline: "Para compartir en la mesa",
    description:
      "Bandeja para 3 a 4 personas: dos proteínas, arroz, habichuelas, dos acompañantes y refresco de 2 litros.",
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
          { id: "pollo", label: "Pollo" },
          { id: "pernil", label: "Pernil" },
          { id: "carne-frita", label: "Carne frita" },
          { id: "chuleta", label: "Chuletas" },
        ],
      },
      {
        id: "proteina-2",
        label: "Segunda proteína",
        type: "single",
        required: true,
        options: [
          { id: "pollo", label: "Pollo" },
          { id: "pernil", label: "Pernil" },
          { id: "carne-frita", label: "Carne frita" },
          { id: "churrasco", label: "Churrasco", priceDelta: 8 },
        ],
      },
      {
        id: "arroz",
        label: "Arroz",
        type: "single",
        required: true,
        options: [
          { id: "blanco", label: "Arroz blanco" },
          { id: "gandules", label: "Arroz con gandules" },
          { id: "mamposteao", label: "Mamposteao" },
        ],
      },
      {
        id: "habichuelas",
        label: "Habichuelas",
        type: "single",
        required: true,
        options: [
          { id: "rojas", label: "Rojas" },
          { id: "rosadas", label: "Rosadas" },
          { id: "sin", label: "Sin habichuelas" },
        ],
      },
      {
        id: "lados",
        label: "Acompañantes (elige 2)",
        type: "multi",
        required: true,
        options: [
          { id: "tostones", label: "Tostones" },
          { id: "maduros", label: "Maduros" },
          { id: "yuca", label: "Yuca" },
          { id: "ensalada", label: "Ensalada" },
          { id: "papas", label: "Papas fritas" },
        ],
      },
      {
        id: "refresco",
        label: "Refresco 2 litros",
        type: "single",
        required: true,
        options: [
          { id: "cola", label: "Cola" },
          { id: "lima", label: "Lima-limón" },
          { id: "sin", label: "Sin refresco", priceDelta: -2 },
        ],
      },
    ],
  },
];

export const HOURS = [
  { day: "Lunes", time: "Cerrado" },
  { day: "Martes", time: "Cerrado" },
  { day: "Miércoles", time: "11:00 a. m. – 9:00 p. m." },
  { day: "Jueves", time: "2:00 p. m. – 8:00 p. m." },
  { day: "Viernes", time: "12:00 p. m. – 8:00 p. m." },
  { day: "Sábado", time: "12:00 p. m. – 8:00 p. m." },
  { day: "Domingo", time: "12:00 p. m. – 8:00 p. m." },
];

export function getCombo(id: string) {
  return COMBOS.find((c) => c.id === id);
}

export function choiceLabel(combo: Combo, groupId: string, choiceId: string) {
  return combo.groups.find((g) => g.id === groupId)?.options.find((o) => o.id === choiceId)?.label;
}

export function unitPrice(combo: Combo, selections: Record<string, string[]>) {
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

export function defaultSelections(combo: Combo): Record<string, string[]> {
  const next: Record<string, string[]> = {};
  for (const group of combo.groups) {
    if (group.type === "single" && group.required && group.options[0]) {
      next[group.id] = [group.options[0].id];
    } else {
      next[group.id] = [];
    }
  }
  return next;
}

export function missingGroups(combo: Combo, selections: Record<string, string[]>) {
  return combo.groups.filter((g) => {
    if (!g.required) return false;
    const picked = selections[g.id] ?? [];
    if (g.id === "lados") return picked.length < 2;
    return picked.length === 0;
  });
}

export function summarize(combo: Combo, selections: Record<string, string[]>) {
  return combo.groups
    .map((g) => {
      const picked = selections[g.id] ?? [];
      if (!picked.length) return null;
      const labels = picked
        .map((id) => g.options.find((o) => o.id === id)?.label)
        .filter(Boolean)
        .join(", ");
      return `${g.label}: ${labels}`;
    })
    .filter(Boolean) as string[];
}
