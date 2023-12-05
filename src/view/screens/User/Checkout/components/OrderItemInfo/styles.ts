import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  font-weight: medium;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
