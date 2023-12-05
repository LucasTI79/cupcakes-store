import { createContext, useCallback, useMemo, useState } from 'react';

type ProductContextData = {
  productToBeUpdated: ProductResponse | null;
  selectProductToBeUpdated: (product: ProductResponse) => void;
};

export const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [productToBeUpdated, setProductToBeUpdated] =
    useState<ProductResponse | null>(null);

  const selectProductToBeUpdated = useCallback((product: ProductResponse) => {
    setProductToBeUpdated(product);
  }, []);

  const contextValue = useMemo(
    () => ({
      productToBeUpdated,
      selectProductToBeUpdated,
    }),
    [productToBeUpdated, selectProductToBeUpdated],
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
