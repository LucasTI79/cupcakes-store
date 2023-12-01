import { Controller } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button } from '@components/controllers/buttons/Button';
import { TextInput } from '@components/controllers/inputs/TextInput';
import { ErrorMessage } from '@components/controllers/inputs/TextInput/styles';

import theme from '../../theme';

import { Container, FooterText, FooterView, TextLink } from './styles';
import { useLoginController } from './useLoginController';

export function Login() {
  const {
    form: { control, formErrors, handleSubmit, isSubmiting, loginErrorMessage },
    navigate,
  } = useLoginController();

  function handleNavigateToRegister() {
    navigate.navigate('register');
  }

  function handleNavigateToForgotPassword() {
    navigate.navigate('forgotPassword');
  }

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, width: '100%' }}
      keyboardShouldPersistTaps="always"
    >
      <Container>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#aaaaaa"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              errorMessage={formErrors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholderTextColor="#aaaaaa"
              secureTextEntry
              placeholder="Password"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              errorMessage={formErrors.password?.message}
            />
          )}
        />
        <TextLink
          color={theme.COLORS.SUBTEXT}
          onPress={handleNavigateToForgotPassword}
          style={{ alignSelf: 'flex-end' }}
        >
          Forgot password
        </TextLink>
        <Button
          onPress={() => handleSubmit()}
          title="Login"
          isLoading={isSubmiting}
        />
        {loginErrorMessage && <ErrorMessage>{loginErrorMessage}</ErrorMessage>}
        <FooterView>
          <FooterText>
            {' '}
            Don&apos;t have an account?{' '}
            <TextLink onPress={handleNavigateToRegister}>Sign up</TextLink>
          </FooterText>
        </FooterView>
      </Container>
    </KeyboardAwareScrollView>
  );
}
