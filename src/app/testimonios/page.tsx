import { Metadata } from "next";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import TestimonialCard from "@/app/components/Card/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Opiniones de padres y jugadores sobre su experiencia en el Club Huracán de Bogotá.",
  openGraph: {
    title: "Testimonios | Huracán de Bogotá",
    description: "Lo que dicen nuestras familias sobre el club.",
  },
};

const stats = [
  { value: "98%", label: "Satisfacción de padres" },
  { value: "95%", label: "Tasa de retención anual" },
  { value: "4.9/5", label: "Calificación promedio" },
  { value: "150+", label: "Familias activas" }
];

export default function Testimonios() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Testimonios</h1>
            <p className="text-xl text-muted">
              Las voces de nuestra comunidad: padres, jugadores y familias que confían en nosotros.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-huracan-gray border-b border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-huracan-red">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section-padding bg-huracan-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 bg-huracan-red/20 rounded-full flex items-center justify-center text-5xl shrink-0">
                  🌟
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Historia Destacada</h3>
                  <blockquote className="text-muted text-lg italic mb-4">
                    &ldquo;Mi hijo llegó al club tímido y sin confianza. Tres años después, es capitán de su categoría, tiene amigos increíbles y ha desarrollado una disciplina que aplica en todos los aspectos de su vida. El club no solo forma futbolistas, forma personas. Estamos eternamente agradecidos.&rdquo;
                  </blockquote>
                  <div>
                    <span className="font-bold">Familia Rodríguez</span>
                    <span className="text-muted"> — Miembros desde 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <SectionTitle 
            title="Historias de Éxito" 
            subtitle="Jugadores que han dado el salto a nuevos niveles."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Santiago Ramírez",
                story: "Ingresó a los 8 años en categoría iniciación. Hoy con 15 años fue convocado a la Selección Bogotá.",
                achievement: "Selección Bogotá Sub-15"
              },
              {
                name: "Valentina Gómez",
                story: "Entrena con los varones esperando la categoría femenina. Su técnica y dedicación la destacan.",
                achievement: "Mejor promedio escolar"
              },
              {
                name: "Los hermanos Torres",
                story: "Tres hermanos que entrenan en diferentes categorías. El fútbol los une como familia.",
                achievement: "Familia Huracán"
              }
            ].map((story, i) => (
              <div key={i} className="card">
                <div className="w-16 h-16 bg-huracan-yellow/20 rounded-full flex items-center justify-center text-3xl mb-4">
                  ⭐
                </div>
                <h3 className="font-bold text-xl mb-2">{story.name}</h3>
                <p className="text-muted mb-4">{story.story}</p>
                <span className="inline-block bg-huracan-red/20 text-huracan-red text-sm px-3 py-1 rounded-full">
                  {story.achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-red">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">¿Querés ser parte de estas historias?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Unite a la familia Huracán y escribí tu propia historia de éxito.
          </p>
          <a href="/contacto" className="btn-secondary bg-white text-huracan-red border-white">
            Contactanos
          </a>
        </div>
      </section>
    </>
  );
}

