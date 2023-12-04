import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { CartIcon } from '../../controllers/buttons/Cart/components/CartIcon';

import { Container, Greeting, SubTitle, Title } from './styles';

export function Header() {
  const navigate = useNavigation();

  const handleNavigateToCart = () => {
    navigate.navigate('cart');
  };

  return (
    <Container>
      <Greeting>
        <Title>Cupcakes Store</Title>
        <SubTitle>Delicie-se com o sabor da felicidade!</SubTitle>
      </Greeting>
      <CartIcon onPress={handleNavigateToCart} />
    </Container>
  );
}
