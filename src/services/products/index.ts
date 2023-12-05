export interface IProductService {
  list(): Promise<ProductResponse[]>;
  listMyProducts(userId: string): Promise<ProductResponse[]>;
  get(productId: string): Promise<ProductResponse | null>;
  save(product: ProductRequest): Promise<void>;
  update(productId: string, product: ProductRequest): Promise<void>;
  deleteProduct(productId: string): Promise<void>;
}
