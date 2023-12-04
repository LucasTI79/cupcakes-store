import { useNavigation } from '@react-navigation/native';

export function useCartIconController() {
  const navigation = useNavigation();

  function goToCart() {
    navigation.navigate('cart');
  }
  return { goToCart };
}
