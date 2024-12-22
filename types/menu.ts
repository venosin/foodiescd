// export interface MenuItem {
//     id: string
//     title: string
//     description: string
//     price: number
//     image: string
//     category: 'Todos' | 'Las tradicionales' | 'Recomendaciones' | 'Para compartir'
//   }
 
export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}  