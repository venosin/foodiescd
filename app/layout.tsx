import type { Metadata } from "next";
import "./globals.css";
import Mancha from "@/public/mancha.svg";
import Image from "next/image";
import { Inter } from "next/font/google";

// Configuración de la fuente Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Metadata del sitio
export const metadata: Metadata = {
  title: "Foodies - Un nuevo sabor",
  description: "Descubre nuevos sabores en tu ciudad",
};

// RootLayout único
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="b-0 p-0 m-0 min-h-screen relative">
        {/* Imagen fija en la esquina superior derecha */}
        <Image
          src={Mancha}
          alt="imagendeBurguer"
          className="absolute top-0 right-0 h-full md:h-auto"
        />
        {/* Contenido principal */}
        {children}
      </body>
    </html>
  );
}
