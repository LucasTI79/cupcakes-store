import { View } from 'lucide-react-native';
import React from 'react';

import { GoBack } from '../../controllers/buttons/GoBack/GoBack';

import { Container } from './styles';
import { HeaderBackProps } from './types';
import { useHeaderBackController } from './useHeaderBackController';

export function HeaderBack({ rightAction }: HeaderBackProps) {
  const { handleBack } = useHeaderBackController();

  if (!rightAction) {
    return (
      <Container>
        <GoBack onPress={handleBack} />
        <View />
      </Container>
    );
  }

  return (
    <Container>
      <GoBack onPress={handleBack} />
      {rightAction}
    </Container>
  );
}
