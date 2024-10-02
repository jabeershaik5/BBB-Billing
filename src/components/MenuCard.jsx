import React from 'react';
import './css/cards.css';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MenuCard = ({item})=> {

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleAdd = (item)=>{
    setCount((count)=> count+1);
    const cartItem = {'title': item};
    dispatch({type:'ADD_TO_CART', payload: cartItem});
  }

  const handleReduce = (item)=>{
    setCount((count)=> count-1);
  }

  return (
    <div className='menu-card'>
        <div className="title-container">{item}</div>
        <div className="counter">
          <button className='reduce-item' onClick={()=> {handleReduce(item)}}>-</button>
          <span>{count}</span>
          <button className="add-item" onClick={()=> {handleAdd(item)}}>+</button>
        </div>
    </div>
  )
}

export default MenuCard