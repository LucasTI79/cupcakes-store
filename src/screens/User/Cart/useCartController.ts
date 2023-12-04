import { useNavigation } from '@react-navigation/native';

import { useCart } from '@hooks/useCart';

export function useCartController() {
  const { addCartItem, items } = useCart();
  const navigate = useNavigation();

  const { goBack } = navigate;

  return { addCartItem, goBack, items };
}
