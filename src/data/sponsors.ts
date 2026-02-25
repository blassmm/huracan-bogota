export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url?: string;
  tier: "gold" | "silver" | "bronze";
}

export const sponsors: Sponsor[] = [
  // {
  //   id: "1",
  //   name: "Deportes El Campeón",
  //   logo: "/Logos/logo-hur-bogota.png",
  //   url: "https://example.com",
  //   tier: "gold",
  // },
  {
    id: "3",
    name: "Aberturas",
    logo: "/Logos/logo-aberturas.jpeg",
    tier: "silver",
  },
  {
    id: "4",
    name: "Balloon",
    logo: "/Logos/logo-balloon.jpeg",
    tier: "silver",
  },
  {
    id: "5",
    name: "Frider",
    logo: "/Logos/logo-frider.jpeg",
    tier: "bronze",
  },
  {
    id: "6",
    name: "Montanari",
    logo: "/Logos/logo-montanari.png",
    tier: "bronze",
  },
  {
    id: "7",
    name: "Promet",
    logo: "/Logos/logo-promet.jpeg",
    tier: "bronze",
  },
  {
    id: "9",
    name: "Tu Marca",
    logo: "/Logos/test2.svg",
    tier: "gold",
  },
];

export const memberBenefits = [
  {
    icon: "🎽",
    title: "Descuentos en Productos",
    description: "Hasta 15% de descuento en toda la tienda oficial del club.",
  },
  {
    icon: "🎫",
    title: "Entrada Preferencial",
    description: "Acceso prioritario a eventos y partidos especiales.",
  },
  {
    icon: "✈️",
    title: "Viajes al Club Huracán",
    description: "Oportunidad de visitar las instalaciones en Buenos Aires.",
  },
  {
    icon: "📚",
    title: "Talleres Exclusivos",
    description: "Acceso a charlas y capacitaciones con profesionales.",
  },
  {
    icon: "🏆",
    title: "Torneos Internos",
    description: "Participación en competencias exclusivas para socios.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Eventos Familiares",
    description: "Integración en actividades especiales del club.",
  },
];
