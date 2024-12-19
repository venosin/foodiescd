import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/Group22.png"
              alt="Nuestro equipo trabajando"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-druk font-bold">
              LA COMIDA ES{" "}
              <span className="inline-block bg-yellow-400 px-2">
                NUESTRO ARTE
              </span>
            </h2>

            <h1 className=" font-syneBold inline-flextext-black font-medium">
              {" "}
              Quien es Foodies?
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="#contacto"
              className="font-syneBold inline-flex items-center text-black font-medium hover:underline"
            >
              Contáctanos
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
        </div>
      </div>
    </section>
  );
}
