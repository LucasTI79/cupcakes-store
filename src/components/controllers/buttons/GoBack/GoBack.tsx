import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';

import theme from '@theme/index';

import { Container } from './styles';

export function GoBack({ ...rest }: Readonly<TouchableOpacityProps>) {
  return (
    <Container {...rest}>
      <ChevronLeft color={theme.COLORS.PRIMARY} />
      <Text style={{ color: theme.COLORS.PRIMARY }}>Voltar</Text>
    </Container>
  );
}
