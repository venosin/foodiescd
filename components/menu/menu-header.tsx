import Image from "next/image";
import Mancha2 from "@/public/mancha2.svg";

export function MenuHeader() {
  return (
    <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] bg-black overflow-hidden">
      <Image
        src={Mancha2}
        alt="imagendeBurgue"
        className="absolute top-0 right-0 h-full md:h-auto object-cover"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col-reverse sm:flex-row items-center sm:justify-between">
      
        <div className="max-w-xl text-center sm:text-left mb-4 sm:mb-0 lg:mr-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl animate-slide font-druk font-bold text-white leading-tight">
            Cada sabor <br />
            es una nueva <br />
            <span className="inline-block text-black bg-yellow-400 px-2">
              experiencia
            </span>
          </h1>
        </div>

  
        <div className="w-3/4 sm:w-1/2 lg:w-2/5">
          <Image
            src="/hero_hamburger.png"
            alt="Deliciosa hamburguesa"
            width={600}
            height={600}
            className="object-contain mx-auto lg:ml-0"
          />
        </div>
      </div>
    </div>
  );
}
