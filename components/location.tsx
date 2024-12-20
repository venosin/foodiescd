"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Configuración del ícono de Leaflet
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: MarkerIcon,
  shadowUrl: MarkerShadow,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
});

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
          {/* Botones para seleccionar tipo de entrega */}
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

            {/* Información de la sucursal */}
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <h3 className="font-bold">Sucursal San Benito</h3>
              <p className="text-gray-600">
                Abierto de 12:00 - 9:00 p.m.
                <br />
                Calle la Reforma #143, Colonia San Benito
              </p>
            </div>
          </div>

          {/* Mapa interactivo */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <MapContainer
              style={{ height: "100%", width: "100%" }}
              center={[13.702, -89.221]} // Coordenadas de ejemplo: San Salvador
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[13.702, -89.221]} // Coordenadas de ejemplo
                icon={customIcon}
              >
                <Popup>
                  <b>Sucursal San Benito</b>
                  <br />
                  Calle la Reforma #143.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
