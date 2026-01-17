import { Metadata } from "next";
import { clubInfo } from "@/data/club";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta al Club Huracán de Bogotá. Inscripciones, información y consultas.",
  openGraph: {
    title: "Contacto | Huracán de Bogotá",
    description: "Información de contacto y ubicación del club.",
  },
};

export default function Contacto() {
  const whatsappLink = `https://wa.me/${clubInfo.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent("¡Hola! Quiero información sobre inscripciones al club.")}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-muted">
              ¿Tenés preguntas? Estamos acá para ayudarte. Contactanos y te respondemos a la brevedad.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Información de Contacto</h2>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 hover:border-green-500 group"
                >
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:bg-green-500 transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-muted">WhatsApp (preferido)</span>
                    <p className="font-bold">{clubInfo.whatsapp}</p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href={`tel:${clubInfo.phone}`}
                  className="card flex items-center gap-4 hover:border-huracan-blue group"
                >
                  <div className="w-14 h-14 bg-huracan-blue/20 rounded-xl flex items-center justify-center text-2xl group-hover:bg-huracan-blue transition-colors">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-muted">Teléfono</span>
                    <p className="font-bold">{clubInfo.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${clubInfo.email}`}
                  className="card flex items-center gap-4 hover:border-huracan-red group"
                >
                  <div className="w-14 h-14 bg-huracan-red/20 rounded-xl flex items-center justify-center text-2xl group-hover:bg-huracan-red transition-colors">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-muted">Email</span>
                    <p className="font-bold">{clubInfo.email}</p>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href={clubInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 hover:border-pink-500 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:from-purple-500 group-hover:to-pink-500 transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-muted">Instagram</span>
                    <p className="font-bold">@cahuracanbogota</p>
                  </div>
                </a>

                {/* Address */}
                <div className="card flex items-start gap-4">
                  <div className="w-14 h-14 bg-huracan-yellow/20 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-muted">Dirección</span>
                    <p className="font-bold">{clubInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="mt-8 card">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-huracan-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Horarios de Atención
                </h3>
                <ul className="space-y-2 text-muted">
                  <li>{clubInfo.schedule.weekdays}</li>
                  <li>{clubInfo.schedule.saturday}</li>
                  <li>{clubInfo.schedule.sunday}</li>
                </ul>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Ubicación</h2>
              <div className="aspect-square lg:aspect-auto lg:h-full bg-huracan-gray rounded-2xl overflow-hidden">
                <iframe
                  src={clubInfo.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del club"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding bg-huracan-gray">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-center">Documentos para Descarga</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Reglamento del Club", file: "reglamento.pdf", icon: "📋" },
              { name: "Ficha de Inscripción", file: "ficha-inscripcion.pdf", icon: "📝" },
              { name: "Ficha Médica", file: "ficha-medica.pdf", icon: "🏥" }
            ].map((doc) => (
              <a 
                key={doc.file}
                href={`/docs/${doc.file}`}
                download
                className="card flex items-center gap-4 hover:border-huracan-red group"
              >
                <div className="w-12 h-12 bg-huracan-red/20 rounded-xl flex items-center justify-center text-2xl group-hover:bg-huracan-red transition-colors">
                  {doc.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold">{doc.name}</p>
                  <span className="text-sm text-muted">PDF</span>
                </div>
                <svg className="w-5 h-5 text-muted group-hover:text-huracan-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-12 bg-gradient-red">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🎉</span>
              <div>
                <h3 className="font-bold text-xl">¡Inscripciones Abiertas 2026!</h3>
                <p className="text-white/80">Cupos limitados. Reservá tu lugar ahora.</p>
              </div>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-white text-huracan-red border-white shrink-0"
            >
              Consultar Disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "¿Cuál es el costo de la inscripción?",
                a: "Los costos varían según la categoría y el programa. Contactanos por WhatsApp para recibir información detallada y actualizada."
              },
              {
                q: "¿Mi hijo puede hacer una clase de prueba?",
                a: "¡Sí! Ofrecemos una clase de prueba gratuita para que tu hijo conozca el ambiente y la metodología del club."
              },
              {
                q: "¿Qué necesito para inscribir a mi hijo?",
                a: "Documento de identidad, ficha médica completa, autorización de padres y uniforme de entrenamiento (disponible en nuestra tienda)."
              },
              {
                q: "¿Tienen categoría femenina?",
                a: "Estamos trabajando en lanzar nuestra categoría de fútbol femenino. Por ahora, las niñas pueden entrenar con las categorías masculinas."
              },
              {
                q: "¿Participan en torneos oficiales?",
                a: "Sí, participamos en la Liga de Bogotá y otros torneos oficiales según la categoría."
              }
            ].map((faq, i) => (
              <div key={i} className="card">
                <h4 className="font-bold mb-2">{faq.q}</h4>
                <p className="text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

