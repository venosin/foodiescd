"use client";

import { useState } from "react";
import { MenuItem } from "@/types/menu";
import { MenuFilters } from "./menu-filters";
import { MenuItemCard } from "./menu-item-card";

interface MenuGridProps {
  items: MenuItem[];
  categories: string[]; // Pasar categorías dinámicas.
}

export function MenuGrid({ items, categories }: MenuGridProps) {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (term: string) => {
    const filtered = items.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleFilter = (category: string) => {
    if (category === "Todos") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };

  return (
    <div>
      <MenuFilters
        onSearch={handleSearch}
        onFilter={handleFilter}
        categories={categories}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { MenuItem } from "@/types/menu";
// import { MenuItemCard } from "./menu-item-card";
// import { MenuFilters } from "./menu-filters";
// import { data } from "autoprefixer";

// interface MenuGridProps {
//   items: MenuItem[];
// }

// export function MenuGrid({ items }: MenuGridProps) {
//   const [filteredItems, setFilteredItems] = useState(items);
//   const categories = [
//     "Todos",
//     "Las tradicionales",
//     "Recomendaciones",
//     "Para compartir",
//   ];

//   const handleSearch = (term: string) => {
//     const filtered = items.filter(
//       (item) =>
//         item.title.toLowerCase().includes(term.toLowerCase()) ||
//         item.description.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredItems(filtered);
//   };

//   const handleFilter = (category: string) => {
//     if (category === "Todos") {
//       setFilteredItems(items);
//     } else {
//       const filtered = items.filter((item) => item.category === category);
//       setFilteredItems(filtered);
//     }
//   };
   
//   fetch('https://api.foodies.elaniin.dev/dishes')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Error en la solicitud: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     console.log("", data.title);
//     // Aquí puedes manipular los datos recibidos
//   })
//   .catch(error => {
//     console.error('Hubo un problema con la solicitud Fetch:', error);
//   });


//   return (
//     <div>
//       <MenuFilters
//         onSearch={handleSearch}
//         onFilter={handleFilter}
//         categories={categories}
//       />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredItems.map((item) => (
//             <MenuItemCard key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

