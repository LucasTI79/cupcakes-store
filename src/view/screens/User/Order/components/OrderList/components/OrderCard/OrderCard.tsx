import React from 'react';

import { currencyFormat } from '@utils/index';

import {
  Container,
  OrderInfo,
  OrderInfoFooter,
  SubTitle,
  Title,
} from './styles';
import { useOrderCardController } from './useOrderCardController';

type OrderCardProps = {
  order: OrderResponse;
};

export function OrderCard({ order }: Readonly<OrderCardProps>) {
  const { navigateToOrderDetails } = useOrderCardController();
  return (
    <Container onPress={() => navigateToOrderDetails(order)}>
      <OrderInfo>
        <Title>
          Vendedor: <SubTitle>{order.sellerName}</SubTitle>
        </Title>
        <Title>
          Forma de pagamento: <SubTitle>{order.paymentMethod}</SubTitle>
        </Title>
        <Title>
          Total: <SubTitle>{currencyFormat(order.total)}</SubTitle>
        </Title>
        <OrderInfoFooter>
          <Title>
            Status: <SubTitle>{order.status}</SubTitle>
          </Title>
        </OrderInfoFooter>
      </OrderInfo>
    </Container>
  );
}
