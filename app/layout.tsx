import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://stps-agentes-capacitadores.com'),
  title: {
    default: "Agentes Capacitadores STPS Certificados | Cursos de Capacitación en el Bajío",
    template: "%s | Agentes Capacitadores STPS"
  },
  description: "Ofrecemos servicios de capacitación con agentes certificados ante la STPS. Más de 15 cursos disponibles en Guanajuato, Querétaro, Aguascalientes y todo el Bajío Mexicano. Capacitación profesional y certificada.",
  keywords: [
    "STPS",
    "agentes capacitadores",
    "capacitación STPS",
    "cursos certificados",
    "Bajío Mexicano",
    "Guanajuato",
    "Querétaro",
    "Aguascalientes",
    "San Luis Potosí",
    "Jalisco",
    "capacitación laboral",
    "DC-3",
    "constancias de habilidades",
    "cursos empresariales"
  ],
  authors: [{ name: "Agentes Capacitadores STPS" }],
  creator: "Agentes Capacitadores STPS",
  publisher: "Agentes Capacitadores STPS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://stps-agentes-capacitadores.com',
    siteName: 'Agentes Capacitadores STPS',
    title: 'Agentes Capacitadores STPS Certificados | Cursos en el Bajío',
    description: 'Capacitación profesional certificada ante STPS. Más de 15 cursos disponibles en todo el Bajío Mexicano.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agentes Capacitadores STPS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentes Capacitadores STPS Certificados',
    description: 'Capacitación profesional certificada ante STPS en el Bajío Mexicano',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="canonical" href="https://stps-agentes-capacitadores.com" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

