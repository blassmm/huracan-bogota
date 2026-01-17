import { Metadata } from "next";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import StaffCard from "@/app/components/Card/StaffCard";
import { staff, methodology } from "@/data/staff";

export const metadata: Metadata = {
  title: "Metodología",
  description: "Conoce nuestra metodología de entrenamiento basada en cuatro pilares: técnica, táctica, física y mental.",
  openGraph: {
    title: "Metodología | Huracán de Bogotá",
    description: "Metodología profesional de formación futbolística.",
  },
};

export default function Metodologia() {
  const methodologyAreas = Object.values(methodology);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Metodología</h1>
            <p className="text-xl text-muted">
              Formación integral basada en los estándares del fútbol argentino y adaptada al contexto colombiano.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Pillars */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <SectionTitle 
            title="Cuatro Pilares Fundamentales" 
            subtitle="Cada aspecto del desarrollo del jugador es trabajado de manera integral y progresiva."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {methodologyAreas.map((area, i) => (
              <div key={i} className="card group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-huracan-red/20 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-huracan-red transition-colors shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                    <p className="text-muted">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="section-padding bg-huracan-gray">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Filosofía de Entrenamiento</h2>
              <div className="space-y-4 text-muted">
                <p>
                  Nuestro modelo de formación se basa en la escuela argentina de fútbol, caracterizada por la técnica depurada, la inteligencia táctica y la intensidad competitiva.
                </p>
                <p>
                  Cada sesión de entrenamiento está diseñada para maximizar el desarrollo del jugador según su etapa evolutiva, respetando los tiempos de maduración y potenciando sus fortalezas.
                </p>
                <p>
                  El juego es el principal maestro. A través de situaciones reales y rondos, los jugadores desarrollan la toma de decisiones y la comprensión táctica de manera natural.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Sesiones semanales", value: "200+" },
                  { label: "Jugadores activos", value: "150+" },
                  { label: "Años de experiencia", value: "6" },
                  { label: "Torneos anuales", value: "12+" }
                ].map((stat, i) => (
                  <div key={i} className="bg-huracan-black/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-huracan-red">{stat.value}</div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "Periodización", desc: "Planificación anual estructurada por fases y objetivos." },
                { title: "Individualización", desc: "Seguimiento personalizado del progreso de cada jugador." },
                { title: "Competencia", desc: "Participación regular en torneos para aplicar lo aprendido." },
                { title: "Evaluación", desc: "Reportes periódicos y reuniones con padres." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-huracan-black/50 rounded-xl p-4">
                  <div className="w-8 h-8 bg-huracan-red rounded-lg flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <SectionTitle 
            title="Nuestro Cuerpo Técnico" 
            subtitle="Profesionales comprometidos con la formación integral de cada jugador."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {staff.map((member) => (
              <StaffCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

