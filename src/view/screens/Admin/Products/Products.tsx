import { PlusIcon } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import { ProductList } from './components/ProductList';
import { Container, Header, Title } from './styles';
import { useProductController } from './useProductController';

export function Products() {
  const {
    navigate: { navigateToRegisterProduct },
  } = useProductController();
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header>
        <Title>Meus produtos</Title>
        <TouchableOpacity onPress={navigateToRegisterProduct}>
          <PlusIcon size={20} color={COLORS.PRIMARY} />
        </TouchableOpacity>
      </Header>
      <ProductList />
    </Container>
  );
}
