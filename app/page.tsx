import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Location } from "@/components/location";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { AppDownload } from "@/components/app-download";
import Mancha from "@/public/mancha.svg";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    
    
      <Image
        src={Mancha}
        alt="imagendeBurguer"
        className="absolute top-0 right-0 w-full h-auto md:w-auto md:h-auto"
      />
      <main>
        <Hero />
        <About />
        <Location />
        <Testimonials />
        <Contact />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}
