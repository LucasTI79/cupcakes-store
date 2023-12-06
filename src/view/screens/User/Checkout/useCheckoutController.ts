import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '@hooks/useAuth';
import { useCart } from '@hooks/useCart';
import { OrderFirebaseService } from '@services/orders/order-firebase.service';

import { CreateOrderSchema, CreateOrderType } from './schema';

const paymentForms = [
  { id: '1', name: 'Crédito', value: 'credit-card' },
  { id: '2', name: 'Débito', value: 'debit' },
  { id: '3', name: 'Pix', value: 'pix' },
  { id: '4', name: 'Dinheiro', value: 'cash' },
];

export function useCheckoutController() {
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { items, total, clearCart } = useCart();
  const navigate = useNavigation();

  const { data = [], isLoading } = useQuery({
    queryFn: async () => {
      await Promise.resolve(setTimeout(() => {}, 1000));
      return paymentForms;
    },
    queryKey: ['paymentForms'],
  });

  const methods = useForm<CreateOrderType>({
    resolver: zodResolver(CreateOrderSchema),

    defaultValues: {
      buyerId: user?.uid,
      sellerId: items[0]?.product.userId,
      products: items.map((item) => ({
        product: {
          id: item.product.id,
          productRecordId: item.product.productRecordId,
          price: item.product.price,
          userId: item.product.userId,
        },
        quantity: item.quantity,
      })),
      total,
    },
  });

  const {
    control,
    formState: { errors },
    handleSubmit: handleSubmitHook,
    watch,
    reset,
  } = methods;

  const hasPaymentForm = !!watch('paymentMethod');

  const handleSubmit = useCallback(
    handleSubmitHook(async (dataToSave) => {
      try {
        setIsSubmiting(true);
        const orderService = new OrderFirebaseService(user);
        await orderService.save({
          sellerId: dataToSave.products[0].product.userId,
          buyerId: user!.uid,
          paymentMethod: dataToSave.paymentMethod,
          status: dataToSave.status,
          total,
          products: items.map((item) => ({
            product: {
              id: item.product.id,
              productRecordId: item.product.productRecordId,
              price: item.product.price,
              userId: item.product.userId,
            },
            quantity: item.quantity,
          })),
        });
        reset();
        clearCart();
        navigate.navigate('finishOrder');
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsSubmiting(false);
      }
    }),
    [],
  );

  return {
    paymentForms: data,
    isLoading,
    items,
    total,
    form: {
      control,
      methods,
      formErrors: errors,
      handleSubmit,
      isSubmiting,
      errorMessage,
    },
    hasPaymentForm,
  };
}
