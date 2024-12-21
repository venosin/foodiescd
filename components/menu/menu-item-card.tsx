import Image from 'next/image'
import { MenuItem } from '@/types/menu'

interface MenuItemCardProps {
  item: MenuItem
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{item.category}</span>
          <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

