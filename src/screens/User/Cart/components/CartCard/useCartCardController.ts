import { useNavigation } from '@react-navigation/native';

import { useCart } from '@hooks/useCart';

export function useCartCardController() {
  const { addCartItem, decreaseCartItem, getItemQuantity } = useCart();

  const navigate = useNavigation();

  const goToProductDetails = (product: Product) => {
    navigate.navigate('productDetails', { product });
  };

  return { addCartItem, decreaseCartItem, getItemQuantity, goToProductDetails };
}
