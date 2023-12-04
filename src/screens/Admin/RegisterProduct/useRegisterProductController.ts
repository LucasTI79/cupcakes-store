import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '@hooks/useAuth';
import { ProductFirebaseService } from '@services/products/products';

import { CreateProductSchema, CreateProductType } from './schema';

export function useRegisterProductController() {
  const { getCurrentUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const methods = useForm<CreateProductType>({
    resolver: zodResolver(CreateProductSchema),
    mode: 'onChange',
  });

  const {
    control,
    formState: { errors },
    handleSubmit: handleSubmitHook,
  } = methods;

  const handleSubmit = useCallback(
    handleSubmitHook(async (data) => {
      try {
        setIsSubmiting(true);
        const user = await getCurrentUser();

        const productService = new ProductFirebaseService();
        await productService.save({
          name: data.name,
          description: data.description,
          price: Number(data.price),
          weight: data.weight,
          active: data.active,
          image: data.image,
          userId: user.uid!,
        });
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
