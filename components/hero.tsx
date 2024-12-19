"use-client";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className=" relative min-h-screen overflow-visible">
      {/* <div className="absolute top-0 right-0 w-2/3 h-full bg-yellow-400 rounded-bl-2xl" /> */}
      {/*<Mancha/>*/}
      {/* <img src={Mancha} alt="My Icon" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-druk font-bold leading-tight">
              Un nuevo sabor esta en{" "}
              <span className="inline-block bg-yellow-400 px-2">la ciudad</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Estamos a punto de descubrir un mundo lleno de sabores y de
              sensaciones inigualables.
            </p>
            <Link
              href="#encuentranos"
              className=" font-syneBold text-lg font-hairline  inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors"
            >
              Encuentranos
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/hamburguesa.png"
              alt="Hamburguesa deliciosa"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
