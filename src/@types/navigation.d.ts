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
      login: undefined;
      register: undefined;
      forgotPassword: undefined;
      cart: undefined;
      productDetails: {
        product: Product;
      };
    }
  }
}
