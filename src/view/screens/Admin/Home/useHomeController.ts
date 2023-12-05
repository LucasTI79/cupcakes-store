import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@hooks/useAuth';
import { OrderFirebaseService } from '@services/orders/order-firebase.service';

export function useHomeController() {
  const { user } = useAuth();

  const ordersFirebaseService = new OrderFirebaseService(user);

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn() {
      return ordersFirebaseService.listMyOrders();
    },
    queryKey: ['orders'],
  });

  return {
    orders: { data, isLoading, refetch },
  };
}
