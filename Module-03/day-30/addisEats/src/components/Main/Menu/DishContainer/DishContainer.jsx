import './DishContainer.css';
import PropTypes from 'prop-types';
import DishCard from '../Dish/Dish';

function DishContainer({ seenItems , updateTotal }){
    return (
        <section className='dishContainer'>
            {
                seenItems.map((dish) => {
                    // returning dishcard
                    return <DishCard key={dish.id} dish={dish} updateTotal={updateTotal}/>
                    // and react expects keys so that it can track the elements
                    // DishCard will accept an object then props = { key , dish : { name , category , price , spicy}}
                })
            }
        </section>
    )

}

DishContainer.propTypes = {
    seenItems : PropTypes.array.isRequired
}

export default DishContainer;