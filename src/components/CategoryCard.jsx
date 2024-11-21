import React from 'react'
import './css/cards.css';


import { useDispatch,useSelector } from 'react-redux';


function CategoryCard({item}) {

  const menu = useSelector(state=> state.dataReducer.menu);
  const dispatch = useDispatch();

  const handleCategory = (id)=>{
    if(!menu || !Array.isArray(menu)){
      alert('No menu to load. Please retry...');
      return
    }
    let curCategory = menu.filter(item=> item.category === id);   
    dispatch({type:'UPDATE_MENU', payload:curCategory});      
  }

  return (
    
    <div className='category-card' onClick={()=>{handleCategory(item.id)}}>
        {item.title}
    </div>
  )
}

export default CategoryCard