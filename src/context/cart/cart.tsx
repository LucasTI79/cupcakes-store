import React, {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useReducer,
} from 'react';

import { Cart, ProductItemCart } from './types';

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product & { price: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'DECREASE_QUANTITY'; payload: string }
  | { type: 'CLEAR_CART'; payload: undefined };

type CartContextType = {
  items: ProductItemCart[];
  dispatch: React.Dispatch<CartAction>;
  addCartItem: (product: Product & { price: number }) => void;
  removeCartItem: (itemId: string) => void;
  decreaseCartItem: (itemId: string) => void;
  clearCart: () => void;
  total: number;
  getItemQuantity: (itemId: string) => number;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
);

const cartReducer = (state: Cart, action: CartAction): Cart => {
  const { payload, type } = action;
  switch (type) {
    case 'ADD_TO_CART':
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.product.id === payload.id,
      );

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state.items];
        updatedCart[existingCartItemIndex].quantity += 1;
        return { items: updatedCart };
      }
      return {
        items: [...state.items, { product: payload, quantity: 1 }],
      };
    case 'REMOVE_FROM_CART':
      const updatedCart = state.items.filter(
        (item) => item.product.id !== payload,
      );
      return { items: updatedCart };
    case 'CLEAR_CART':
      return { items: [] };
    case 'DECREASE_QUANTITY':
      const itemToDecrease = state.items.find(
        (item) => item.product.id === action.payload,
      );

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        const decreasedCart = state.items.map((item) =>
          item.product.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
        return { items: decreasedCart };
      }
      const filteredCart = state.items.filter(
        (item) => item.product.id !== action.payload,
      );
      return { items: filteredCart };

    default:
      return state;
  }
};

export function CartProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addCartItem = useCallback((product: Product & { price: number }) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }, []);

  const decreaseCartItem = useCallback((itemId: string) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: itemId });
  }, []);

  const removeCartItem = useCallback((itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART', payload: undefined });
  }, []);

  const getItemQuantity = useCallback(
    (itemId: string) =>
      state.items.find((item) => item.product.id === itemId)?.quantity ?? 0,
    [state],
  );

  const total = state.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  const contextValue = useMemo(
    () => ({
      items: state.items,
      dispatch,
      addCartItem,
      removeCartItem,
      total,
      getItemQuantity,
      decreaseCartItem,
      clearCart,
    }),
    [
      state.items,
      dispatch,
      addCartItem,
      removeCartItem,
      total,
      getItemQuantity,
      decreaseCartItem,
      clearCart,
    ],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
