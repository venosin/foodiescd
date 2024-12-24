"use client";

import { useEffect, useState } from "react";
import { MenuHeader } from "@/components/menu/menu-header";
import { MenuGrid } from "@/components/menu/menu-grid";
import { MenuItem, Category } from "@/types/menu";
import Footer from "@/components/footer";  
import { Nav } from "@/components/nav";


export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>(["Todos"]); // Incluye 'Todos' por defecto.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const dishesResponse = await fetch("https://api.foodies.elaniin.dev/dishes");
        const categoriesResponse = await fetch("https://api.foodies.elaniin.dev/categories");
  
        if (!dishesResponse.ok || !categoriesResponse.ok) {
          throw new Error("Error fetching data");
        }
  
        const dishesData = await dishesResponse.json();
        const categoriesData = await categoriesResponse.json();
  
        // Procesa las categorías
        const validMenuItems = dishesData.data.map((dish:any) => ({
          ...dish,
          category: dish.categories?.[0]?.name || "Sin categoría", // Extrae la primera categoría
        }));
  
        const validCategories = ["Todos", ...categoriesData.data.map((cat:any) => cat.name)];
  
        setMenuItems(validMenuItems);
        setCategories(validCategories);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchMenuData();
  }, []);  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <main>
        <MenuHeader />
        <MenuGrid items={menuItems} categories={categories} />
        <Footer /> 
      </main>
    </>
  );
}
