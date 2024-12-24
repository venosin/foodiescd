"use client";

import { useState } from "react";

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;

  return (
    <section className="py-24 bg-white relative overflow-hidden " id="testimonio">
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-red-500 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-red-500 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-8">
          <h2 className=" font-druk text-3xl md:text-4xl font-bold">
            {" "}
            El mejor lugar para degustar en familia y amigos!{" "}
          </h2>
          <p className="text-gray-600">
            Es el mejor lugar para los amigos y en familia, la comida es
            excelente y nos hacen repetir y la atención es muy buena también.
          </p>
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentSlide(Math.max(1, currentSlide - 1))}
              className="p-2"
            >
              ←
            </button>
            <span className="text-sm text-gray-500">
              {currentSlide} / {totalSlides}
            </span>
            <button
              onClick={() =>
                setCurrentSlide(Math.min(totalSlides, currentSlide + 1))
              }
              className="p-2"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
