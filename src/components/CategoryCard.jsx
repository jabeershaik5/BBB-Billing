import React from 'react'
import './css/cards.css';

function CategoryCard({item}) {

const handleCategory = (item)=>{
    console.log(item.id);
    //instead of logging here create a hook that fetches data/menu for the cateogy clicked by the user.
}

  return (
    <div className='category-card' onClick={()=>{handleCategory(item)}}>
        {item.title}
    </div>
  )
}

export default CategoryCard