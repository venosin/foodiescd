import { MenuHeader } from '@/components/menu/menu-header'
import { MenuGrid } from '@/components/menu/menu-grid'
import { menuItems } from '@/data/menu-items'

export default function MenuPage() {
  return (
    <main>
      <MenuHeader />
      <MenuGrid items={menuItems} />
    </main>
  )
}

