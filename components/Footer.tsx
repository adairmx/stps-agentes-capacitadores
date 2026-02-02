import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Agentes Capacitadores STPS
            </h3>
            <p className="text-gray-300 mb-4">
              Capacitación profesional certificada ante la STPS. Ofrecemos más de 15 cursos
              especializados para empresas en todo el Bajío Mexicano.
            </p>
            <p className="text-gray-400 text-sm">
              Agentes certificados con amplia experiencia en capacitación empresarial y desarrollo
              de competencias laborales.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/cursos"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  href="/estados"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Cobertura
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Cobertura Bajío</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/estados/guanajuato"
                  className="hover:text-primary-400 transition-colors"
                >
                  Guanajuato
                </Link>
              </li>
              <li>
                <Link
                  href="/estados/queretaro"
                  className="hover:text-primary-400 transition-colors"
                >
                  Querétaro
                </Link>
              </li>
              <li>
                <Link
                  href="/estados/aguascalientes"
                  className="hover:text-primary-400 transition-colors"
                >
                  Aguascalientes
                </Link>
              </li>
              <li>
                <Link
                  href="/estados/san-luis-potosi"
                  className="hover:text-primary-400 transition-colors"
                >
                  San Luis Potosí
                </Link>
              </li>
              <li>
                <Link
                  href="/estados/jalisco"
                  className="hover:text-primary-400 transition-colors"
                >
                  Jalisco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Agentes Capacitadores STPS. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Capacitación certificada ante la Secretaría del Trabajo y Previsión Social
          </p>
        </div>
      </div>
    </footer>
  );
}
