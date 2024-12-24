"use-client";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-visible">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-left text__teclado text-4xl sm:text-5xl md:text-6xl font-druk font-bold leading-tight">
              Un nuevo sabor está en{" "}
              <span className="text__teclado-span text-4xl sm:text-5xl md:text-6xl bg-yellow-400 px-2">
                la ciudad
              </span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl">
              Estamos a punto de descubrir un mundo lleno de sabores y de
              sensaciones inigualables.
            </p>
            <Link
              href="#encuentranos"
              className="font-syneBold text-base sm:text-lg inline-flex items-center text-black py-3 px-6"
            >
              Encuéntranos
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/hamburguesa.png"
              alt="Hamburguesa deliciosa"
              width={600}
              height={600}
              className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
