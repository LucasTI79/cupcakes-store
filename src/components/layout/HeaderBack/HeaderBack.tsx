import { View } from 'lucide-react-native';
import React from 'react';

import { GoBack } from '../../controllers/buttons/GoBack/GoBack';

import { Container } from './styles';
import { useHeaderBackController } from './useHeaderBackController';

export function HeaderBack() {
  const { handleBack } = useHeaderBackController();
  return (
    <Container>
      <GoBack onPress={handleBack} />
      <View />
    </Container>
  );
}
