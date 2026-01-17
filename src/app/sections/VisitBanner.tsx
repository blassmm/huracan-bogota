import Link from "next/link";

export default function VisitBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-red py-6">
        <div className="container-custom">
          <Link 
            href="/quienes-somos#visitas"
            className="flex flex-col md:flex-row items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                ✈️
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl">Visitas oficiales al Club Atlético Huracán</h3>
                <p className="text-white/80 text-sm">Vive la experiencia de conocer las instalaciones en Buenos Aires</p>
              </div>
            </div>
            <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all">
              Más información
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

