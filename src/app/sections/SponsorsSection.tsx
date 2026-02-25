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
          logos={sponsors.map((s) => ({ name: s.name, logo: s.logo, scale: s.scale, url: s.url }))}
        />


        

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

