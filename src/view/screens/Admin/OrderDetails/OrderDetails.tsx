import { FlatList } from 'react-native-gesture-handler';

import { Button, ButtonOutline } from '@components/controllers/buttons/Button';
import { HeaderBack } from '@components/layout/HeaderBack';
import { currencyFormat } from '@utils/currencyFormat';

import React from 'react';
import { ProductItemInfo } from './components/ProductItemInfo';
import {
  Container,
  OrderInfoContainer,
  ProductsInfoContainer,
  ProductsInfoTitle,
  SubTitle,
  Title,
} from './styles';
import { useOrderDetailsController } from './useOrderDetailsController';

type OrderDetailsProps = {
  route: {
    params: {
      order: OrderResponse;
    };
  };
};

export function OrderDetails({
  route: {
    params: { order },
  },
}: OrderDetailsProps) {
  const {
    handleCancelOrder,
    handleCompleteOrder,
    isCancelOrderLoading,
    isCompleteOrderLoading,
  } = useOrderDetailsController();
  return (
    <Container>
      <HeaderBack />
      <OrderInfoContainer>
        <Title>
          Cliente: <SubTitle>{order.buyerName}</SubTitle>
        </Title>
        <Title>
          Forma de pagamento: <SubTitle>{order.paymentMethod}</SubTitle>
        </Title>
        <Title>
          Valor: <SubTitle>{currencyFormat(order.total)}</SubTitle>
        </Title>
        <Title>
          Status: <SubTitle>{order.status}</SubTitle>
        </Title>
      </OrderInfoContainer>
      <ProductsInfoContainer>
        <ProductsInfoTitle>Informações do pedido</ProductsInfoTitle>
        <FlatList
          data={order.products}
          keyExtractor={(item: OrderResponse['products'][0]) =>
            item.product.id!
          }
          renderItem={({ item }) => (
            <ProductItemInfo
              productName={item.product.name}
              quantity={item.quantity}
              price={item.product.price}
            />
          )}
        />
      </ProductsInfoContainer>
      <ButtonOutline
        onPress={() => handleCancelOrder(order.id)}
        title="Cancelar pedido"
        isLoading={isCancelOrderLoading}
      />
      <Button
        onPress={() => handleCompleteOrder(order.id)}
        title="Completar pedido"
        isLoading={isCompleteOrderLoading}
      />
    </Container>
  );
}
