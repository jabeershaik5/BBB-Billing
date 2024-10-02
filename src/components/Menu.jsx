import React from 'react';
import MenuCard from './MenuCard';

function Menu() {
  return (
    <div className='menu'>
      <MenuCard item={'one'} />
      <MenuCard item={'two'} />
      <MenuCard item={'three'} />
      <MenuCard item={'four'} />
      <MenuCard item={'five'} />
      <MenuCard item={'six'} />
    </div>
  )
}

export default Menu