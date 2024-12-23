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
      const filtered = items.filter((item) => item.category.toLowerCase() === category.toLowerCase());
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
        {filteredItems.length === 0 ? (
          <p className="text-center text-gray-500">No se encontraron platillos.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}  

