import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

import { useCart } from '@hooks/useCart';

export function useCheckoutController() {
  const { items, total } = useCart();

  const [selectedPaymentForm, setSelectedPaymentForm] = useState<
    string | undefined
  >(undefined);

  const handleChangePaymentForm = useCallback((paymentFormId: string) => {
    setSelectedPaymentForm(paymentFormId);
  }, []);

  const { data = [], isLoading } = useQuery({
    queryFn: async () => {
      await Promise.resolve(setTimeout(() => {}, 1000));
      const paymentForms = [
        { id: 1, name: 'Crédito' },
        { id: 2, name: 'Débito' },
        { id: 3, name: 'Pix' },
        { id: 4, name: 'Dinheiro' },
      ];
      return paymentForms;
    },
    queryKey: ['paymentForms'],
  });

  return {
    paymentForms: data,
    isLoading,
    selectedPaymentForm,
    handleChangePaymentForm,
    items,
    total,
  };
}
