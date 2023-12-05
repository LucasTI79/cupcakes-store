import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const TextContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-weight: bold;
`;
