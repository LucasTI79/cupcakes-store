import { PlusIcon } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import { OrderList } from './components/OrderList';
import { Container, Header, Title } from './styles';
import { useOrderController } from './useOrderController';

export function Order() {
  const {
    navigate: { navigateToProductList },
  } = useOrderController();
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header>
        <Title>Meus pedidos</Title>
        <TouchableOpacity onPress={navigateToProductList}>
          <PlusIcon size={20} color={COLORS.PRIMARY} />
        </TouchableOpacity>
      </Header>
      <OrderList />
    </Container>
  );
}
