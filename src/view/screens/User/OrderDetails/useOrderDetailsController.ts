import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { OrderFirebaseService } from '@services/orders/order-firebase.service';

export function useOrderDetailsController() {
  const { user } = useAuth();
  const [isCompleteOrderLoading, setIsCompleteOrderLoading] = useState(false);
  const [isCancelOrderLoading, setIsCancelOrderLoading] = useState(false);
  const orderFirebaseService = new OrderFirebaseService(user);
  const navigate = useNavigation();

  const handleCancelOrder = useCallback(
    async (orderId: string) => {
      setIsCancelOrderLoading(true);
      try {
        await orderFirebaseService.cancelOrder(orderId);
        navigate.navigate('order');
      } catch (error) {
      } finally {
        setIsCancelOrderLoading(false);
      }
    },
    [orderFirebaseService],
  );

  const handleCompleteOrder = useCallback(
    async (orderId: string) => {
      setIsCompleteOrderLoading(true);
      try {
        await orderFirebaseService.completeOrder(orderId);
        navigate.navigate('order');
      } catch (error) {
      } finally {
        setIsCompleteOrderLoading(false);
      }
    },
    [orderFirebaseService],
  );

  return {
    handleCancelOrder,
    handleCompleteOrder,
    isCancelOrderLoading,
    isCompleteOrderLoading,
  };
}
