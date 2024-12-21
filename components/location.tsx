"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Configuración del ícono de Leaflet
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: MarkerIcon as unknown as string,
  shadowUrl: MarkerShadow as unknown as string,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
});

const branches = [
  {
    name: "Sucursal San Benito",
    horario: "Abierto de 12:00 md - 9:00 p.m",
    address: "Calle la Reforma #143, Colonia San Benito",
    postalCode: "01101",
    city: "San Salvador",
    department: "San Salvador",
    coordinates: [13.702, -89.221] as [number, number],
  },
  {
    name: "Sucursal Merliot",
    horario: "Abierto de 12:00 md - 9:00 p.m",
    address: "Boulevard Merliot, Santa Tecla",
    postalCode: "01102",
    city: "Santa Tecla",
    department: "La Libertad",
    coordinates: [13.678549, -89.254914] as [number, number],
  },
  {
    name: "Sucursal La Joya",
    horario: "Abierto de 12:00 md - 9:00 p.m",
    address: "Centro Comercial La Joya, Antiguo Cuscatlán",
    postalCode: "01103",
    city: "Antiguo Cuscatlán",
    department: "La Libertad",
    coordinates: [13.657751, -89.27936] as [number, number],
  },
];

// Componente para mover el mapa dinámicamente
function MapMover({ coordinates }: { coordinates: [number, number] }) {
  const map = useMap();
  map.setView(coordinates, 13);
  return null;
}

export function Location() {
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    13.678, -89.254,
  ]);

  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchFilter.toLowerCase()) ||
      branch.postalCode.includes(searchFilter) ||
      branch.city.toLowerCase().includes(searchFilter.toLowerCase()) ||
      branch.department.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <section className="py-24 bg-gray-50" id="encuentranos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-druk text-4xl font-bold text-left mb-12 animate-scale">
          Estamos para ti
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Filtros y listado de sucursales */}
          <div className="space-y-6">
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Buscar por sucursal, dirección, código postal, ciudad o departamento"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            <div className="space-y-4">
              {filteredBranches.map((branch, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-sm ${
                    hoveredBranch === branch.name ? "ring-2 ring-black" : ""
                  }`}
                  onMouseEnter={() => {
                    setHoveredBranch(branch.name);
                    setMapCenter(branch.coordinates);
                  }}
                  onMouseLeave={() => setHoveredBranch(null)}
                >
                  <h3 className="font-bold">{branch.name}</h3>
                  <p className="text-gray-600">
                    {branch.horario}
                    <br />
                    {branch.address}
                    <br />
                    {branch.city}, {branch.department} (CP: {branch.postalCode})
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa interactivo */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <MapContainer
              style={{ height: "100%", width: "100%" }}
              center={mapCenter}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapMover coordinates={mapCenter} />
              {filteredBranches.map((branch, index) => (
                <Marker
                  key={index}
                  position={branch.coordinates}
                  icon={customIcon}
                >
                  <Popup>
                    <b>{branch.name}</b>
                    <br />
                    {branch.horario}
                    <br />
                    {branch.address}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
