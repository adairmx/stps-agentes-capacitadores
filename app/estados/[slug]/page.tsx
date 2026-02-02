import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bajioStates } from "@/lib/states";
import { courses } from "@/lib/courses";

export async function generateStaticParams() {
  return bajioStates.map((state) => ({
    slug: state.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const state = bajioStates.find((s) => s.slug === params.slug);

  if (!state) {
    return {
      title: "Estado no encontrado",
    };
  }

  return {
    title: `Capacitación STPS en ${state.name} | Cursos Certificados`,
    description: `${state.description} Más de 15 cursos certificados ante STPS. Constancias DC-3 válidas. Servicio profesional en ${state.cities.join(", ")}.`,
    keywords: [
      `STPS ${state.name}`,
      `capacitación ${state.name}`,
      `cursos certificados ${state.name}`,
      ...state.cities.map((city) => `capacitación STPS ${city}`),
    ],
    openGraph: {
      title: `Agentes Capacitadores STPS en ${state.name}`,
      description: state.description,
    },
  };
}

export default function StatePage({ params }: { params: { slug: string } }) {
  const state = bajioStates.find((s) => s.slug === params.slug);

  if (!state) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-16">
        <div className="section-container">
          <nav className="mb-4">
            <ol className="flex items-center space-x-2 text-primary-100">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/estados" className="hover:text-white">
                  Cobertura
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">{state.name}</li>
            </ol>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Capacitación STPS en {state.name}
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl">{state.description}</p>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Ciudades con Cobertura en {state.name}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {state.cities.map((city, index) => (
            <div
              key={index}
              className="card p-4 text-center hover:scale-105 transition-transform duration-200"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">{city}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses for this State */}
      <section className="section-container bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Cursos Disponibles en {state.name}
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Todos nuestros cursos están disponibles en {state.name}. Capacitación in-company o en nuestras instalaciones.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.slice(0, 6).map((course) => (
            <div key={course.id} className="card p-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-3">
                {course.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{course.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{course.duration}</span>
                <span className="text-gray-500">Nivel: {course.level}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/cursos" className="btn-primary">
            Ver Todos los Cursos ({courses.length})
          </Link>
        </div>
      </section>

      {/* State-specific Benefits */}
      <section className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          ¿Por Qué Elegirnos en {state.name}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Certificación STPS</h3>
            <p className="text-gray-600">Constancias DC-3 válidas oficialmente</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Presencia Local</h3>
            <p className="text-gray-600">Cobertura en todas las ciudades principales</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Respuesta Rápida</h3>
            <p className="text-gray-600">Servicio ágil y eficiente en la región</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Experiencia</h3>
            <p className="text-gray-600">Años atendiendo empresas de la región</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Tu Empresa está en {state.name}?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contáctanos para recibir una cotización personalizada. Atendemos empresas en{" "}
            {state.cities.slice(0, 3).join(", ")} y toda la región.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary">
              Solicitar Cotización
            </Link>
            <Link href="/cursos" className="btn-secondary">
              Ver Cursos Disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Capacitación STPS en ${state.name}`,
            provider: {
              "@type": "EducationalOrganization",
              name: "Agentes Capacitadores STPS",
            },
            areaServed: {
              "@type": "State",
              name: state.name,
            },
            availableChannel: {
              "@type": "ServiceChannel",
              availableLanguage: "es",
            },
            description: state.description,
          }),
        }}
      />
    </>
  );
}
