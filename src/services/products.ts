import { api } from './api';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image?: string | null;
};

export function getProducts() {
  return api.get<Product[]>('/products');
}

export const ProductService = {
  getProducts,
};
