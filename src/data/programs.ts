export interface SubCategory {
  name: string;
  ageRange: string;
  description: string;
  schedule: string;
}

export interface Program {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  includes: string[];
  requirements: string[];
  schedule?: string;
  subCategories?: SubCategory[];
}

export const youthProgram: Program = {
  id: "juvenil",
  name: "Iniciación / Formación / Competencia",
  ageRange: "5 - 17 años",
  description: "Formación integral desde los primeros pasos hasta la competencia oficial, con metodología profesional y seguimiento personalizado.",
  includes: [
    "2 entrenamientos semanales",
    "Uniforme de entrenamiento",
    "Petos de Entrenamiento",
    "Partidos oficiales y amistosos",
    "Seguimiento individual",
    "Reuniones con familiares",
    "Charlas formativas"
  ],
  requirements: [
    "Ficha médica completa",
    "Documento de identidad",
    "Autorización de la familia",
    "Hidratación en cada entrenamiento",
    "Ganas de aprender y divertirse"
  ],
  subCategories: [
    {
      name: "Iniciación",
      ageRange: "2018-2017",
      description: "Primeros pasos en el fútbol. Desarrollo de habilidades motrices básicas a través del juego y la diversión.",
      schedule: "Miércoles y viernes 4:00pm-6:00pm - Sabado 8:00am-10:00am - Domingo 9:00am-11:00am"
    },
    {
      name: "Sub-12",
      ageRange: "2015-2014",
      description: "Etapa de desarrollo técnico-táctico. Aprendizaje de fundamentos individuales y colectivos del juego.",
      schedule: "Miércoles y viernes 4:00pm-6:00pm - Sabado 8:00am-10:00am - Domingo 9:00am-11:00am"
    },
    {
      name: "Sub-15",
      ageRange: "2013-2011",
      description: "Alto rendimiento juvenil. Preparación integral para la competencia oficial con metodología profesional.",
      schedule: "Martes, miércoles viernes 4:00pm-6:00pm - Sabado 8:00am-10:00am - Domingo 9:00am-11:00am"
    },
    {
      name: "Sub-18",
      ageRange: "2010-2008",
      description: "Alto rendimiento juvenil. Preparación integral para la competencia oficial con metodología profesional.",
      schedule: "Martes, miércoles viernes 4:00pm-6:00pm - Sabado 8:00am-10:00am - Domingo 9:00am-11:00am"  
    }
  ]
};

export const adultProgram: Program = {
  id: "adultos",
  name: "Adultos",
  ageRange: "+18 años",
  description: "PROXIMAMENTE",
  includes: [
    // "2 entrenamientos semanales",
    // "Participación en torneos amateur",
    // "Acceso a instalaciones",
    // "Seguro deportivo"
  ],
  requirements: [
    // "Ficha médica",
    // "Documento de identidad",
    // "Apto médico para actividad física"
  ],
  // schedule: "Sábados 7:00 AM - 9:00 AM"
};

// Unified view for /programas
export const programs: Program[] = [youthProgram, adultProgram];

// Expanded view for homepage cards
export const allCategories: Program[] = [
  ...youthProgram.subCategories!.map(sub => ({
    id: sub.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    name: sub.name,
    ageRange: sub.ageRange,
    description: sub.description,
    includes: youthProgram.includes,
    requirements: youthProgram.requirements,
    schedule: sub.schedule
  })),
  adultProgram
];
