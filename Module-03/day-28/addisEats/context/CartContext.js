import { createContext, useContext, useReducer, useMemo } from 'react';
import { cartReducer, initialCartState } from '../cartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  // Provider logic...
}

// THIS IS WHERE useCart IS DEFINED AND EXPORTED
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}


