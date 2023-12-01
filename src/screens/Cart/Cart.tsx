import React from 'react';

import { GoBack } from '@components/controllers/buttons/GoBack';

import { Container } from './styles';
import { useCartController } from './useCartController';

export function Cart() {
  const { goBack } = useCartController();
  return (
    <Container>
      <GoBack onPress={goBack} />
    </Container>
  );
}
