import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export function useOrderCardController() {
  const navigate = useNavigation();

  const navigateToOrderDetails = useCallback(
    (order: OrderResponse) => {
      navigate.navigate('orderDetails', { order });
    },
    [navigate],
  );

  return { navigateToOrderDetails };
}
