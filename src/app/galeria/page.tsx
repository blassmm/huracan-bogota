import { Metadata } from "next";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { clubInfo } from "@/data/club";

export const metadata: Metadata = {
  title: "Galería",
  description: "Fotos y videos de entrenamientos, partidos y eventos del Club Huracán de Bogotá.",
  openGraph: {
    title: "Galería | Huracán de Bogotá",
    description: "Momentos memorables del club en imágenes.",
  },
};

const galleryCategories = [
  { name: "Entrenamientos", count: 24 },
  { name: "Partidos", count: 36 },
  { name: "Torneos", count: 18 },
  { name: "Viajes", count: 12 },
  { name: "Eventos", count: 8 }
];

export default function Galeria() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Galería</h1>
            <p className="text-xl text-muted">
              Momentos que capturan la esencia del club: esfuerzo, compañerismo y pasión por el fútbol.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-huracan-gray border-b border-white/10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-huracan-red rounded-full text-sm font-medium">
              Todas
            </button>
            {galleryCategories.map((cat) => (
              <button 
                key={cat.name}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors"
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i}
                className={`bg-huracan-gray rounded-xl overflow-hidden group cursor-pointer ${
                  i % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="aspect-square relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-huracan-gray-light">
                    <span className="text-4xl opacity-30">📸</span>
                  </div>
                  <div className="absolute inset-0 bg-huracan-red/0 group-hover:bg-huracan-red/50 transition-colors flex items-center justify-center">
                    <svg 
                      className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn-secondary">
              Cargar más fotos
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="section-padding bg-huracan-gray">
        <div className="container-custom">
          <SectionTitle 
            title="Síguenos en Instagram" 
            subtitle="Contenido diario de entrenamientos, partidos y vida del club."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <a 
                key={i}
                href={clubInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-huracan-black rounded-xl overflow-hidden group"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a 
              href={clubInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              </svg>
              @cahuracanbogota
            </a>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <SectionTitle 
            title="Videos" 
            subtitle="Resúmenes de partidos, entrenamientos y momentos especiales."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Resumen Torneo Copa Ciudad 2023", duration: "5:32" },
              { title: "Entrenamiento categoría Sub-15", duration: "3:15" },
              { title: "Viaje a Buenos Aires 2023", duration: "8:47" }
            ].map((video, i) => (
              <div key={i} className="card group cursor-pointer">
                <div className="aspect-video bg-huracan-gray-light rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <span className="text-5xl opacity-30">🎬</span>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-huracan-red rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <h3 className="font-bold">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

