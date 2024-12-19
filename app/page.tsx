"use-client";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Location } from "@/components/location";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { AppDownload } from "@/components/app-download";

export default function Home() {
  return (
    <>
      <Nav />
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
