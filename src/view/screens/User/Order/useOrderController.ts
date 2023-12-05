import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

import { useAuth } from '@hooks/useAuth';
import { OrderFirebaseService } from '@services/orders/order-firebase.service';

export function useOrderController() {
  const { user } = useAuth();
  const orderFirebaseService = new OrderFirebaseService(user);
  const navigate = useNavigation();

  const {
    data = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryFn() {
      return orderFirebaseService.listBuyerOrders();
    },
    queryKey: [`orders${user?.uid}`],
  });

  const navigateToProductList = useCallback(() => {
    navigate.navigate('homeStack');
  }, [navigate]);

  return {
    orders: { error, isError, isLoading, data, refetch },
    navigate: { navigate, navigateToProductList },
  };
}
