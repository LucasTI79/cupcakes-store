import { ShoppingCart } from 'lucide-react-native';
import React from 'react';

import { useCart } from '@hooks/useCart';
import theme from '@theme/index';

import { CartSpan, Container, Quantity } from './styles';
import { useCartIconController } from './useCartIconController';

export function CartIcon() {
  const { goToCart } = useCartIconController();
  const { items } = useCart();
  const itemsQuantity = items.length;
  return (
    <Container onPress={goToCart}>
      {itemsQuantity > 0 && (
        <CartSpan>
          <Quantity>{itemsQuantity}</Quantity>
        </CartSpan>
      )}
      <ShoppingCart color={theme.COLORS.PRIMARY} />
    </Container>
  );
}
