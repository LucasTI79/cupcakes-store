import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

export function GoBack({ ...rest }: Readonly<TouchableOpacityProps>) {
  const { COLORS } = useTheme();
  return (
    <Container {...rest}>
      <ChevronLeft color={COLORS.PRIMARY} />
      <Text style={{ color: COLORS.PRIMARY }}>Voltar</Text>
    </Container>
  );
}
