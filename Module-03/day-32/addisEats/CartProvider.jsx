import { cartReducer , initialCartState } from "./cartReducer";
import { createContext, useContext, useReducer, useMemo } from 'react';
import { CartContext} from './context/CartContext'


export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const total = useMemo(() => {
    return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [state.items]);

  const value = useMemo(
    () => ({ items: state.items, dispatch, total }),
    [state.items, total]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}