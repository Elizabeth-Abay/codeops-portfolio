import './Dish.css';
import PropTypes from 'prop-types';
import { useCart } from '../../context/CartContext'; 

function DishCard({ dish }) {
  const { name, category, price, spicy = false } = dish;
  const { items, dispatch } = useCart();

  // Retrieve current quantity dynamically from cart context
  const cartItem = items.find((item) => item.id === dish.id);
  const amount = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
  dispatch({ type: 'ADD_ITEM', payload: dish });
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