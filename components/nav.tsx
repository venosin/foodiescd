"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  // Función para manejar la navegación a secciones
  const handleSectionClick = (href: string) => {
    if (pathname !== "/") {
      // Si no estamos en la página principal, redirigir primero y esperar un momento
      router.push(`/${href}`);
      setTimeout(() => {
        const sectionId = href.startsWith("#") ? href.slice(1) : href;
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 500); // Tiempo para permitir que la página se cargue
    } else {
      // Si estamos en la página principal, solo desplazarse
      const sectionId = href.startsWith("#") ? href.slice(1) : href;
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

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
            {/* Enlace con comportamiento ajustado */}
            <a
              onClick={() => handleSectionClick("#about")}
              className={`nav-link cursor-pointer font-syneBold ${
                pathname === "/menu" ? "text-white" : ""
              }`}
            >
              Acerca de
            </a>
            <a
              onClick={() => handleSectionClick("#encuentranos")}
              className={`nav-link cursor-pointer font-syneBold ${
                pathname === "/menu" ? "text-white" : ""
              }`}
            >
              Restaurantes
            </a>
            <Link
              href="/menu"
              className={`nav-link font-syneBold ${
                pathname === "/menu" ? "text-white" : ""
              }`}
            >
              Menú
            </Link>
            <a
              onClick={() => handleSectionClick("#contacto")}
              className={`nav-link cursor-pointer font-syneBold ${
                pathname === "/menu" ? "text-white" : ""
              }`}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
