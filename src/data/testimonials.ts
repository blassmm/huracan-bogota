export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Roberto Méndez",
    role: "Padre de Santiago (9 años)",
    text: "Mi hijo lleva 2 años en el club y el cambio ha sido increíble. No solo mejoró en fútbol, sino en disciplina y responsabilidad. Los entrenadores son muy profesionales.",
    image: "/testimonials/padre1.jpg"
  },
  {
    id: "2",
    name: "Carolina Ruiz",
    role: "Madre de Mateo (12 años)",
    text: "Lo que más valoro es el enfoque integral. No se trata solo de ganar partidos, sino de formar personas. Mateo ha crecido mucho como deportista y como persona.",
    image: "/testimonials/madre1.jpg"
  },
  {
    id: "3",
    name: "Sebastián Torres",
    role: "Jugador categoría Sub-15",
    text: "Entrenar aquí me ha enseñado que con esfuerzo todo se logra. El cuerpo técnico nos exige pero también nos apoya. Sueño con llegar a ser profesional.",
    image: "/testimonials/jugador1.jpg"
  },
  {
    id: "4",
    name: "Patricia Gómez",
    role: "Madre de Lucas (7 años)",
    text: "Lucas esperaba ansioso los días de entrenamiento. El ambiente es muy sano y los niños se divierten mientras aprenden. Muy recomendado para los más pequeños.",
    image: "/testimonials/madre2.jpg"
  },
  {
    id: "5",
    name: "Alejandro Vargas",
    role: "Jugador categoría Sub-17",
    text: "La metodología es de primer nivel. Trabajamos todos los aspectos: técnica, táctica, físico y mental. Me siento preparado para competir a cualquier nivel.",
    image: "/testimonials/jugador2.jpg"
  },
  {
    id: "6",
    name: "Fernando Castro",
    role: "Padre de Daniela (10 años)",
    text: "Aunque aún no hay categoría femenina oficial, Daniela entrena con los varones y la tratan con total respeto e igualdad. Esperamos con ansias el fútbol femenino.",
    image: "/testimonials/padre2.jpg"
  }
];

export const achievements = [
  {
    year: "2023",
    title: "Campeones Copa Ciudad",
    category: "Sub-13",
    description: "Primer título oficial del club en competencias distritales."
  },
  {
    year: "2023",
    title: "Subcampeones Liga Bogotá",
    category: "Sub-15",
    description: "Excelente participación llegando a la final del torneo."
  },
  {
    year: "2022",
    title: "Mejor Proceso Formativo",
    category: "Reconocimiento",
    description: "Premio otorgado por la Liga de Fútbol de Bogotá."
  },
  {
    year: "2024",
    title: "Jugador Convocado Selección",
    category: "Sub-15",
    description: "Santiago Ramírez convocado a la Selección Bogotá."
  }
];

