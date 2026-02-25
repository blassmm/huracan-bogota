export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url?: string;
  tier: "gold" | "silver" | "bronze";
  scale?: number;
}

export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Aberturas",
    logo: "/Logos/logo-aberturas.jpeg",
    tier: "silver",
    url: "https://www.instagram.com/aberturas.entrerios/",
  },
  {
    id: "2",
    name: "Balloon",
    logo: "/Logos/logo-balloon.jpeg",
    tier: "silver",
  },
  {
    id: "3",
    name: "Frider",
    logo: "/Logos/logo-frider.jpeg",
    tier: "bronze",
    url: "https://www.friderweb.com.ar/",
  },
  {
    id: "4",
    name: "Montanari",
    logo: "/Logos/logo-montanari2.png",
    tier: "bronze",
    url: "https://www.montanari-tech.com/",
    scale: 2.5,
  },
  {
    id: "5",
    name: "Promet",
    logo: "/Logos/logo-promet.jpeg",
    tier: "bronze",
  },
  {
    id: "6",
    name: "Tu Marca",
    logo: "/Logos/test2.svg",
    tier: "gold",
    url: "https://www.tumarca.co/",
    scale: 1.2,
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
