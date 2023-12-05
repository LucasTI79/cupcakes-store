import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 12px;
  margin: 8px 0px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ImageContainer = styled.View`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const OrderInfo = styled.View`
  align-items: flex-start;
  width: 100%;
  flex: 1;
  gap: 8px;
`;

export const OrderInfoFooter = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 500;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 400;
`;
