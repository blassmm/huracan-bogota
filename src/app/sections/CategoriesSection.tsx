import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import ProgramCard from "@/app/components/Card/ProgramCard";
import { allCategories } from "@/data/programs";

export default function CategoriesSection() {
  return (
    <section className="section-padding bg-huracan-black">
      <div className="container-custom">
        <SectionTitle 
          title="Nuestras Categorías" 
          subtitle="Programas de formación para todas las edades, desde los primeros pasos hasta la competencia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allCategories.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
