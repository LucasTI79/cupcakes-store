import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  padding: 12px 8px;
  margin: 8px 0px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  gap: 16px;
`;

export const Content = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 16px;
`;

export const ImageContainer = styled.View`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const ProductInfo = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  gap: 4px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Observations = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const QuantityContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const FooterContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
