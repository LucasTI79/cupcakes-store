import React from 'react';

import { Cart as CartButton } from '@components/controllers/buttons/Cart';
import { Header } from '@components/layout/Header';

import { ProductList } from './components/ProductList';
import { Container } from './styles';
import { useHomeController } from './useHomeController';

export function Home() {
  const {
    navigate: { navigateToCard },
    items,
  } = useHomeController();

  const hasItemsIntoCart = items.length > 0;

  return (
    <Container>
      <Header />
      <ProductList />
      {hasItemsIntoCart && <CartButton onPress={navigateToCard} />}
    </Container>
  );
}
