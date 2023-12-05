export function createProduct(product: Omit<ProductRequest, 'price'>): Product {
  return {
    name: product.name,
    description: product.description,
    weight: product.weight ?? 0,
    image: product.image ?? null,
    active: !!product.active,
    userId: product.userId,
  };
}
