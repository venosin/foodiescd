"use client";

import { useEffect, useState } from "react";
import { MenuHeader } from "@/components/menu/menu-header";
import { MenuGrid } from "@/components/menu/menu-grid";
import { MenuItem, Category } from "@/types/menu";

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>(["Todos"]); // Incluye 'Todos' por defecto.
  const [loading, setLoading] = useState(true);

  // Función de carga de datos
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const dishesResponse = await fetch("https://api.foodies.elaniin.dev/dishes");
        const categoriesResponse = await fetch("https://api.foodies.elaniin.dev/categories");

        if (!dishesResponse.ok || !categoriesResponse.ok) {
          throw new Error("Error fetching data");
        }

        const dishesData: MenuItem[] = await dishesResponse.json();
        const categoriesData: { data: Category[] } = await categoriesResponse.json();

        console.log("Dishes Data:", dishesData); // Logs para validar los datos de la API
        console.log("Categories Data:", categoriesData);

        if (!Array.isArray(categoriesData.data)) {
          throw new Error("Categories data is not an array");
        }

        // Validaciones de los datos antes de establecerlos
        const validMenuItems = Array.isArray(dishesData) ? dishesData : [];
        const validCategories = ["Todos", ...categoriesData.data.map((cat) => cat.name)];

        setMenuItems(validMenuItems); // Guarda los elementos del menú
        setCategories(validCategories); // Guarda las categorías
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false); // Detiene el estado de carga
      }
    };

    fetchMenuData();
  }, []);

  // Renderiza un mensaje de carga
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <MenuHeader />
      <MenuGrid items={menuItems} categories={categories} />
    </main>
  );
}





// "use client"
// import { MenuHeader } from '@/components/menu/menu-header'
// import { MenuGrid } from '@/components/menu/menu-grid'
// import { menuItems } from '@/data/menu-items'

// export default function MenuPage() {
//   return (
//     <main>
//       <MenuHeader />
//       <MenuGrid items={menuItems} />
//     </main>
//   )
// }

