"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between border-b border-primary-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-700">STPS</span>
              <span className="ml-2 text-xl text-gray-700">Capacitadores</span>
            </Link>
          </div>
          <div className="ml-10 space-x-8 hidden lg:flex">
            <Link
              href="/"
              className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/cursos"
              className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Cursos
            </Link>
            <Link
              href="/estados"
              className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Cobertura
            </Link>
            <Link
              href="/contacto"
              className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Contacto
            </Link>
          </div>
          <div className="ml-10 hidden lg:block">
            <Link href="/contacto" className="btn-primary">
              Solicita Información
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/cursos"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cursos
            </Link>
            <Link
              href="/estados"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cobertura
            </Link>
            <Link
              href="/contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="pt-2">
              <Link
                href="/contacto"
                className="btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicita Información
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
