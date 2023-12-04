export interface IProductService {
  list(): Promise<Product[]>;
  listMyProducts(userId: string): Promise<Product[]>;
  get(productId: string): Promise<Product | null>;
  save(product: Product): Promise<void>;
  update(productId: string, product: Product): Promise<void>;
  deleteProduct(productId: string): Promise<void>;
}
