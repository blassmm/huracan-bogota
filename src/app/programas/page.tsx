import { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programas",
  description: "Programas de formación futbolística para todas las edades. Desde iniciación hasta competencia juvenil.",
  openGraph: {
    title: "Programas | Huracán de Bogotá",
    description: "Programas de formación futbolística para todas las edades.",
  },
};

export default function Programas() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Programas de Formación</h1>
            <p className="text-xl text-muted">
              Categorías adaptadas a cada etapa del desarrollo, con metodología profesional y seguimiento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom space-y-16">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              id={program.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="text-huracan-red font-bold text-lg">{program.ageRange}</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{program.name}</h2>
                <p className="text-muted text-lg mb-6">{program.description}</p>

                {program.schedule && (
                  <div className="flex items-center gap-3 mb-6 p-4 bg-huracan-gray rounded-lg">
                    <svg className="w-6 h-6 text-huracan-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{program.schedule}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-huracan-red rounded-full" />
                      ¿Qué incluye?
                    </h4>
                    <ul className="space-y-2 text-muted text-sm">
                      {program.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-huracan-red rounded-full" />
                      Requisitos
                    </h4>
                    <ul className="space-y-2 text-muted text-sm">
                      {program.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-huracan-yellow mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-huracan-gray rounded-2xl aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">⚽</div>
                    <span className="text-2xl font-bold">{program.ageRange}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-huracan-gray">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Contactanos para conocer disponibilidad, precios y agendar una clase de prueba gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary">
              Solicitar información
            </Link>
            <a href="/docs/ficha-inscripcion.pdf" download className="btn-secondary">
              Descargar ficha de inscripción
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

