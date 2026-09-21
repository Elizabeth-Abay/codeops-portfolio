// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'


// functional component and have got the same name as the file name
// default export - bc if it was named Export export function x - namedExport
function App() {
  // const [count, setCount] = useState(0)
  // use fetching here

  const foodItem = {
    name : 'Shiro',
    price : 400
  }

  let elt = true

  return (
    // wrapped by fragment - bc it needs some closing elt
    <>
      <section>
        {/* this is expression  and logic expression */}
        <h1>{foodItem.name ? 'helo' : 'mpth'}</h1>
        <h1>{foodItem.price}</h1>
      </section>

    </>
  )
}

export default App
// makes it default export
