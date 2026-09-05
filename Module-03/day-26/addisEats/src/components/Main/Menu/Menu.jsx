import './menu.css';
import DishContainer from './DishContainer/DishContainer';
import SearchBar from './SearchBar/SearchBar';
import TotalContainer from './TotalContainer/TotalContainer';
import DeliveryForm from './DeliveryForm/DeliveryForm';
import { useState } from 'react';

let menu = [
  { "id": 1, "name": "Doro Wat", "category": "Main", "price": 240, "spicy": true },
  { "id": 2, "name": "Shiro", "category": "Vegetarian", "price": 120, "spicy": false },
  { "id": 3, "name": "Kitfo", "category": "Main", "price": 320, "spicy": true },
  { "id": 4, "name": "Tibs", "category": "Main", "price": 280, "spicy": true },
  { "id": 5, "name": "Injera Firfir", "category": "Breakfast", "price": 100, "spicy": true },
  { "id": 6, "name": "Beyaynetu", "category": "Vegetarian", "price": 150, "spicy": false },
  { "id": 7, "name": "Misir Wat", "category": "Vegetarian", "price": 110, "spicy": true },
  { "id": 8, "name": "Gomen", "category": "Vegetarian", "price": 90, "spicy": false },
  { "id": 9, "name": "Atkilt Wot", "category": "Vegetarian", "price": 100, "spicy": false },
  { "id": 10, "name": "Derek Tibs", "category": "Main", "price": 310, "spicy": true },
  { "id": 11, "name": "Key Wat", "category": "Main", "price": 220, "spicy": true },
  { "id": 12, "name": "Alicha Wat", "category": "Main", "price": 210, "spicy": false },
  { "id": 13, "name": "Bozena Shiro", "category": "Main", "price": 180, "spicy": true },
  { "id": 14, "name": "Ayibe", "category": "Side", "price": 70, "spicy": false },
  { "id": 15, "name": "Kocho", "category": "Side", "price": 60, "spicy": false },
  { "id": 16, "name": "Enkulal Firfir", "category": "Breakfast", "price": 110, "spicy": true },
  { "id": 17, "name": "Fuul", "category": "Breakfast", "price": 90, "spicy": true },
  { "id": 18, "name": "Genfo", "category": "Breakfast", "price": 130, "spicy": true },
  { "id": 19, "name": "Chechebsa", "category": "Breakfast", "price": 120, "spicy": true },
  { "id": 20, "name": "Kik Alicha", "category": "Vegetarian", "price": 100, "spicy": false }
];

function Menu() {
  let [category, setCategory] = useState('All');
  let [total, setTotal] = useState(0);
  // Track whether to show menu or delivery view
  let [view, setView] = useState('menu');

  let shown = (category === 'All') 
    ? menu 
    : menu.filter(item => item.category === category);

  // Render Delivery Form when view state changes
  if (view === 'delivery') {
    return <DeliveryForm onBack={() => setView('menu')} total={total} />;
  }

  return (
    <section className='menu'>
      <div className="header-actions">
        <TotalContainer total={total} />
        
        {/* Done Button to switch view */}
        <button 
          className="done-btn" 
          onClick={() => setView('delivery')}
        >
          Done
        </button>
      </div>

      <SearchBar selected={category} onSelect={setCategory} />
      <DishContainer seenItems={shown} updateTotal={setTotal} />
    </section>
  );
}

export default Menu;