import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full">
            <Image
              src="/Group22.png"
              alt="Nuestro equipo trabajando"
              layout="intrinsic"
              width={1200}
              height={800}
              className="object-cover object-center"
            />
            {/* Texto completamente en la esquina inferior derecha */}
            <div className="absolute text-3xl lg:text-5xl font-druk font-bold text-white px-6 pt-15 bottom-6 left-20">
              <h2 className="bottom-6 left-20 ">
                LA COMIDA ES <br />
              </h2>
              <span className=" truncate inline-block text-yellow-400">
                NUESTRO ARTE
              </span>
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="font-syneBold text-xl lg:text-xl text-black font-medium">
              ¿Quién es Foodies?
            </h1>
            <p className="text-lg lg:text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="#contacto"
              className="font-syneBold inline-flex items-center lg:text-xl text-black font-medium hover:underline"
            >
              Contáctanos
              <svg
                className="ml-2 w-6 h-6"
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
