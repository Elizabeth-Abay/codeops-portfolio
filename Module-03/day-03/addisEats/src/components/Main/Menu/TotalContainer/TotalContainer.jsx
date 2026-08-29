import './TotalContainer.css'

function TotalContainer({total}){
    // it will just accept the total value
    return (
        <section className='total-orders'>{total}</section>
    )    
}


export default TotalContainer;