import Link from "next/link";
import { Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="card group">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-huracan-red/20 rounded-xl flex items-center justify-center text-2xl group-hover:bg-huracan-red transition-colors">
          ⚽
        </div>
        <div>
          <h3 className="font-bold text-xl">{program.name}</h3>
          <span className="text-huracan-red font-medium">{program.ageRange}</span>
        </div>
      </div>
      
      <p className="text-muted mb-4">{program.description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-sm mb-2 text-white/80">Incluye:</h4>
        <ul className="text-sm text-muted space-y-1">
          {program.includes.slice(0, 3).map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-huracan-red rounded-full" />
              {item}
            </li>
          ))}
          {program.includes.length > 3 && (
            <li className="text-huracan-red">+{program.includes.length - 3} más</li>
          )}
        </ul>
      </div>

      <Link
        href={`/programas#${program.id}`}
        className="inline-flex items-center gap-2 text-huracan-red hover:text-huracan-red-light transition-colors font-medium text-sm"
      >
        Ver detalles
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

