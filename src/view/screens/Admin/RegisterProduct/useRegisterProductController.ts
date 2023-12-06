import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '@hooks/useAuth';
import { ProductFirebaseService } from '@services/products/product-firebase.service';

import { CreateProductSchema, CreateProductType } from './schema';

export function useRegisterProductController() {
  const navigate = useNavigation();
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const methods = useForm<CreateProductType>({
    resolver: zodResolver(CreateProductSchema),
  });

  const {
    control,
    formState: { errors },
    handleSubmit: handleSubmitHook,
    reset,
  } = methods;

  const handleSubmit = useCallback(
    handleSubmitHook(async (data) => {
      try {
        setIsSubmiting(true);
        const productService = new ProductFirebaseService(user);
        await productService.save({
          name: data.name,
          description: data.description,
          price: Number(data.price),
          weight: Number(data.weight),
          active: data.active,
          image: data.image,
          userId: user!.uid,
        });
        reset();
        navigate.navigate('products');
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsSubmiting(false);
      }
    }),
    [],
  );

  return {
    form: {
      control,
      methods,
      formErrors: errors,
      handleSubmit,
      isSubmiting,
      errorMessage,
    },
  };
}
