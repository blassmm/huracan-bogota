import { Metadata } from "next";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import ProductCard from "@/app/components/Card/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Productos",
  description: "Tienda oficial del Club Huracán de Bogotá. Camisetas, shorts, accesorios y más.",
  openGraph: {
    title: "Productos | Huracán de Bogotá",
    description: "Tienda oficial con productos del club.",
  },
};

export default function Productos() {
  const ropaProducts = products.filter(p => p.category === "ropa");
  const accesoriosProducts = products.filter(p => p.category === "accesorios");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tienda Oficial</h1>
            <p className="text-xl text-muted">
              Llevá los colores del Globo con orgullo. Productos oficiales para hinchas y jugadores.
            </p>
          </div>
        </div>
      </section>

      {/* Member Discount Banner */}
      <section className="py-4 bg-huracan-yellow">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-huracan-black">
            <span className="text-2xl">🏷️</span>
            <p className="font-medium text-center">
              <strong>¡Socios del club!</strong> Obtené hasta 15% de descuento en todos los productos.
            </p>
          </div>
        </div>
      </section>

      {/* Ropa */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <SectionTitle 
            title="Indumentaria" 
            subtitle="Camisetas, shorts y uniformes oficiales."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ropaProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Accesorios */}
      <section className="section-padding bg-huracan-gray">
        <div className="container-custom">
          <SectionTitle 
            title="Accesorios" 
            subtitle="Complementá tu equipamiento con productos del club."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accesoriosProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="section-padding bg-huracan-black">
        <div className="container-custom">
          <SectionTitle 
            title="¿Cómo Comprar?" 
            subtitle="Proceso simple y rápido a través de WhatsApp."
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Elegí", desc: "Seleccioná el producto y talla" },
                { step: 2, title: "Contactá", desc: "Hacé clic en 'Comprar por WhatsApp'" },
                { step: 3, title: "Confirmá", desc: "Coordinamos entrega y pago" },
                { step: 4, title: "Recibí", desc: "Entrega en sede o envío a domicilio" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-huracan-red rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-huracan-gray rounded-xl">
              <h4 className="font-bold mb-4">Información Importante</h4>
              <ul className="space-y-2 text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-huracan-red">•</span>
                  Los precios pueden variar. Confirmá el precio final por WhatsApp.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-huracan-red">•</span>
                  Descuentos para socios aplican presentando carnet vigente.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-huracan-red">•</span>
                  Entrega gratuita en sede. Envíos a domicilio con costo adicional.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-huracan-red">•</span>
                  Cambios y devoluciones dentro de los 5 días hábiles con producto sin uso.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-huracan-gray border-t border-white/10">
        <div className="container-custom text-center">
          <span className="text-huracan-yellow text-sm font-medium">Próximamente</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Tienda Online con Carrito de Compras</h2>
          <p className="text-muted max-w-xl mx-auto">
            Estamos trabajando en una experiencia de compra completa. Por ahora, contactanos por WhatsApp para realizar tu pedido.
          </p>
        </div>
      </section>
    </>
  );
}

