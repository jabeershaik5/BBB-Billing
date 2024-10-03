import React from 'react';
import './css/cards.css';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MenuCard = ({item})=> {

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector(state=> state.cartReducer.cartItems);

  // Checks if the item is already present in the cart, 
  // if yes then returns the element if not then returns false
  const checkIfPresent = (currentCart)=>{
    
    const alreadyAdded = currentCart.find((choice)=> choice.itemId === item.itemId);
    if(alreadyAdded) return alreadyAdded;

    return false;
  }

  const handleAdd = (item)=>{
    setCount(prevCount=> count+1); //increments the count to display.
  
    const currentCart = cartItems;
    const present = checkIfPresent(currentCart); //checks if item is already in the cart.

    if(present){
      dispatch({type:'ADD_SAME_ITEM', payload: item.itemId}); //dispatches itemId to the reducer.
      return;
    }
    const updatedItem = {...item, quantity:1};
    dispatch({type:'ADD_TO_CART', payload: updatedItem}); //if its a new item then dispatches the item to be added.
  }

  const handleReduce = (item)=>{

    // setCount(prevCount=> {
    //   if(prevCount<1){return 0;} //checks if count is less than 0 and if yes then returns 0.

    //   const newCount = prevCount-1; //if count is not less than 0, reduces the count by 1.
    //   return newCount;
    // });

    let newCount = count -1; //if count is not less than 0, reduces the count by 1.
    if(newCount <=0){ //checks if count is less than 0 and if yes then returns 0.
      newCount=0;
    }
    setCount(newCount);
    const currentCart = cartItems;
    const present = checkIfPresent(currentCart);

    if(present){

      if(newCount<=0){
        dispatch({type:'REMOVE_FROM_CART', payload:item});
        return;
      }

      dispatch({type:'REDUCE_ITEM', payload:item.itemId});
      return;
    }
    dispatch({type:'REMOVE_FROM_CART', payload:item});
  }

  return (
    <div className='menu-card'>
        <div className="title-container">
          <p>{item.title}</p>
          <p className='price'>Price: {item.price}</p>
        </div>
        <div className="counter">
          <button className='reduce-item' onClick={()=> {handleReduce(item)}}>-</button>
          <span>{count}</span>
          <button className="add-item" onClick={()=> {handleAdd(item)}}>+</button>
        </div>
    </div>
  )
}

export default MenuCard