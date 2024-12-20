import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 ">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-druk font-bold text-xl">
            Foodies
          </Link>
          {/* Enlaces de navegación */}
          <div className="hidden md:flex space-x-8 ml-16">
            <Link href="#about" className="font-syneBold">
              Acerca de
            </Link>
            <Link href="#encuentranos" className="font-syneBold">
              Restaurantes
            </Link>
            <Link href="/menu" className="font-syneBold">
              Menú
            </Link>
            <Link href="#contacto" className="font-syneBold">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
