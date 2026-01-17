export interface Program {
  id: string;
  name: string;
  ageRange: string;
  minAge: number;
  maxAge: number;
  description: string;
  includes: string[];
  requirements: string[];
  schedule?: string;
}

export const programs: Program[] = [
  {
    id: "iniciacion",
    name: "Iniciación",
    ageRange: "5 - 8 años",
    minAge: 5,
    maxAge: 8,
    description: "Primeros pasos en el fútbol. Desarrollo de habilidades motrices básicas a través del juego y la diversión.",
    includes: [
      "2 entrenamientos semanales",
      "Uniforme de entrenamiento",
      "Participación en festivales",
      "Seguimiento individual",
      "Reuniones con padres"
    ],
    requirements: [
      "Ficha médica completa",
      "Documento de identidad",
      "Autorización de padres",
      "Ganas de aprender y divertirse"
    ],
    schedule: "Martes y Jueves 4:00 PM - 5:30 PM"
  },
  {
    id: "formacion",
    name: "Formación",
    ageRange: "9 - 12 años",
    minAge: 9,
    maxAge: 12,
    description: "Etapa de desarrollo técnico-táctico. Aprendizaje de fundamentos individuales y colectivos del juego.",
    includes: [
      "3 entrenamientos semanales",
      "Uniforme de entrenamiento",
      "Participación en torneos",
      "Evaluaciones periódicas",
      "Video análisis básico",
      "Charlas formativas"
    ],
    requirements: [
      "Ficha médica completa",
      "Documento de identidad",
      "Compromiso de asistencia",
      "Actitud de aprendizaje"
    ],
    schedule: "Lunes, Miércoles y Viernes 4:00 PM - 6:00 PM"
  },
  {
    id: "competencia",
    name: "Competencia",
    ageRange: "13 - 17 años",
    minAge: 13,
    maxAge: 17,
    description: "Alto rendimiento juvenil. Preparación integral para la competencia oficial con metodología profesional.",
    includes: [
      "4 entrenamientos semanales",
      "Uniforme completo",
      "Participación en ligas oficiales",
      "Preparación física específica",
      "Video análisis avanzado",
      "Nutrición deportiva básica",
      "Apoyo psicológico"
    ],
    requirements: [
      "Ficha médica completa",
      "Exámenes médicos anuales",
      "Compromiso total",
      "Rendimiento académico aceptable",
      "Disciplina y respeto"
    ],
    schedule: "Lunes a Jueves 5:00 PM - 7:30 PM"
  },
  {
    id: "adultos",
    name: "Adultos",
    ageRange: "+18 años",
    minAge: 18,
    maxAge: 99,
    description: "Fútbol recreativo y competitivo para adultos. Mantente activo y disfruta del deporte rey.",
    includes: [
      "2 entrenamientos semanales",
      "Participación en torneos amateur",
      "Acceso a instalaciones",
      "Seguro deportivo"
    ],
    requirements: [
      "Ficha médica",
      "Documento de identidad",
      "Apto médico para actividad física"
    ],
    schedule: "Sábados 7:00 AM - 9:00 AM"
  }
];

