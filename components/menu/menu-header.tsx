import Image from "next/image";
import Mancha2 from "@/public/mancha2.svg";
export function MenuHeader() {
  return (
    <div className="relative h-[450px] bg-black overflow-hidden">
      <Image
        src={Mancha2}
        alt="imagendeBurgue"
        className="absolute top-0 right-0 h-full md:h-auto"
      />
      {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400 rounded-bl-[100px]" /> */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-druk font-bold text-white leading-tight">
            Cada sabor <br />
            es una nueva <br />
            <span className="inline-block text-black bg-yellow-400 px-2">
              experiencia
            </span>
          </h1>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2">
          <Image
            src="/hero_hamburger.png"
            alt="Deliciosa hamburguesa"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
