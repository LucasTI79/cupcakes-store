import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export function useProductCardController() {
  const navigate = useNavigation();

  const navigateToProductDetails = useCallback(
    (product: Product) => {
      navigate.navigate('productDetails', { product });
    },
    [navigate],
  );

  return { navigateToProductDetails };
}
