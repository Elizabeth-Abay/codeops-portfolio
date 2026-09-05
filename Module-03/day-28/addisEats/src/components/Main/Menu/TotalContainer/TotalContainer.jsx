import './TotalContainer.css';
import { useCart } from '../../../../../context/CartContext';

function TotalContainer() {
  const { total, items, dispatch } = useCart();

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
  };

  return (
    <section className="total-orders">
      <div>Total: ${total}</div>
      <button 
        className="clear-btn" 
        onClick={handleClear} 
        disabled={items.length === 0}
      >
        Clear Cart
      </button>
    </section>
  );
}

export default TotalContainer;