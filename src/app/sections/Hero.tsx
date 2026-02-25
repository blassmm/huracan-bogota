import Link from "next/link";
import Image from "next/image";
import { clubInfo } from "@/data/club";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-huracan-black via-huracan-gray to-huracan-black">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        {/* Red accent glow */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-huracan-red/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-huracan-red/10 rounded-full blur-[128px]" />
      </div>

      <div className="container-custom relative z-10 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-huracan-red rounded-full animate-pulse" />
          <span className="text-sm">Franquicia oficial del Club Atlético Huracán</span>
        </div>

        {/* Logo */}
        <div className="w-36 h-36 md:w-44 md:h-44 lg:w-62 lg:h-62 xl:w-75 xl:h-75 mx-auto mb-8 animate-fade-in delay-100 bg-white rounded-full p-3 shadow-2xl shadow-huracan-red/30">
          <Image
            src="/Logos/logo-hur-bogota.png"
            alt="Logo Huracán de Bogotá"
            width={300}
            height={300}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in delay-200">
          {clubInfo.name}
        </h1>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in delay-300">
          {clubInfo.slogan}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
          <Link href="/contacto" className="btn-primary text-lg px-8 py-4">
            Inscribite ahora
          </Link>
          <Link href="/programas" className="btn-secondary text-lg px-8 py-4">
            Ver programas
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in delay-500">
          {[
            { value: "+250", label: "Deportistas formados" },
            { value: "5", label: "Años de trayectoria" },
            { value: "4", label: "Categorías" },
            { value: "100%", label: "Pasión" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-huracan-red">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

