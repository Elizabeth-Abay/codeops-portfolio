import './Dish.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
// to collect the number of items


function DishCard({ dish , updateTotal}){
    // set up default values for spicy
    let { name , category , price , spicy = false } = dish
    // setting state
    let [amount , setAmount]  = useState(0);
    // amount is the local state
    // total is the total

    let handleAdd = (e) => {
        console.log('Hekko')
        setAmount(++amount)

        updateTotal( previous => previous += price)
    }

    return (
        <section className='dishCard'>
            <strong>{name}</strong>
            <strong>{price}</strong>
            <strong>{category}</strong>
            {spicy && <strong>Spicy</strong>} 
            {/* better way of conditional rendering */}
            <div className='add-and-its-state'>
                <button className='add-to-cart' onClick={handleAdd}>Add to Cart</button>
                <strong>{amount}</strong>
            </div>
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