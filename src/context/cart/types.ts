export type ProductItemCart = { product: Product; quantity: number };

export type Cart = {
  items: ProductItemCart[];
};
