export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url?: string;
  tier: "gold" | "silver" | "bronze";
}

export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Deportes El Campeón",
    logo: "/Logos/logo-hur-bogota-removebg-preview.png",
    url: "https://example.com",
    tier: "gold"
  },
  {
    id: "2",
    name: "Academia Fit",
    logo: "/Logos/logo-hur-bogota-removebg-preview.png",
    url: "https://example.com",
    tier: "gold"
  },
  {
    id: "3",
    name: "Restaurante El Gol",
    logo: "/Logos/logo-hur-bogota-removebg-preview.png",
    tier: "silver"
  },
  {
    id: "4",
    name: "Clínica Deportiva Bogotá",
    logo: "/Logos/logo-hur-bogota-removebg-preview.png",
    url: "https://example.com",
    tier: "silver"
  },
  {
    id: "5",
    name: "Transporte Rápido",
    logo: "/Logos/logo-hur-bogota-removebg-preview.png",
    tier: "bronze"
  },
  {
    id: "6",
    name: "Papelería Escolar",
    logo: "/Logos/logo-hur-bogota-removebg-preview.png",
    tier: "bronze"
  }
];

export const memberBenefits = [
  {
    icon: "🎽",
    title: "Descuentos en Productos",
    description: "Hasta 15% de descuento en toda la tienda oficial del club."
  },
  {
    icon: "🎫",
    title: "Entrada Preferencial",
    description: "Acceso prioritario a eventos y partidos especiales."
  },
  {
    icon: "✈️",
    title: "Viajes al Club Huracán",
    description: "Oportunidad de visitar las instalaciones en Buenos Aires."
  },
  {
    icon: "📚",
    title: "Talleres Exclusivos",
    description: "Acceso a charlas y capacitaciones con profesionales."
  },
  {
    icon: "🏆",
    title: "Torneos Internos",
    description: "Participación en competencias exclusivas para socios."
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Eventos Familiares",
    description: "Integración en actividades especiales del club."
  }
];