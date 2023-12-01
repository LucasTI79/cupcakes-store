import React, {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useReducer,
} from 'react';

import { Cart } from './types';

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'DECREASE_QUANTITY'; payload: string };

type CartContextType = {
  state: Cart;
  dispatch: React.Dispatch<CartAction>;
  addCartItem: (product: Product) => void;
  removeCartItem: (itemId: string) => void;
  decreaseCartItem: (itemId: string) => void;
  getCartTotal: number;
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

  const addCartItem = useCallback((product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }, []);

  const decreaseCartItem = useCallback((itemId: string) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: itemId });
  }, []);

  const removeCartItem = useCallback((itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  }, []);

  const getItemQuantity = useCallback(
    (itemId: string) =>
      state.items.find((item) => item.product.id === itemId)?.quantity ?? 0,
    [state],
  );

  const getCartTotal = state.items.reduce(
    (acc, item) => item.product.price * item.quantity,
    0,
  );

  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
      addCartItem,
      removeCartItem,
      getCartTotal,
      getItemQuantity,
      decreaseCartItem,
    }),
    [
      state,
      dispatch,
      addCartItem,
      removeCartItem,
      getCartTotal,
      getItemQuantity,
      decreaseCartItem,
    ],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
