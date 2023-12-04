import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CartSpan = styled.View`
  width: 16px;
  height: 16px;
  font-size: 8px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -8px -8px 0px 0px;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
`;
