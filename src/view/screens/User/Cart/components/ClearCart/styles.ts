import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const Text = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-weight: medium;
`;
