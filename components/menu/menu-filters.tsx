"use client";

import { useState } from "react";

interface MenuFiltersProps {
  onSearch: (term: string) => void;
  onFilter: (category: string) => void;
  categories: string[];
}

export function MenuFilters({ onSearch, onFilter, categories }: MenuFiltersProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          <div className="w-full sm:w-auto">
            <input
              type="search"
              placeholder="Busca tu platillo favorito..."
              className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
      
          <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  onFilter(category);
                }}
                className={`font-syneBold whitespace-nowrap px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
