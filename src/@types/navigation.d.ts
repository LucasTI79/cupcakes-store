export type ProductNavigationProps = {
  id?: string;
};

export type OrderNavigationProps = {
  id: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      homeStack: undefined;
      login: undefined;
      register: undefined;
      forgotPassword: undefined;
      cart: undefined;
      cartStack: undefined;
      productDetails: {
        product: Product;
      };
      orderDetails: {
        order: OrderResponse;
      };
      order: undefined;
      editProduct: undefined;
      products: undefined;
      registerProduct: undefined;
      checkout: undefined;
      profile: undefined;
      finishOrder: undefined;
    }
  }
}
