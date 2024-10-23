import React from 'react';
import MenuCard from './MenuCard';
import { useSelector } from 'react-redux';

function Menu() {


  const menuItems = useSelector(state=> state.dataReducer.menuData);

  return (
    <div className='menu'>
      {
        menuItems? menuItems.map(item => {
          return <MenuCard key={item.title} item={item} />
        }) :
        <div className='category-prompt'>Please select a category!!</div>
      }
    </div>
  )
}

export default Menu