import Link from "next/link";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { methodology } from "@/data/staff";

export default function MethodologyPreview() {
  const areas = Object.values(methodology);

  return (
    <section className="section-padding bg-huracan-gray">
      <div className="container-custom">
        <SectionTitle 
          title="Nuestra Metodología" 
          subtitle="Formación integral basada en cuatro pilares fundamentales del desarrollo deportivo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {areas.map((area, i) => (
            <div key={i} className="card text-center">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="font-bold text-lg mb-2">{area.title}</h3>
              <p className="text-muted text-sm">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/metodologia" className="btn-secondary">
            Conocer más sobre nuestra metodología
          </Link>
        </div>
      </div>
    </section>
  );
}

