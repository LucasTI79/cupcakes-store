import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '@hooks/useAuth';

import { RegisterSchema, RegisterSchemaType } from './schema';

export function useRegisterController() {
  const { handleRegister, handleRegisterAdmin } = useAuth();
  const [registerErrorMessage, setRegisterErrorMessage] = useState<
    string | null
  >(null);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const navigate = useNavigation();

  function handleNavigateToLogin() {
    navigate.navigate('login');
  }

  const methods = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onChange',
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
      const { email, password, fullname, isAdmin } = data;

      const handler = isAdmin ? handleRegisterAdmin : handleRegister;

      handler(email, password, fullname)
        .catch((error) => {
          setRegisterErrorMessage(error.message);
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
      registerErrorMessage,
    },
    navigate: {
      navigate,
      handleNavigateToLogin,
    },
  };
}
