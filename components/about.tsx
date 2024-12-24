import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative w-full">
            <Image
              src="/Group22.png"
              alt="Nuestro equipo trabajando"
              layout="responsive"
              width={1200}
              height={800}
              className="object-cover object-center"
            />
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-10 text-right">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-druk font-bold text-white">
                LA COMIDA ES <br />
                <span className="text-yellow-400">NUESTRO ARTE</span>
              </h2>
            </div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <h1 className="font-syneBold text-lg sm:text-xl lg:text-2xl text-black font-medium">
              ¿Quién es Foodies?
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="#contacto"
              className="font-syneBold inline-flex items-center text-base sm:text-lg lg:text-xl text-black font-medium hover:underline"
            >
              Contáctanos
              <svg
                className="ml-2 w-5 sm:w-6 h-5 sm:h-6"
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
        </div>
      </div>
    </section>
  );
}
