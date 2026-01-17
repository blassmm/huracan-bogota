import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { memberBenefits } from "@/data/sponsors";

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-huracan-gray">
      <div className="container-custom">
        <SectionTitle 
          title="Beneficios para Miembros" 
          subtitle="Ser parte del club tiene sus ventajas. Descubrí todo lo que te espera."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberBenefits.map((benefit, i) => (
            <div key={i} className="card flex items-start gap-4">
              <div className="text-3xl">{benefit.icon}</div>
              <div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-muted text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-huracan-red/10 border border-huracan-red/30 rounded-xl text-center">
          <p className="text-muted mb-2">Próximamente</p>
          <h3 className="font-bold text-xl">Programa de membresías y beneficios exclusivos</h3>
        </div>
      </div>
    </section>
  );
}

