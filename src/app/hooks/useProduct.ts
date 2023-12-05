import { useContext } from 'react';

import { ProductContext } from '@context/product';

export function useProduct() {
  return useContext(ProductContext);
}
