import { Metadata } from "next";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { clubInfo, history, mission, vision, values } from "@/data/club";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description: "Conoce la historia, misión y valores del Club Huracán de Bogotá. Somos una Franquicia oficial del Club Atlético Huracán de Argentina.",
  openGraph: {
    title: "Quiénes Somos | Huracán de Bogotá",
    description: "Conoce la historia, misión y valores del Club Huracán de Bogotá.",
  },
};

export default function QuienesSomos() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Quiénes Somos</h1>
            <p className="text-xl text-muted">
              Más que un club de fútbol, somos una familia que forma jugadores y personas.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Historia</h2>
              <div className="text-muted space-y-4 whitespace-pre-line">
                {history}
              </div>
            </div>
            <div className="bg-huracan-gray rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-huracan-red rounded-full flex items-center justify-center text-4xl font-bold">
                  H
                </div>
                <p className="text-muted">Fundado en {clubInfo.foundedYear}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-huracan-gray">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="w-14 h-14 bg-huracan-red/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4">Misión</h3>
              <p className="text-muted">{mission}</p>
            </div>
            <div className="card">
              <div className="w-14 h-14 bg-huracan-red/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                🔭
              </div>
              <h3 className="text-2xl font-bold mb-4">Visión</h3>
              <p className="text-muted">{vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <SectionTitle 
            title="Nuestros Valores" 
            subtitle="Los pilares que guían nuestra filosofía de formación integral."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={i} className="card">
                <div className="w-12 h-12 bg-huracan-red rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visits */}
      <section id="visitas" className="section-padding bg-gradient-red">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visitas Oficiales a Buenos Aires
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Organizamos viajes anuales para que nuestros jugadores conozcan las instalaciones del Club Atlético Huracán en Parque Patricios, entrenen con sus categorías y vivan la experiencia de un grande de Argentina.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl mb-2">🏟️</div>
                <h4 className="font-bold">Tomás A. Ducó</h4>
                <p className="text-sm text-white/70">Visita al estadio</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl mb-2">⚽</div>
                <h4 className="font-bold">Entrenamientos</h4>
                <p className="text-sm text-white/70">Con categorías locales</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-bold">Intercambio</h4>
                <p className="text-sm text-white/70">Cultural y deportivo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

