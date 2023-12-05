import React, {
  ForwardRefExoticComponent,
  ForwardedRef,
  forwardRef,
} from 'react';
import { TextInput as TextInputNative, TextInputProps } from 'react-native';

import { Container, ErrorMessage, Input } from './styles';

type Props = TextInputProps & {
  errorMessage?: string;
};

function TextInputBase(
  { errorMessage, ...rest }: Props,
  ref: ForwardedRef<TextInputNative>,
) {
  return (
    <Container>
      <Input ref={ref} {...rest} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

export const TextInput: ForwardRefExoticComponent<Props> =
  forwardRef(TextInputBase);
