import Image from "next/image";

export function AppDownload() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <Image
              src="/telefono.png"
              alt="App Foodies"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-druk font-bold">
              Obten más beneficios
              <br />
              <span className="inline-block bg-yellow-400 px-2">
                Descarga nuestra App
              </span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-2xl">
                  01
                </div>
                <div>
                  <h3 className="font-bold font-syneBold text-xl">
                    Solicita rápido
                  </h3>
                  <p className="text-gray-600">
                    Curabitur in eleifend turpis, id vehicula odio. Donec
                    pulvinar tellus eget magna aliquet ultricies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-2xl">
                  02
                </div>
                <div>
                  <h3 className="font-bold font-syneBold text-xl">
                    Fácil de Usar
                  </h3>
                  <p className="text-gray-600">
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-2xl">
                  03
                </div>
                <div>
                  <h3 className="font-bold font-syneBold text-xl">
                    Promociones especiales
                  </h3>
                  <p className="text-gray-600">
                    Curabitur in eleifend turpis, id vehicula odio. Donec
                    pulvinar tellus eget magna aliquet ultricies.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="block">
                <Image
                  src="/appstore.png"
                  alt="Download on App Store"
                  width={140}
                  height={42}
                />
              </a>
              <a href="#" className="block">
                <Image
                  src="/googleplay.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
