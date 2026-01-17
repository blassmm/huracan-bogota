import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { sponsors } from "@/data/sponsors";
import LogoMarquee from "@/app/components/MarqueeTS/LogoMarquee";


export default function SponsorsSection() {
  return (
    <section className="section-padding">
      <div className="">
        <SectionTitle
          title="Nuestros Sponsors"
          subtitle="Empresas que confían en nuestro proyecto y nos acompañan en la formación de talentos."
        />

        <LogoMarquee
          logos={sponsors.map((s) => ({ name: s.name, logo: s.logo }))}
        />


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white/5 rounded-xl p-6 flex items-center justify-center aspect-video hover:bg-white/10 transition-colors"
            >
              {sponsor.url ? (
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="text-muted text-sm text-center font-medium">
                  {sponsor.name}
                </a>
              ) : (
                <span className="text-muted text-sm text-center font-medium">{sponsor.name}</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted mb-4">¿Querés ser sponsor del club?</p>
          <a
            href="mailto:sponsors@huracanbogota.com"
            className="btn-secondary text-sm"
          >
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
}

