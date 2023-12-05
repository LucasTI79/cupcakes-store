import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

import { useCart } from '@hooks/useCart';

const paymentForms = [
  { id: '1', name: 'Crédito', value: 'credit-card' },
  { id: '2', name: 'Débito', value: 'debit' },
  { id: '3', name: 'Pix', value: 'pix' },
  { id: '4', name: 'Dinheiro', value: 'cash' },
];

export function useCheckoutController() {
  const { items, total } = useCart();

  const [selectedPaymentForm, setSelectedPaymentForm] = useState<
    string | undefined
  >(undefined);

  const handleChangePaymentForm = useCallback((paymentFormId: string) => {
    const selectedPaymentFormMatch = paymentForms.find(
      (form) => form.id === paymentFormId,
    );
    setSelectedPaymentForm(selectedPaymentFormMatch?.id);
  }, []);

  const { data = [], isLoading } = useQuery({
    queryFn: async () => {
      await Promise.resolve(setTimeout(() => {}, 1000));
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
