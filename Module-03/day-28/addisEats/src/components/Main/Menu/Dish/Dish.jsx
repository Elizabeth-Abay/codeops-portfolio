import './Dish.css';
import PropTypes from 'prop-types';
import { useCart } from '../../../../../context/CartContext';

function DishCard({ dish }) {
  const { name, category, price, spicy = false } = dish;
  const { items, dispatch } = useCart();

  // Find the dish's current quantity in the global cart context
  const cartItem = items.find((item) => item.id === dish.id);
  const amount = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', payload: dish });
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: dish.id });
  };

  return (
    <section className="dishCard">
      <strong>{name}</strong>
      <strong>${price}</strong>
      <strong>{category}</strong>
      {spicy && <strong>Spicy</strong>} 
      
      <div className="add-and-its-state">
        <button className="add-to-cart" onClick={handleAdd}>
          Add to Cart
        </button>

        <button 
          className="add-to-cart" 
          onClick={handleRemove} 
          disabled={amount === 0}
        >
          Remove Item
        </button>
        <strong>{amount}</strong>
      </div>
    </section>
  );
}

DishCard.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy: PropTypes.bool,
  }).isRequired,
};

export default DishCard;