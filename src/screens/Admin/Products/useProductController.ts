import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

import { useAuth } from '@hooks/useAuth';
import { useCart } from '@hooks/useCart';
import { ProductFirebaseService } from '@services/products/product-firebase.service';

export function useProductController() {
  const { handleSignOut, user } = useAuth();
  const { items } = useCart();
  const navigate = useNavigation();

  const productFirebaseService = new ProductFirebaseService(user);

  const {
    data = [],
    isLoading = false,
    isError,
    error,
    refetch,
  } = useQuery({
    queryFn() {
      return productFirebaseService.listMyProducts();
    },
    queryKey: ['products'],
  });

  const handleLogout = useCallback(() => {
    handleSignOut();
  }, [handleSignOut]);

  const navigateToCard = () => {
    navigate.navigate('cart');
  };

  const navigateToRegisterProduct = () => {
    navigate.navigate('registerProduct');
  };

  return {
    products: { error, isError, isLoading, data, refetch },
    handleLogout,
    navigate: {
      navigate,
      navigateToCard,
      navigateToRegisterProduct,
    },
    items,
  };
}
