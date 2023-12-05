import {
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styled from 'styled-components/native';

type ButtonProps = TouchableOpacityProps & {
  isOutline?: boolean;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isOutline }) =>
    isOutline ? 'transparent' : theme.COLORS.PRIMARY};
  border: ${({ theme, isOutline }) =>
    isOutline ? `1px solid ${theme.COLORS.PRIMARY}` : 'none'};
`;

type TitleProps = TextProps & {
  isOutline?: boolean;
};

export const Title = styled.Text<TitleProps>`
  font-size: 14px;
  color: ${({ theme, isOutline }) =>
    isOutline ? theme.COLORS.PRIMARY : theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-weight: bold;
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))``;
