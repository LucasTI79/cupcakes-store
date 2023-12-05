export type ProductItemCart = {
  product: Product & { price: number };
  quantity: number;
};

export type Cart = {
  items: ProductItemCart[];
};
