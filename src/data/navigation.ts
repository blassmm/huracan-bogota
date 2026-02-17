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
    { label: "Iniciación 2017-2015", href: "/programas#iniciacion" },
    { label: "Formación 2014-2012", href: "/programas#formacion" },
    { label: "Competencia 2011-2009", href: "/programas#competencia" },
    { label: "Adultos +2008", href: "/programas#adultos" }
  ],
  recursos: [
    { label: "Inscripciones", href: "/contacto" },
    { label: "Productos", href: "/productos" },
    { label: "Testimonios", href: "/testimonios" },
    { label: "Contacto", href: "/contacto" }
  ]
};

