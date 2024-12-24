"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false); // Control del menú
  const [isInContact, setIsInContact] = useState(false); // Estado para detectar la sección contacto

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleSectionClick = (href: string) => {
  //   setIsOpen(false); // Cerrar el menú en dispositivos móviles al hacer clic
  //   if (typeof window !== "undefined") {
  //     const sectionId = href.startsWith("#") ? href.slice(1) : href;
  //     if (pathname !== "/") {
  //       router.push(`/${href}`);
  //       setTimeout(() => {
  //         document.getElementById(sectionId)?.scrollIntoView({
  //           behavior: "smooth",
  //         });
  //       }, 500);
  //     } else {
  //       document.getElementById(sectionId)?.scrollIntoView({
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const contactSection = document.getElementById("contacto");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsInContact(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isNavWhite = isInContact || pathname === "/menu";

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        isNavWhite ? "text-white" : "text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-10">
            <Link
              href="/"
              className={`font-druk font-bold text-xl ${
                isNavWhite ? "text-white" : "text-black"
              }`}
            >
              Foodies
            </Link>
            <div className="hidden md:flex space-x-6">
              <a
              href="#about"
                // onClick={() => handleSectionClick("#about")}
                className={`nav-link cursor-pointer font-syneBold ${
                  isNavWhite ? "text-white" : "text-black"
                }`}
              >
                Acerca de
              </a>
              <a
              href="#encuentranos"
                // onClick={() => handleSectionClick("#encuentranos")}
                className={`nav-link cursor-pointer font-syneBold ${
                  isNavWhite ? "text-white" : "text-black"
                }`}
              >
                Restaurantes
              </a>
              <Link
                href="/menu"
                className={`nav-link font-syneBold ${
                  isNavWhite ? "text-white" : "text-black"
                }`}
              >
                Menú
              </Link>
              <a
              href="#contacto"
                // onClick={() => handleSectionClick("#contacto")}
                className={`nav-link cursor-pointer font-syneBold ${
                  isNavWhite ? "text-white" : "text-black"
                }`}
              >
                Contáctanos
              </a>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className={`md:hidden block ${
              isNavWhite ? "text-white" : "text-gray-800"
            }`}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2">
            <a
            href="#about"
              // onClick={() => handleSectionClick("#about")}
              className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Acerca de
            </a>
            <a
            href="#encuentranos"
              // onClick={() => handleSectionClick("#encuentranos")}
              className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Restaurantes
            </a>
            <Link
              href="/menu"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Menú
            </Link>
            <a
            href="#contacto"
              // onClick={() => handleSectionClick("#contacto")}
              className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Contáctanos
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
