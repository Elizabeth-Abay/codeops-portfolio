import { createContext, useContext, useReducer, useMemo } from 'react';
import { cartReducer, initialCartState } from './cartReducer';

// 1. Create Context
const CartContext = createContext();

// 2. Create Provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Calculate total price based on cart items
  const total = useMemo(() => {
    return state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [state.items]);

  // Memoize provider value so consumer components don't re-render unnecessarily
  const value = useMemo(
    () => ({
      items: state.items,
      dispatch,
      total,
    }),
    [state.items, total]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Custom Hook to consume Context safely
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}