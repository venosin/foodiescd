"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`font-druk font-bold text-xl ${
              pathname === "/menu" ? "text-white" : ""
            }`}
          >
            Foodies
          </Link>
          {/* Enlaces de navegación */}
          <div className="hidden md:flex space-x-8 ml-16">
            <Link
              href="#about"
              className={`nav-link font-syneBold ${
                pathname === "/menu" ? "text-white" : ""
              }`}
            >
              Acerca de
            </Link>
            <Link
              href="#encuentranos"
              className={`nav-link font-syneBold ${
                pathname === "/menu" ? "text-white" : ""
              }`}
            >
              Restaurantes
            </Link>
            <Link
              href="/menu"
              className={`nav-link font-syneBold ${
                pathname === "/menu" ? "text-white" : ""
              }`}
            >
              Menú
            </Link>
            <Link
              href="#contacto"
              className={`nav-link font-syneBold ${
                pathname === "/menu" ? "text-white" : ""
              }`}
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
