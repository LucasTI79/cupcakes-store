import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 8px;
  flex-direction: column;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  padding-left: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_ERROR};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const Input = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SUBTEXT,
}))<TextInputProps>`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
