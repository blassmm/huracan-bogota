export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  sizes: string[];
  category: "ropa" | "accesorios";
  memberDiscount?: number;
}

export const products: Product[] = [
  {
    id: "camiseta-oficial",
    name: "Camiseta Oficial Huracán",
    description: "Camiseta oficial del club con escudo bordado. Tela deportiva de alta calidad, transpirable y cómoda.",
    price: 120000,
    image: "/products/camiseta.jpg",
    sizes: ["4", "6", "8", "10", "12", "14", "S", "M", "L", "XL"],
    category: "ropa",
    memberDiscount: 15
  },
  {
    id: "camiseta-alternativa",
    name: "Camiseta Alternativa",
    description: "Camiseta alternativa blanca con detalles en rojo. Ideal para entrenamientos y uso casual.",
    price: 110000,
    image: "/products/camiseta-alt.jpg",
    sizes: ["4", "6", "8", "10", "12", "14", "S", "M", "L", "XL"],
    category: "ropa",
    memberDiscount: 15
  },
  {
    id: "short-oficial",
    name: "Short Oficial",
    description: "Short deportivo negro con franjas rojas laterales. Material liviano y resistente.",
    price: 75000,
    image: "/products/short.jpg",
    sizes: ["4", "6", "8", "10", "12", "14", "S", "M", "L", "XL"],
    category: "ropa",
    memberDiscount: 10
  },
  {
    id: "medias-oficiales",
    name: "Medias Oficiales",
    description: "Medias deportivas rojas con refuerzo en talón y puntera. Pack de 2 pares.",
    price: 35000,
    image: "/products/medias.jpg",
    sizes: ["Niño", "Adulto"],
    category: "ropa",
    memberDiscount: 10
  },
  {
    id: "buzo-entrenamiento",
    name: "Buzo de Entrenamiento",
    description: "Buzo térmico para entrenamientos. Capucha, bolsillos y cierre completo.",
    price: 180000,
    image: "/products/buzo.jpg",
    sizes: ["8", "10", "12", "14", "S", "M", "L", "XL"],
    category: "ropa",
    memberDiscount: 15
  },
  {
    id: "morral-deportivo",
    name: "Morral Deportivo",
    description: "Morral amplio con compartimento para guayos. Logo del club bordado.",
    price: 95000,
    image: "/products/morral.jpg",
    sizes: ["Único"],
    category: "accesorios",
    memberDiscount: 10
  },
  {
    id: "gorra-oficial",
    name: "Gorra Oficial",
    description: "Gorra con visera curva y escudo bordado. Ajustable.",
    price: 45000,
    image: "/products/gorra.jpg",
    sizes: ["Niño", "Adulto"],
    category: "accesorios",
    memberDiscount: 10
  },
  {
    id: "termo-deportivo",
    name: "Termo Deportivo",
    description: "Termo de 750ml con logo del club. Mantiene temperatura por 12 horas.",
    price: 55000,
    image: "/products/termo.jpg",
    sizes: ["Único"],
    category: "accesorios",
    memberDiscount: 10
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price);
};

export const getWhatsAppLink = (product: Product, size?: string): string => {
  const phone = "573001234567";
  const message = encodeURIComponent(
    `¡Hola! Me interesa comprar:\n\n` +
    `📦 ${product.name}\n` +
    `${size ? `📏 Talla: ${size}\n` : ''}` +
    `💰 Precio: ${formatPrice(product.price)}\n\n` +
    `¿Tienen disponibilidad?`
  );
  return `https://wa.me/${phone}?text=${message}`;
};

