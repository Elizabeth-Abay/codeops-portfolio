import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <section className='main'>
      <CartProvider>
        <App />
      </CartProvider>
    </section>
    
  </StrictMode>,
)
