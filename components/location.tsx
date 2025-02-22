"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// // Configuración del ícono de Leaflet
// import MarkerIcon from "leaflet/dist/images/marker-icon.png";
// import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
});

// Tipos para los datos
interface ApiLocation {
  id: string;
  title: string;
  description: string;
  url: string;
  latitude?: number;
  longitude?: number;
  type: string;
  city?: string;
  department?: string;
  postalCode?: string;
}

interface Branch {
  name: string;
  description: string;
  url: string;
  coordinates: [number, number];
  type: string;
  city?: string;
  department?: string;
  postalCode?: string;
}

// Coordenadas manuales para sucursales faltantes
const fallbackCoordinates: Record<string, [number, number]> = {
  "Sucursal Calle Mirador": [13.709136733393322, -89.24101427976359],
  "Sucursal Escalón": [13.709637455506524, -89.2426835544755],
  "Sucursal Multiplaza": [13.679451559093048, -89.24899081561078],
  "Sucursal Metrosur": [13.705190467308418, -89.21466663558182],
};

// Componente para mover el mapa dinámicamente
function MapMover({ coordinates }: { coordinates: [number, number] }) {
  const map = useMap();
  map.setView(coordinates, 13);
  return null;
}

export function Location() {
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    13.678, -89.254,
  ]);
  const [branches, setBranches] = useState<Branch[]>([]);

  // Fetch datos desde la API y completa con las coordenadas manuales
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await fetch(
          "https://api.foodies.elaniin.dev/locations"
        );
        if (!response.ok) {
          throw new Error("Error al obtener datos de la API");
        }
        const data = await response.json();
        const apiBranches: Branch[] = data.data.map((location: ApiLocation) => {
          const coordinates =
            location.latitude && location.longitude
              ? [location.latitude, location.longitude]
              : fallbackCoordinates[location.title] || [13.678, -89.254]; // Coordenadas predeterminadas
          return {
            name: location.title,
            description: location.description,
            url: location.url,
            coordinates: coordinates as [number, number],
            type: location.type === "takeout" ? "Para Llevar" : "Domicilio",
            city: location.city,
            department: location.department,
            postalCode: location.postalCode,
          };
        });
        setBranches(apiBranches);
      } catch (error) {
        console.error("Error al obtener las sucursales:", error);
      }
    };

    fetchBranches();
  }, []);

  const filteredBranches = branches.filter(
    (branch) =>
      (!serviceFilter || branch.type === serviceFilter) &&
      (branch.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        branch.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
        branch.city?.toLowerCase().includes(searchFilter.toLowerCase()) ||
        branch.department?.toLowerCase().includes(searchFilter.toLowerCase()) ||
        branch.postalCode?.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  return (
    <section className="py-16 bg-gray-50" id="encuentranos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-druk text-3xl sm:text-4xl lg:text-5xl font-bold text-left mb-12">
          Estamos para ti
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 overflow-y-auto max-h-[500px] pr-4">
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Buscar por sucursal, descripción, ciudad, departamento o código postal"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            <div className="flex flex-wrap gap-4">
              <button
                className={`p-3 rounded-lg ${
                  serviceFilter === "Para Llevar"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() =>
                  setServiceFilter(
                    serviceFilter === "Para Llevar" ? null : "Para Llevar"
                  )
                }
              >
                Para Llevar
              </button>
              <button
                className={`p-3 rounded-lg ${
                  serviceFilter === "Domicilio"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() =>
                  setServiceFilter(
                    serviceFilter === "Domicilio" ? null : "Domicilio"
                  )
                }
              >
                Domicilio
              </button>
            </div>
            <div className="space-y-4">
              {filteredBranches.map((branch, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-sm ${
                    hoveredBranch === branch.name ? "ring-2 ring-blue-500" : ""
                  }`}
                  onMouseEnter={() => {
                    setHoveredBranch(branch.name);
                    setMapCenter(branch.coordinates);
                  }}
                  onMouseLeave={() => setHoveredBranch(null)}
                >
                  <h3 className="font-bold">{branch.name}</h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {branch.description}
                    <br />
                    Ciudad: {branch.city || "No disponible"}
                    <br />
                    Departamento: {branch.department || "No disponible"}
                    <br />
                    Código Postal: {branch.postalCode || "No disponible"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
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
                    {branch.description}
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

