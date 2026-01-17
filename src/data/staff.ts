export interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  certifications?: string[];
}

export const staff: StaffMember[] = [
  {
    id: "1",
    name: "Carlos Rodríguez",
    role: "Director Técnico",
    image: "/staff/director.jpg",
    bio: "Ex jugador profesional con más de 15 años de experiencia en formación de talentos.",
    certifications: ["Licencia UEFA B", "Especialista en Fútbol Base"]
  },
  {
    id: "2",
    name: "Andrés Martínez",
    role: "Preparador Físico",
    image: "/staff/preparador.jpg",
    bio: "Licenciado en Ciencias del Deporte. Especializado en desarrollo motor infantil y juvenil.",
    certifications: ["Lic. Ciencias del Deporte", "Esp. Preparación Física Juvenil"]
  },
  {
    id: "3",
    name: "María González",
    role: "Coordinadora de Categorías",
    image: "/staff/coordinadora.jpg",
    bio: "Gestión deportiva y coordinación de procesos formativos hace más de 8 años.",
    certifications: ["Administración Deportiva", "Coaching Deportivo"]
  },
  {
    id: "4",
    name: "Juan Pablo Herrera",
    role: "Entrenador de Arqueros",
    image: "/staff/arqueros.jpg",
    bio: "Ex arquero profesional. Metodología especializada en el puesto.",
    certifications: ["Esp. Entrenamiento de Porteros"]
  },
  {
    id: "5",
    name: "Laura Sánchez",
    role: "Psicóloga Deportiva",
    image: "/staff/psicologa.jpg",
    bio: "Apoyo emocional y mental para jugadores y familias.",
    certifications: ["Psicología", "Esp. Psicología Deportiva"]
  }
];

export const methodology = {
  technical: {
    title: "Técnica Individual",
    description: "Dominio del balón, pases, controles, conducción y definición. Base fundamental del jugador.",
    icon: "⚽"
  },
  tactical: {
    title: "Táctica Colectiva",
    description: "Comprensión del juego, posicionamiento, transiciones y sistemas de juego adaptados a cada edad.",
    icon: "📋"
  },
  physical: {
    title: "Preparación Física",
    description: "Desarrollo de capacidades físicas acordes a cada etapa evolutiva. Velocidad, resistencia, fuerza y coordinación.",
    icon: "💪"
  },
  mental: {
    title: "Fortaleza Mental",
    description: "Concentración, manejo de presión, trabajo en equipo y desarrollo del carácter competitivo.",
    icon: "🧠"
  }
};

