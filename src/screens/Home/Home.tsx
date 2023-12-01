import React from 'react';

import { Cart } from '@components/controllers/buttons/Cart';
import { Header } from '@components/layout/Header';

import { ProductList } from './components/ProductList';
import { Container } from './styles';
import { useHomeController } from './useHomeController';

export function Home() {
  const {
    navigate: { navigateToCard },
  } = useHomeController();
  return (
    <Container>
      <Header />
      <ProductList />
      <Cart onPress={navigateToCard} />
    </Container>
  );
}
