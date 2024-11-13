import React, { useEffect } from 'react';
import MenuCard from './MenuCard';
import { useSelector } from 'react-redux';
import  useFetch  from '../hooks/useFetch';

function Menu() {


  const menuItems = useSelector(state=> state.dataReducer.menuData);
  const menu = useSelector(state=> state.dataReducer.menu);
  const { loading, fetchData} = useFetch();

  useEffect(()=>{
    if(!menu){
      fetchData();
    }
  },[menu, fetchData]);
  
  const handleRetry =()=>{
    fetchData();
  }
  return (
    <div className='menu'>
      { menuItems && <div className="category-title">{menuItems[0]?.category<=5&&`${menuItems[0].category} Person`}</div>}
      {loading ? <p className='category-prompt'>Loading...</p>: !menu?
        <div>
          <p className='category-prompt'>Something went wrong. please try again</p>
          <button onClick={handleRetry} className='retry-btn'>Retry</button>
        </div> : 
        <div className='menu-card-container'>
          {
            menuItems?menuItems.map(item=>{
              return <MenuCard key={item.title} item={item} />
            }) :<div className='category-prompt'>Please select a category</div>
          }
        </div>   
        }
    </div>
  )
}

export default Menu
