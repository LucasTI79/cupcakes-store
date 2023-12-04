import { useCart } from '@hooks/useCart';

export function useCartCardController() {
  const { addCartItem, decreaseCartItem, getItemQuantity } = useCart();
  return { addCartItem, decreaseCartItem, getItemQuantity };
}
