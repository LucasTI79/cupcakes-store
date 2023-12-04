import { useNavigation } from '@react-navigation/native';

import { useCart } from '@hooks/useCart';

export function useProductDetailsController() {
  const { addCartItem, decreaseCartItem, getItemQuantity } = useCart();
  const navigate = useNavigation();

  const { goBack } = navigate;

  return { addCartItem, decreaseCartItem, getItemQuantity, goBack };
}
