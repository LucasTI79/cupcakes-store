import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '@hooks/useAuth';

import { LoginSchema, LoginSchemaType } from './schema';

export function useLoginController() {
  const { handleLogin } = useAuth();
  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
    null,
  );
  const [isSubmiting, setIsSubmiting] = useState(false);
  const navigate = useNavigation();

  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const {
    handleSubmit: handleSubmitHook,
    register,
    formState: { errors },
    control,
  } = methods;

  const handleSubmit = useCallback(
    handleSubmitHook((data) => {
      setIsSubmiting(true);
      const { email, password } = data;
      handleLogin(email, password)
        .then(() => setLoginErrorMessage(null))
        .catch((error) => {
          if (
            [
              'auth/invalid-email',
              'auth/invalid-credential',
              'auth/user-not-found',
              'auth/wrong-password',
            ].includes(error.code)
          ) {
            setLoginErrorMessage('Credeciais inválidas');
          }
        })
        .finally(() => {
          setIsSubmiting(false);
        });
    }),
    [],
  );
  return {
    form: {
      methods,
      handleSubmit,
      isSubmiting,
      register,
      formErrors: errors,
      control,
      loginErrorMessage,
    },
    navigate,
  };
}
