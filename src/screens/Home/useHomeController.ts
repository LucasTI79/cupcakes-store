import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

import { useAuth } from '@hooks/useAuth';
import { getProducts } from '@services/products';

export function useHomeController() {
  const { handleSignOut } = useAuth();
  const navigate = useNavigation();
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryFn: getProducts,
    queryKey: ['products'],
  });

  const handleLogout = useCallback(() => {
    handleSignOut();
  }, [handleSignOut]);

  const navigateToCard = () => {
    navigate.navigate('cart');
  };

  return {
    products: { error, isError, isLoading, data, refetch },
    handleLogout,
    navigate: {
      navigate,
      navigateToCard,
    },
  };
}
