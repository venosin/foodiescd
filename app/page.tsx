"use-client";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Location } from "@/components/location";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { AppDownload } from "@/components/app-download";
import Mancha from "@/public/mancha.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* Imagen fija en la esquina superior derecha */}
    <Image
          src={Mancha}
          alt="imagendeBurguer"
          className="absolute top-0 right-0 h-full md:h-auto"
        />
        {/* Contenido principal */}
      <main>
        <Hero />
        <About />
        <Location />
        <Testimonials />
        <Contact />
        <AppDownload />
      </main>
    </>
  );
}
