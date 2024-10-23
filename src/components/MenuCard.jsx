import React from 'react';
import './css/cards.css';

import { useSelector, useDispatch } from 'react-redux';

const MenuCard = ({item})=> {


  const dispatch = useDispatch();
  const cartItems = useSelector(state=> state.cartReducer.cartItems);


  // Checks if the item is already present in the cart, 
  // if yes then returns the element if not then returns false
  const checkIfPresent = (currentCart)=>{
    const alreadyAdded = currentCart.find((choice)=> choice.itemId === item.itemId);
    if(alreadyAdded) return alreadyAdded;
    return false;
  }

  //to add the item to cart
  const handleAdd = (item)=>{

    const currentCart = cartItems;
    const present = checkIfPresent(currentCart); //checks if item is already in the cart.

    if(present){
      dispatch({type:'ADD_SAME_ITEM', payload: item.itemId}); //dispatches itemId to the reducer.
      return;
    }
    const updatedItem = {...item, quantity:1};
    dispatch({type:'ADD_TO_CART', payload: updatedItem}); //if its a new item then dispatches the item to be added.
  }

  //function to reduce the quantity of an already added item
  const handleReduce = (item)=>{

    const currentCart = cartItems;
    const presentItem = checkIfPresent(currentCart);

    if(presentItem){
      if(presentItem.quantity<= 1){
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
          <p className='menu-card_item-name'>{item.title}</p>
          <p className='price'><span className='menu-card_price'>Price:</span> {item.price}</p>
        </div>
        <div className="counter">
          <button className='reduce-item' onClick={()=> {handleReduce(item)}}>-</button>
          <span>{
            cartItems.length > 0 &&
             cartItems.map(ele=>{
              if(ele.itemId === item.itemId){
                return ele.quantity;
              }
              return ''
            }) }</span>
          <button className="add-item" onClick={()=> {handleAdd(item)}}>+</button>
        </div>
    </div>
  )
}

export default MenuCard