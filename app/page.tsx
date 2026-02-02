import Link from "next/link";
import { courses, categories } from "@/lib/courses";
import { bajioStates } from "@/lib/states";

export default function Home() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
        <div className="section-container py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Agentes Capacitadores
              <span className="block text-primary-200">Certificados ante STPS</span>
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 text-primary-50">
              Capacitación profesional y certificada para empresas en el Bajío Mexicano. 
              Más de 15 cursos especializados con constancias DC-3 válidas ante la STPS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cursos" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Ver Todos los Cursos
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-700 transition-colors duration-200"
              >
                Solicita una Cotización
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos agentes capacitadores certificados con amplia experiencia en el Bajío
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Certificación STPS</h3>
            <p className="text-gray-600">
              Constancias DC-3 válidas y reconocidas oficialmente ante la STPS
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">+15 Cursos</h3>
            <p className="text-gray-600">
              Amplio catálogo de cursos en seguridad, desarrollo humano y técnicos
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cobertura Bajío</h3>
            <p className="text-gray-600">
              Servicio en Guanajuato, Querétaro, Aguascalientes, SLP y Jalisco
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexibilidad</h3>
            <p className="text-gray-600">
              Horarios adaptables y capacitación in-company o en nuestras instalaciones
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cursos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capacitación certificada en las áreas más demandadas por las empresas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <div key={course.id} className="card p-6 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  {course.category}
                </span>
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Nivel: {course.level}</span>
                <Link
                  href="/contacto"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Más información →
                </Link>
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

      {/* Coverage Section */}
      <section className="section-container bg-primary-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cobertura en el Bajío Mexicano
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos nuestros servicios de capacitación en los principales estados del Bajío
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bajioStates.map((state) => (
            <Link
              key={state.id}
              href={`/estados/${state.slug}`}
              className="card p-6 hover:scale-105 transition-transform duration-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{state.name}</h3>
              <p className="text-gray-600 mb-4">{state.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {state.cities.slice(0, 3).map((city, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                  >
                    {city}
                  </span>
                ))}
                {state.cities.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                    +{state.cities.length - 3} más
                  </span>
                )}
              </div>
              <span className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Ver más →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/estados" className="btn-secondary">
            Ver Todas las Ciudades
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para Capacitar a tu Equipo?
          </h2>
          <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            Contáctanos hoy y recibe una cotización personalizada para la capacitación de tu empresa.
            Constancias DC-3 válidas ante STPS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-primary-700 transition-colors duration-200"
            >
              Solicita tu Cotización
            </Link>
            <Link
              href="/cursos"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md bg-white text-primary-700 hover:bg-gray-100 transition-colors duration-200"
            >
              Explorar Cursos
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
            "@type": "EducationalOrganization",
            name: "Agentes Capacitadores STPS",
            description:
              "Capacitación profesional certificada ante STPS en el Bajío Mexicano",
            url: "https://stps-agentes-capacitadores.com",
            areaServed: [
              { "@type": "State", name: "Guanajuato" },
              { "@type": "State", name: "Querétaro" },
              { "@type": "State", name: "Aguascalientes" },
              { "@type": "State", name: "San Luis Potosí" },
              { "@type": "State", name: "Jalisco" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Catálogo de Cursos STPS",
              itemListElement: courses.slice(0, 5).map((course, index) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: course.title,
                  description: course.description,
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "Agentes Capacitadores STPS",
                  },
                },
              })),
            },
          }),
        }}
      />
    </>
  );
}
