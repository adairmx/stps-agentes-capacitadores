import type { Metadata } from "next";
import Link from "next/link";
import { courses, categories } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Cursos de Capacitación STPS Certificados",
  description:
    "Más de 15 cursos de capacitación certificados ante STPS. Seguridad, desarrollo humano, técnicos y más. Constancias DC-3 válidas. Capacitación empresarial en el Bajío.",
  keywords: [
    "cursos STPS",
    "capacitación certificada",
    "DC-3",
    "seguridad industrial",
    "desarrollo humano",
    "cursos técnicos",
    "capacitación empresarial",
  ],
  openGraph: {
    title: "Cursos de Capacitación STPS | +15 Opciones Certificadas",
    description: "Catálogo completo de cursos certificados ante STPS en el Bajío Mexicano",
  },
};

export default function CursosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Catálogo de Cursos
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl">
            Ofrecemos más de 15 cursos especializados con certificación STPS. 
            Todos nuestros programas incluyen constancias DC-3 válidas ante la Secretaría del Trabajo.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-container bg-gray-50">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Categorías de Cursos</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 hover:bg-primary-200 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <article key={course.id} className="card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  {course.category}
                </span>
                <span className="text-sm text-gray-500 font-medium">{course.duration}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Nivel: <span className="text-gray-700">{course.level}</span>
                  </span>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Solicitar
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container bg-primary-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Beneficios de Nuestros Cursos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Certificación Oficial STPS
                </h3>
                <p className="text-gray-600">
                  Constancias DC-3 válidas y reconocidas ante la Secretaría del Trabajo
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Instructores Certificados
                </h3>
                <p className="text-gray-600">
                  Agentes capacitadores con amplia experiencia y certificación vigente
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Material Didáctico Incluido
                </h3>
                <p className="text-gray-600">
                  Manuales, presentaciones y material de apoyo para cada curso
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Modalidades Flexibles
                </h3>
                <p className="text-gray-600">
                  In-company, en nuestras instalaciones o en línea según tus necesidades
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
            ¿Necesitas Capacitación para tu Empresa?
          </h2>
          <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            Solicita una cotización personalizada. Te asesoramos en la selección de los cursos
            más adecuados para tu equipo.
          </p>
          <Link href="/contacto" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Contactar Ahora
          </Link>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Cursos de Capacitación STPS",
            description: "Catálogo de cursos certificados ante STPS",
            numberOfItems: courses.length,
            itemListElement: courses.map((course, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Course",
                name: course.title,
                description: course.description,
                provider: {
                  "@type": "EducationalOrganization",
                  name: "Agentes Capacitadores STPS",
                },
                courseCategory: course.category,
                educationalLevel: course.level,
                timeRequired: course.duration,
              },
            })),
          }),
        }}
      />
    </>
  );
}
