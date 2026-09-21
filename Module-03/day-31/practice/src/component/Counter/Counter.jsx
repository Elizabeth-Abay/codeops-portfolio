import './Counter.css';
import { useState } from 'react';


function Counter(){
    // u need to initialize in here

    let [count , setCount ] = useState(0);
    // will set up the initial value to be 0
    // hold the value of the counter and a button to update it

    return (
        // <h1>Hello</h1>
        // u can pass the onClick as props ena it is ok
        <section className="container">
            <div className="container-number">{count}</div>

            <button onClick={() => setCount(++count)} className="btn">+</button>
            <button onClick={() => setCount(--count)} className="btn">-</button>
        </section>
    )

}


export default Counter;