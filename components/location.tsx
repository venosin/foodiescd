"use client";

import { useState } from "react";
import Image from "next/image";

export function Location() {
  const [deliveryType, setDeliveryType] = useState<"pickup" | "delivery">(
    "pickup"
  );

  return (
    <section className="py-24 bg-gray-50" id="encuentranos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-druk text-4xl font-bold text-center mb-12">
          Estamos para ti
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex rounded-lg overflow-hidden">
              <button
                className={`flex-1 py-3 px-6 text-center ${
                  deliveryType === "pickup"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700"
                } font-syneBold `}
                onClick={() => setDeliveryType("pickup")}
              >
                Para llevar
              </button>
              <button
                className={`flex-1 py-3 px-6 text-center ${
                  deliveryType === "delivery"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700"
                } font-syneBold `}
                onClick={() => setDeliveryType("delivery")}
              >
                Domicilio
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <h3 className="font-bold">Sucursal San Benito</h3>
              <p className="text-gray-600">
                Abierto de 12:00 - 9:00 p.m.
                <br />
                Calle la Reforma #143, Colonia San Benito
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/map.png"
              alt="Mapa de ubicación"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
