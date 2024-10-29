export interface Product {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  rating: number;
  reviews: string;
  imageUrl: string;
  thumbnail?: string;
  tags: string[]; 
  sku: string; 
  stock: number; 
  availabilityStatus: string; 
  category:string
}
export interface CategoriesProduct {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  rating: number;
  reviews: string;
  imageUrl: string;
  thumbnail?: string;
  tags: string[]; 
  sku: string; 
  stock: number; 
  availabilityStatus: string; 
}
export interface Categories {
  slug: string;
  name: string;
  url: string;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface CategoriesState {
  categories: Categories[];
  loading: boolean;
  error: string | null;
}


