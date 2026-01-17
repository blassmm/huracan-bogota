import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import LenisWrapper from "./components/LenisWrapper/LenisWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://huracanbogota.com"),
  title: {
    default: "Huracán de Bogotá | Club de Fútbol Formativo",
    template: "%s | Huracán de Bogotá"
  },
  description: "Escuela de fútbol formativo en Bogotá. Filial oficial del Club Atlético Huracán de Argentina. Formamos jugadores integrales con metodología profesional.",
  keywords: ["fútbol", "escuela de fútbol", "Bogotá", "Huracán", "formación deportiva", "fútbol infantil", "academia de fútbol"],
  authors: [{ name: "Huracán de Bogotá" }],
  creator: "Huracán de Bogotá",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://huracanbogota.com",
    siteName: "Huracán de Bogotá",
    title: "Huracán de Bogotá | Club de Fútbol Formativo",
    description: "Escuela de fútbol formativo en Bogotá. Filial oficial del Club Atlético Huracán de Argentina.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Huracán de Bogotá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huracán de Bogotá | Club de Fútbol Formativo",
    description: "Escuela de fútbol formativo en Bogotá. Filial oficial del Club Atlético Huracán de Argentina.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics placeholder */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <LenisWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LenisWrapper>
      </body>
    </html>
  );
}
