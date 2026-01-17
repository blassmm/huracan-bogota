import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-huracan-red/20 rounded-full flex items-center justify-center text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <span className="text-muted text-sm">{testimonial.role}</span>
        </div>
      </div>
      
      <blockquote className="text-muted italic relative pl-4 border-l-2 border-huracan-red">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
    </div>
  );
}

