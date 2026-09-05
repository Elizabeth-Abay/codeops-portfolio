import './menu.css';
import DishContainer from './DishContainer/DishContainer';
import SearchBar from './SearchBar/SearchBar';
import TotalContainer from './TotalContainer/TotalContainer';
import DeliveryForm from './DeliveryForm/DeliveryForm';
import { useEffect, useState } from 'react';
import apiRequester from '../../../api';


// the aim is to have loading , error and loaded states


function Menu() {
  // console.log('Hello Hello Hkjrhs')
  let [category, setCategory] = useState('All');
  let [total, setTotal] = useState(0);
  // Track whether to show menu or delivery view
  let [view, setView] = useState('menu');

  let [menu , setMenu] = useState([]); // will store everything in here
  let [loading , setLoading] = useState('loading');



  // Render Delivery Form when view state changes
  if (view === 'delivery') {
    return <DeliveryForm onBack={() => setView('menu')} total={total} />;
  }

  // then have the loading state in here
  useEffect(() =>{
      async function loader(){
        const controller = new AbortController();

        try{
          setLoading('loading')

          
          let response = await apiRequester(controller.signal)

          setLoading('ready')
          setMenu(response);

          return () => {
            controller.abort();
          };
          
        } catch(e){
          if (e.name === 'AbortError') return;
          console.log(`Error while fetching ${e.message}`);
          setLoading('error')
        }
    } 
    loader();
  }
  ,
    []
  );


  // when the dependency changes
  useEffect( () => {
    const controller = new AbortController();

    async function loader(){
      // whenever the category changes filter it and update the menu
      try{
        let response = await apiRequester(controller.signal);

        setLoading('ready');
        
        // filter the things accordingly


        let final = category === 'All' ?
        response 
        :
        response.filter(item => item.category === category);

        setMenu(final);

        return () => {
          controller.abort();
        };
      }catch(err){
        if (e.name === 'AbortError') return;
        console.log(`Error while fetching ${e.message}`);
        setLoading('error')
      }


    } 
    loader();
  }
  , [category])


  if (loading === 'loading') return <p>Loading the menus</p>

  if (loading === 'error'){
    console.error('Error happmws')
    return <p>Error loading menu</p>
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
      <DishContainer seenItems={menu} updateTotal={setTotal} />
    </section>
  );
}

export default Menu;