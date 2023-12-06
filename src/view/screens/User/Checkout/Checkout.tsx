import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { FlatList, Text } from 'react-native';
import { useTheme } from 'styled-components/native';

import { RadioGroupInput } from '@components/controllers/inputs/RadioGroupInput';
import { Load } from '@components/controllers/loading/Load';
import { HeaderBack } from '@components/layout/HeaderBack/HeaderBack';
import { ProductItemCart } from '@context/cart/types';
import { currencyFormat } from '@utils/currencyFormat';

import { OrderItemInfo } from './components/OrderItemInfo';
import {
  Container,
  FinishPaymentButton,
  FinishPaymentText,
  Label,
  OrderInfoContainer,
  OrderInfoTitle,
  OrderTotal,
  PaymentFormContainer,
  Title,
} from './styles';
import { useCheckoutController } from './useCheckoutController';

export function Checkout() {
  const { COLORS } = useTheme();
  const {
    paymentForms,
    isLoading,
    items,
    total,
    hasPaymentForm,
    form: { control, formErrors, isSubmiting, errorMessage, handleSubmit },
  } = useCheckoutController();

  const radioButtons = useMemo(
    () =>
      paymentForms.map((paymentForm) => ({
        label: paymentForm.name,
        value: String(paymentForm.id),
        id: String(paymentForm.id),
        color: COLORS.PRIMARY,
      })),
    [paymentForms, COLORS],
  );

  if (isLoading) {
    return (
      <Container>
        <HeaderBack />
        <Title>Checkout</Title>
        <Load />
      </Container>
    );
  }

  return (
    <Container>
      <HeaderBack />
      <Title>Checkout</Title>

      <Label>Selecione a forma de pagamento</Label>
      <PaymentFormContainer>
        <Controller
          control={control}
          name="paymentMethod"
          render={({ field: { onChange } }) => (
            <RadioGroupInput
              radioButtons={radioButtons}
              data={paymentForms}
              onChange={onChange}
              errorMessage={formErrors.paymentMethod?.message}
              containerStyle={{ alignItems: 'flex-start' }}
            />
          )}
        />
      </PaymentFormContainer>

      <OrderInfoContainer>
        <OrderInfoTitle>Informações do pedido</OrderInfoTitle>
        <FlatList
          data={items}
          keyExtractor={(item: ProductItemCart) => item.product.id!}
          renderItem={({ item }) => (
            <OrderItemInfo
              productName={item.product.name}
              quantity={item.quantity}
            />
          )}
        />
      </OrderInfoContainer>
      <OrderTotal>{currencyFormat(total)}</OrderTotal>
      {!hasPaymentForm && <Text>Selecione uma forma de pagamento</Text>}
      <FinishPaymentButton
        disabled={!hasPaymentForm || isSubmiting}
        onPress={handleSubmit}
      >
        <FinishPaymentText>Realizar pagamento</FinishPaymentText>
      </FinishPaymentButton>
      {errorMessage && <Text>{errorMessage}</Text>}
    </Container>
  );
}
