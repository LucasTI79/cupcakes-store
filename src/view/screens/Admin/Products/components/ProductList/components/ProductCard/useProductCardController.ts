import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import { useProduct } from '@hooks/useProduct';

export function useProductCardController() {
  const navigate = useNavigation();
  const { selectProductToBeUpdated } = useProduct();

  const navigateToEditProduct = useCallback(
    (product: ProductResponse) => {
      selectProductToBeUpdated(product);
      navigate.navigate('editProduct');
    },
    [navigate, selectProductToBeUpdated],
  );

  return { navigateToEditProduct };
}
