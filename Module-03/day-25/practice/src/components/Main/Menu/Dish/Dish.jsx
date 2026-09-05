import './Dish.css';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

function DishCard({ dish }) {
    const { name, price, category, spicy = false, currency = 'Etb' } = dish;

    return (
    <Card>
        <h3>{name}</h3>
        <p>{price} {currency}</p>
        <span>{category}</span>
        {/* Explicitly convert to boolean to safely guard non-booleans */}
        {Boolean(spicy) && <span className="badge">Spicy</span>}
    </Card>
    );
}

DishCard.propTypes = {
    dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    spicy: PropTypes.bool,
    currency: PropTypes.string,
    }).isRequired,
};

export default DishCard;