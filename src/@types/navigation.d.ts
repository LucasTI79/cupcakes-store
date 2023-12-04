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
      checkout: undefined;
      profile: undefined;
    }
  }
}
