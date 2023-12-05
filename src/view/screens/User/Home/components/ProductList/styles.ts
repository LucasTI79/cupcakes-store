import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  gap: 16px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
`;

export const ProductListTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
