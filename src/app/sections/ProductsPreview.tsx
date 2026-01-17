import Link from "next/link";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import ProductCard from "@/app/components/Card/ProductCard";
import { products } from "@/data/products";

export default function ProductsPreview() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="section-padding bg-huracan-black">
      <div className="container-custom">
        <SectionTitle 
          title="Tienda Oficial" 
          subtitle="Llevá los colores del Globo. Productos oficiales para hinchas y jugadores."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/productos" className="btn-primary">
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  );
}

