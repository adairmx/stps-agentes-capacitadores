import type { Metadata } from "next";
import Link from "next/link";
import { bajioStates } from "@/lib/states";

export const metadata: Metadata = {
  title: "Cobertura en el Bajío Mexicano | Capacitación STPS",
  description:
    "Servicios de capacitación STPS en Guanajuato, Querétaro, Aguascalientes, San Luis Potosí y Jalisco. Cobertura completa en el Bajío Mexicano.",
  keywords: [
    "capacitación STPS Bajío",
    "cursos STPS Guanajuato",
    "capacitación Querétaro",
    "STPS Aguascalientes",
    "cursos León",
    "capacitación Irapuato",
    "STPS Celaya",
  ],
  openGraph: {
    title: "Cobertura en el Bajío | Agentes Capacitadores STPS",
    description: "Capacitación certificada STPS en todo el Bajío Mexicano",
  },
};

export default function EstadosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Cobertura en el Bajío Mexicano
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl">
            Ofrecemos servicios de capacitación certificada STPS en los principales estados
            y ciudades del Bajío. Presencia regional para atender las necesidades de tu empresa.
          </p>
        </div>
      </section>

      {/* States Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bajioStates.map((state) => (
            <article key={state.id} className="card p-8 hover:scale-105 transition-transform duration-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{state.name}</h2>
              <p className="text-gray-600 mb-6 text-lg">{state.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Ciudades con Cobertura:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {state.cities.map((city, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/estados/${state.slug}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                Ver detalles de {state.name}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Regional Benefits Section */}
      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ventajas de Nuestro Servicio Regional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Presencia Local
                </h3>
                <p className="text-gray-600">
                  Conocimiento profundo del mercado laboral y necesidades específicas de cada región
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Respuesta Rápida
                </h3>
                <p className="text-gray-600">
                  Tiempos de respuesta reducidos gracias a nuestra cobertura regional
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Servicio Personalizado
                </h3>
                <p className="text-gray-600">
                  Atención directa y seguimiento cercano a las necesidades de cada empresa
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Costos Competitivos
                </h3>
                <p className="text-gray-600">
                  Reducción de costos de desplazamiento al contar con presencia regional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tu Empresa está en el Bajío?
          </h2>
          <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            Contáctanos para conocer cómo podemos ayudarte con la capacitación de tu personal.
            Atención personalizada en tu ciudad.
          </p>
          <Link href="/contacto" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Solicitar Información
          </Link>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Capacitación STPS en el Bajío Mexicano",
            provider: {
              "@type": "EducationalOrganization",
              name: "Agentes Capacitadores STPS",
            },
            areaServed: bajioStates.map((state) => ({
              "@type": "State",
              name: state.name,
            })),
            description:
              "Servicios de capacitación certificada STPS en todo el Bajío Mexicano",
          }),
        }}
      />
    </>
  );
}
