import { ShoppingCart } from 'lucide-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

import { useCart } from '@hooks/useCart';

import { CartSpan, Container, Quantity } from './styles';
import { useCartIconController } from './useCartIconController';

export function CartIcon() {
  const { goToCart } = useCartIconController();
  const { items } = useCart();
  const { COLORS } = useTheme();
  const itemsQuantity = items.length;
  return (
    <Container onPress={goToCart}>
      {itemsQuantity > 0 && (
        <CartSpan>
          <Quantity>{itemsQuantity}</Quantity>
        </CartSpan>
      )}
      <ShoppingCart color={COLORS.PRIMARY} />
    </Container>
  );
}
