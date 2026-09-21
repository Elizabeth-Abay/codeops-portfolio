import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { CartProvider } from '../CartProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <section className='main'>
      <CartProvider>
        <App />
      </CartProvider>
      
    </section>
    
  </StrictMode>,
)
