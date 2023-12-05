import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 32px 0;
  gap: 8px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.COLORS.PRIMARY}; */
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-weight: bold;
`;

export const TextButtonWithImage = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-weight: bold;
`;
