"use client";

import { useState, useEffect } from "react";
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

  // Fetch datos desde la API
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
        console.log("Datos obtenidos de la API:", data); // Verificar respuesta
        const apiBranches: Branch[] = data.data.map(
          (location: ApiLocation) => ({
            name: location.title,
            description: location.description,
            url: location.url,
            coordinates: [
              location.latitude || 13.678, // Valor predeterminado si falta
              location.longitude || -89.254,
            ],
            type: location.type === "takeout" ? "Para Llevar" : "Domicilio",
            city: location.city,
            department: location.department,
            postalCode: location.postalCode,
          })
        );
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
              placeholder="Buscar por sucursal, descripción, ciudad, departamento o código postal"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            <div className="flex space-x-4">
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
                    {branch.description}
                    <br />
                    Ciudad: {branch.city || "No disponible"}
                    <br />
                    Departamento: {branch.department || "No disponible"}
                    <br />
                    Código Postal: {branch.postalCode || "No disponible"}
                    <br />
                    <a
                      href={branch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Ver en mapa
                    </a>
                    <br />
                    <span className="font-bold text-blue-500">
                      {branch.type}
                    </span>
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

// "use client";

// import { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Configuración del ícono de Leaflet
// import MarkerIcon from "leaflet/dist/images/marker-icon.png";
// import MarkerShadow from "leaflet/dist/images/marker-shadow.png";

// const customIcon = new L.Icon({
//   iconUrl: MarkerIcon as unknown as string,
//   shadowUrl: MarkerShadow as unknown as string,
//   iconSize: [25, 41],
//   iconAnchor: [12.5, 41],
// });

// const branches = [
//   {
//     name: "Sucursal San Benito",
//     horario: "Abierto de 12:00 md - 9:00 p.m",
//     address: "Calle la Reforma #143, Colonia San Benito",
//     postalCode: "01101",
//     city: "San Salvador",
//     department: "San Salvador",
//     coordinates: [13.702, -89.221] as [number, number],
//     type: "Para Llevar",
//   },
//   {
//     name: "Sucursal Merliot",
//     horario: "Abierto de 12:00 md - 9:00 p.m",
//     address: "Boulevard Merliot, Santa Tecla",
//     postalCode: "01102",
//     city: "Santa Tecla",
//     department: "La Libertad",
//     coordinates: [13.678549, -89.254914] as [number, number],
//     type: "Domicilio",
//   },
//   {
//     name: "Sucursal La Joya",
//     horario: "Abierto de 12:00 md - 9:00 p.m",
//     address: "Centro Comercial La Joya, Antiguo Cuscatlán",
//     postalCode: "01103",
//     city: "Antiguo Cuscatlán",
//     department: "La Libertad",
//     coordinates: [13.657751, -89.27936] as [number, number],
//     type: "Para Llevar",
//   },
// ];

// // Componente para mover el mapa dinámicamente
// function MapMover({ coordinates }: { coordinates: [number, number] }) {
//   const map = useMap();
//   map.setView(coordinates, 13);
//   return null;
// }

// export function Location() {
//   const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
//   const [searchFilter, setSearchFilter] = useState("");
//   const [serviceFilter, setServiceFilter] = useState<string | null>(null);
//   const [mapCenter, setMapCenter] = useState<[number, number]>([
//     13.678, -89.254,
//   ]);

//   const filteredBranches = branches.filter(
//     (branch) =>
//       (!serviceFilter || branch.type === serviceFilter) &&
//       (branch.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
//         branch.address.toLowerCase().includes(searchFilter.toLowerCase()) ||
//         branch.postalCode.includes(searchFilter) ||
//         branch.city.toLowerCase().includes(searchFilter.toLowerCase()) ||
//         branch.department.toLowerCase().includes(searchFilter.toLowerCase()))
//   );

//   return (
//     <section className="py-24 bg-gray-50" id="encuentranos">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="font-druk text-4xl font-bold text-left mb-12 animate-scale">
//           Estamos para ti
//         </h2>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Filtros y listado de sucursales */}
//           <div className="space-y-6">
//             <input
//               type="text"
//               className="w-full p-3 border rounded-lg"
//               placeholder="Buscar por sucursal, dirección, código postal, ciudad o departamento"
//               value={searchFilter}
//               onChange={(e) => setSearchFilter(e.target.value)}
//             />
//             <div className="flex space-x-4">
//               <button
//                 className={`p-3 rounded-lg ${
//                   serviceFilter === "Para Llevar"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//                 onClick={() =>
//                   setServiceFilter(serviceFilter === "Para Llevar" ? null : "Para Llevar")
//                 }
//               >
//                 Para Llevar
//               </button>
//               <button
//                 className={`p-3 rounded-lg ${
//                   serviceFilter === "Domicilio"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//                 onClick={() =>
//                   setServiceFilter(serviceFilter === "Domicilio" ? null : "Domicilio")
//                 }
//               >
//                 Domicilio
//               </button>
//             </div>
//             <div className="space-y-4">
//               {filteredBranches.map((branch, index) => (
//                 <div
//                   key={index}
//                   className={`bg-white p-6 rounded-lg shadow-sm ${
//                     hoveredBranch === branch.name ? "ring-2 ring-black" : ""
//                   }`}
//                   onMouseEnter={() => {
//                     setHoveredBranch(branch.name);
//                     setMapCenter(branch.coordinates);
//                   }}
//                   onMouseLeave={() => setHoveredBranch(null)}
//                 >
//                   <h3 className="font-bold">{branch.name}</h3>
//                   <p className="text-gray-600">
//                     {branch.horario}
//                     <br />
//                     {branch.address}
//                     <br />
//                     {branch.city}, {branch.department} (CP: {branch.postalCode})
//                     <br />
//                     <span className="font-bold text-blue-500">{branch.type}</span>
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mapa interactivo */}
//           <div className="relative h-[600px] rounded-lg overflow-hidden">
//             <MapContainer
//               style={{ height: "100%", width: "100%" }}
//               center={mapCenter}
//               zoom={13}
//               scrollWheelZoom={false}
//             >
//               <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <MapMover coordinates={mapCenter} />
//               {filteredBranches.map((branch, index) => (
//                 <Marker
//                   key={index}
//                   position={branch.coordinates}
//                   icon={customIcon}
//                 >
//                   <Popup>
//                     <b>{branch.name}</b>
//                     <br />
//                     {branch.horario}
//                     <br />
//                     {branch.address}
//                   </Popup>
//                 </Marker>
//               ))}
//             </MapContainer>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
