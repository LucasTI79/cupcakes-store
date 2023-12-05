import React from 'react';

import { OrderList } from './components/OrderList';
import { Container, Header, Title } from './styles';

export function Order() {
  return (
    <Container>
      <Header>
        <Title>Meus pedidos</Title>
      </Header>
      <OrderList />
    </Container>
  );
}
