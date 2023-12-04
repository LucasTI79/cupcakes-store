import React, { useMemo } from 'react';
import { FlatList, Text } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

import { Load } from '@components/controllers/loading/Load';
import { HeaderBack } from '@components/layout/HeaderBack/HeaderBack';
import theme from '@theme/index';
import { currencyFormat } from '@utils/currencyFormat';

import { ProductItemCart } from '../../../context/cart/types';

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
  const {
    paymentForms,
    isLoading,
    handleChangePaymentForm,
    selectedPaymentForm,
    items,
    total,
  } = useCheckoutController();

  const hasPaymentFormSelected = !!selectedPaymentForm;

  const radioButtons = useMemo(
    () =>
      paymentForms.map((paymentForm) => ({
        label: paymentForm.name,
        value: String(paymentForm.id),
        id: String(paymentForm.id),
        color: theme.COLORS.PRIMARY,
      })),
    [paymentForms],
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
        <RadioGroup
          radioButtons={radioButtons}
          onPress={handleChangePaymentForm}
          selectedId={selectedPaymentForm}
          containerStyle={{ alignItems: 'flex-start' }}
        />
      </PaymentFormContainer>
      <OrderInfoContainer>
        <OrderInfoTitle>Informações do pedido</OrderInfoTitle>
        <FlatList
          data={items}
          keyExtractor={(item: ProductItemCart) => item.id!}
          renderItem={({ item }) => (
            <OrderItemInfo
              productName={item.product.name}
              quantity={item.quantity}
            />
          )}
        />
      </OrderInfoContainer>
      <OrderTotal>{currencyFormat(total)}</OrderTotal>
      {!hasPaymentFormSelected && <Text>Selecione uma forma de pagamento</Text>}
      <FinishPaymentButton disabled={!hasPaymentFormSelected}>
        <FinishPaymentText>Realizar pagamento</FinishPaymentText>
      </FinishPaymentButton>
    </Container>
  );
}
