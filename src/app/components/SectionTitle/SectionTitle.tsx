interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-huracan-black" : "text-white"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-gray-600" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-huracan-red mt-6 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}

