import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 8px;
  margin: 8px 0px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
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
  align-items: flex-start;
  width: 100%;
  flex: 1;
  gap: 4px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Weight = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;
