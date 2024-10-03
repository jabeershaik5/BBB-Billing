import React, { useEffect, useState } from 'react';
import './css/home.css';

import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

  const [total, setTotal] = useState(0);
  const cartItems = useSelector(state=> state.cartReducer.cartItems);

  useEffect(()=>{
    const cartTotal = (cartItems)=>{
      let newTotal = 0;
      cartItems.map(item=>{
        newTotal+=(item.price*item.quantity)
      });
      setTotal(newTotal);

    }
    cartTotal(cartItems);
  },[cartItems]);

  return (
    <div className='cart'>
      <div className="cart-title">
      <p className=''>CART &#128722;</p>
      <p className='cart-total'>Total: <span className="cart-total-price">{total} R.s</span></p>
      </div>
      <div className="cart-list">
      {
          cartItems.map((item,index)=> {
            return <div key={item.itemId} className='cart-item'>
              <p className='cart-item-name'>{index+1}.{item.title}</p>
              <p> &#10005; {item.quantity} </p>
              <p>Rs. {item.price* item.quantity}</p>
            </div>
          }
        )
      }
      </div>
      <div className="checkout-btn-container">
      {
        cartItems.length > 0 && <button className='checkout-btn'>Check Out</button>
      }
      </div>
    </div>
  )
}

export default Cart