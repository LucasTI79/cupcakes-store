import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.Switch`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;
