import './DishContainer.css';
import DishCard from '../dish/Dish';
import PropTypes from 'prop-types'

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