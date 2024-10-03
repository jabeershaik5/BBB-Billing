import React from 'react';
import MenuCard from './MenuCard';

function Menu() {

  const menuItems = [
    {
      title:' dum biryani',
      price: 180,
      itemId: 1,
      quantity:0
    },
    {
      title:' dum biryani',
      price: 280,
      itemId: 2
    },
    {
      title:' dum biryani',
      price: 380,
      itemId: 3
    },
    {
      title:' dum biryani',
      price: 480,
      itemId: 4
    },
    {
      title:' dum biryani',
      price: 580,
      itemId: 5
    },
  ]

  return (
    <div className='menu'>
      {
        menuItems.map(item => {
          return <MenuCard key={item.itemId} item={item} />
        })
      }
    </div>
  )
}

export default Menu