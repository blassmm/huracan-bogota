import { Metadata } from "next";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { achievements } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Competencias",
  description: "Torneos, logros y jugadores destacados del Club Huracán de Bogotá.",
  openGraph: {
    title: "Competencias | Huracán de Bogotá",
    description: "Logros y trayectoria competitiva del club.",
  },
};

const tournaments = [
  {
    name: "Liga de Bogotá",
    description: "Competencia oficial distrital con las mejores escuelas de la ciudad.",
    categories: ["Sub-9", "Sub-11", "Sub-13", "Sub-15", "Sub-17"],
    frequency: "Anual"
  },
  {
    name: "Copa Ciudad",
    description: "Torneo de copa con formato eliminatorio directo.",
    categories: ["Sub-11", "Sub-13", "Sub-15"],
    frequency: "Semestral"
  },
  {
    name: "Torneos Invitacionales",
    description: "Participación en eventos especiales y torneos relámpago.",
    categories: ["Todas"],
    frequency: "Variable"
  },
  {
    name: "Copa Huracán",
    description: "Torneo interno del club con premiación especial.",
    categories: ["Todas"],
    frequency: "Anual"
  }
];

const featuredPlayers = [
  { name: "Santiago Ramírez", category: "Sub-15", achievement: "Convocado Selección Bogotá 2024" },
  { name: "Mateo García", category: "Sub-13", achievement: "Goleador Copa Ciudad 2023" },
  { name: "Juan Pablo Mora", category: "Sub-17", achievement: "Mejor Jugador Liga 2023" },
  { name: "Andrés López", category: "Sub-11", achievement: "Promesa del torneo 2024" }
];

export default function Competencias() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Competencias</h1>
            <p className="text-xl text-muted">
              La competencia como herramienta de aprendizaje. Participamos para crecer, ganar y aprender.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <SectionTitle 
            title="Logros y Títulos" 
            subtitle="Reconocimientos que reflejan el trabajo de nuestros jugadores y cuerpo técnico."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, i) => (
              <div key={i} className="card text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-huracan-yellow/20 rounded-full flex items-center justify-center text-3xl group-hover:bg-huracan-yellow group-hover:text-huracan-black transition-colors">
                  🏆
                </div>
                <span className="text-huracan-red text-sm font-medium">{achievement.year}</span>
                <h3 className="font-bold text-lg mt-1 mb-2">{achievement.title}</h3>
                <span className="inline-block bg-white/10 text-xs px-2 py-1 rounded mb-2">
                  {achievement.category}
                </span>
                <p className="text-muted text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="section-padding bg-huracan-gray">
        <div className="container-custom">
          <SectionTitle 
            title="Torneos en los que Participamos" 
            subtitle="Competencias oficiales y eventos especiales durante todo el año."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {tournaments.map((tournament, i) => (
              <div key={i} className="card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-xl">{tournament.name}</h3>
                  <span className="bg-huracan-red/20 text-huracan-red text-xs px-2 py-1 rounded">
                    {tournament.frequency}
                  </span>
                </div>
                <p className="text-muted mb-4">{tournament.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tournament.categories.map((cat, j) => (
                    <span key={j} className="bg-white/10 text-xs px-2 py-1 rounded">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Players */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <SectionTitle 
            title="Jugadores Destacados" 
            subtitle="Talentos que han sobresalido por su desempeño y compromiso."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlayers.map((player, i) => (
              <div key={i} className="card text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-huracan-gray-light rounded-full flex items-center justify-center text-3xl group-hover:ring-4 ring-huracan-red transition-all">
                  ⚽
                </div>
                <h3 className="font-bold text-lg">{player.name}</h3>
                <span className="text-huracan-red text-sm">{player.category}</span>
                <p className="text-muted text-sm mt-2">{player.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-huracan-gray">
        <div className="container-custom">
          <SectionTitle 
            title="Nuestra Trayectoria" 
            subtitle="Hitos importantes en la historia competitiva del club."
          />

          <div className="max-w-3xl mx-auto">
            {[
              { year: "2018", event: "Fundación del club y primeras categorías" },
              { year: "2019", event: "Primera participación en Liga de Bogotá" },
              { year: "2020", event: "Adaptación a entrenamientos virtuales" },
              { year: "2021", event: "Regreso a competencia presencial" },
              { year: "2022", event: "Reconocimiento como mejor proceso formativo" },
              { year: "2023", event: "Primer título oficial - Copa Ciudad Sub-13" },
              { year: "2024", event: "Primer jugador convocado a selección" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 mb-6">
                <div className="w-20 shrink-0 text-right">
                  <span className="font-bold text-huracan-red">{item.year}</span>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-huracan-red rounded-full" />
                  <div className="absolute left-1.5 top-5 w-px h-full bg-huracan-red/30" />
                </div>
                <div className="pl-6 pb-6">
                  <p className="text-muted">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

