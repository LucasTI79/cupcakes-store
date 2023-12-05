export type ProductItemCart = {
  product: ProductResponse;
  quantity: number;
};

export type Cart = {
  items: ProductItemCart[];
};
