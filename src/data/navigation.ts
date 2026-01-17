export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Programas", href: "/programas" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Competencias", href: "/competencias" },
  { label: "Galería", href: "/galeria" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Productos", href: "/productos" },
  { label: "Contacto", href: "/contacto" }
];

export const footerLinks = {
  club: [
    { label: "Quiénes Somos", href: "/quienes-somos" },
    { label: "Metodología", href: "/metodologia" },
    { label: "Competencias", href: "/competencias" },
    { label: "Galería", href: "/galeria" }
  ],
  programas: [
    { label: "Iniciación (5-8 años)", href: "/programas#iniciacion" },
    { label: "Formación (9-12 años)", href: "/programas#formacion" },
    { label: "Competencia (13-17 años)", href: "/programas#competencia" },
    { label: "Adultos (+18)", href: "/programas#adultos" }
  ],
  recursos: [
    { label: "Inscripciones", href: "/contacto" },
    { label: "Productos", href: "/productos" },
    { label: "Testimonios", href: "/testimonios" },
    { label: "Contacto", href: "/contacto" }
  ]
};

