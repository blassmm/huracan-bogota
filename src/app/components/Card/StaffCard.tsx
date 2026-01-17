import { StaffMember } from "@/data/staff";

interface StaffCardProps {
  member: StaffMember;
}

export default function StaffCard({ member }: StaffCardProps) {
  return (
    <div className="card text-center group">
      {/* Avatar placeholder */}
      <div className="w-24 h-24 mx-auto mb-4 bg-huracan-gray-light rounded-full flex items-center justify-center text-3xl overflow-hidden group-hover:ring-4 ring-huracan-red transition-all">
        {member.name.charAt(0)}
      </div>
      
      <h3 className="font-bold text-lg">{member.name}</h3>
      <span className="text-huracan-red text-sm font-medium">{member.role}</span>
      
      {member.bio && (
        <p className="text-muted text-sm mt-3">{member.bio}</p>
      )}
      
      {member.certifications && member.certifications.length > 0 && (
        <div className="mt-3 flex flex-wrap justify-center gap-1">
          {member.certifications.map((cert, i) => (
            <span key={i} className="text-xs bg-white/10 px-2 py-0.5 rounded">
              {cert}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

