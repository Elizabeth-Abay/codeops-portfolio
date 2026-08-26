import './Dish.css';


function DishCard({ dish}){
    let { name , category , price , spicy} = dish

    return (
        <section className='dishCard'>
            <strong>{name}</strong>
            <strong>{price}</strong>
            <strong>{category}</strong>
            {spicy ? <strong>Spicy</strong> : ''}
        </section>
    )
}

export default DishCard;