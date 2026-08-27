import './Dish.css';
import PropTypes from 'prop-types';


function DishCard({ dish}){
    // set up default values for spicy
    let { name , category , price , spicy = false } = dish

    return (
        <section className='dishCard'>
            <strong>{name}</strong>
            <strong>{price}</strong>
            <strong>{category}</strong>
            {spicy && <strong>Spicy</strong>} 
            {/* better way of conditional rendering */}
        </section>
    )
}

// dish
// setting up props
DishCard.propTypes = {
    name : PropTypes.string.isRequired, 
    category : PropTypes.string.isRequired , 
    price  : PropTypes.number.isRequired, 
    spicy : PropTypes.bool
}

export default DishCard;