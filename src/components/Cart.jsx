import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

  const cartItems = useSelector(state=> state.cartReducer.cartItems);
  return (
    <div className='cart'>
      {
          cartItems.map(item=> {
            return <p key={item.title}>{item.title}</p>
          }
        )
      }
    </div>
  )
}

export default Cart