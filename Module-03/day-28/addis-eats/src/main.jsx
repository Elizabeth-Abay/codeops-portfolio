import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// createRoot(document.getElementById('root')).render(
//   <div>
//     <h1>Hello People</h1>
//     <h2>How Are u</h2>
//   </div>

// )