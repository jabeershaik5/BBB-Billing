import React from 'react';
import CategoryCard from './CategoryCard';

import { useSelector } from 'react-redux';

function Categories() {
  
  const categories = useSelector(state=> state.dataReducer.categories);
  
  return (
    <div className='categories'>
      <p className='category-heading'>Category</p>
      {categories.map(item => {
        return <CategoryCard key= {item.id} item={item} />
      })
      }
    </div>
  )
}

export default Categories