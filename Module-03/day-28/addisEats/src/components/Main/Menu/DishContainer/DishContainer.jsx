import './DishContainer.css';
import DishCard from '../dish/Dish';
import PropTypes from 'prop-types';

function DishContainer({ seenItems }) {
  return (
    <section className="dishContainer">
      {seenItems.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </section>
  );
}

DishContainer.propTypes = {
  seenItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      spicy: PropTypes.bool,
    })
  ).isRequired,
};

export default DishContainer;