import { useState, useMemo } from 'react';
import './menu.css';
import DishContainer from './DishContainer/DishContainer';
import SearchBar from './SearchBar/SearchBar';
import TotalContainer from './TotalContainer/TotalContainer';
import DeliveryForm from './DeliveryForm/DeliveryForm';
import { useFetch } from '../../../../hooks/useFetch';

function Menu() {
  const [category, setCategory] = useState('All');
  const [view, setView] = useState('menu');

  // Custom hook to fetch menu data (serves from /public/dishes.json)
  const { data: menuData, loading, error } = useFetch('/dishes.json');

  // Memoized dish filtering based on active category
  const filteredMenu = useMemo(() => {
    if (!menuData) return [];
    if (category === 'All') return menuData;
    return menuData.filter((item) => item.category === category);
  }, [menuData, category]);

  if (view === 'delivery') {
    return <DeliveryForm onBack={() => setView('menu')} />;
  }

  if (loading) return <p>Loading the menus...</p>;
  if (error) return <p>Error loading menu: {error}</p>;

  return (
    <section className="menu">
      <div className="header-actions">
        <TotalContainer />
        <button className="done-btn" onClick={() => setView('delivery')}>
          Done
        </button>
      </div>

      <SearchBar selected={category} onSelect={setCategory} />
      <DishContainer seenItems={filteredMenu} />
    </section>
  );
}

export default Menu;