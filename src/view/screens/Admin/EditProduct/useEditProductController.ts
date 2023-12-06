import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '@hooks/useAuth';
import { useProduct } from '@hooks/useProduct';
import { ProductFirebaseService } from '@services/products/product-firebase.service';

import { EditProductSchema, EditProductType } from './schema';

export function useEditProductController() {
  const { productToBeUpdated } = useProduct();
  const navigate = useNavigation();
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const methods = useForm<EditProductType>({
    resolver: zodResolver(EditProductSchema),

    defaultValues: {
      productId: productToBeUpdated?.id,
      name: productToBeUpdated?.name,
      description: productToBeUpdated?.description,
      price: String(productToBeUpdated?.price ?? 0),
      weight: String(productToBeUpdated?.weight ?? 0),
      active: !!productToBeUpdated?.active,
      image: productToBeUpdated?.image ?? undefined,
    },
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
        await productService.update(data.productId, {
          name: data.name,
          description: data.description,
          price: Number(data.price),
          weight: Number(data.weight),
          active: !!data.active,
          image: data.image,
          userId: user!.uid!,
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
      productToBeUpdated,
    },
  };
}
