import React from 'react';

import './css/home.css';
import './css/print.css';

import { useSelector } from 'react-redux';
const TableComp = ({row,header,settings}) => {

    const cartItems = useSelector(state=> state.cartReducer.cartItems);
  return (
    <table className={`cart-table ${settings}`}>
          <tbody>
            <tr className={`${row} ${header} `}>
              <td className='cart-sno'>S.No</td>
              <td className='cart-item-name'>Item</td>
              <td className='cart-item-quantity'>Qnt.</td>
              <td className='cart-item-price'>Price</td>
              <td className='cart-item-total'>Total</td>
            </tr>
            {
                cartItems.length > 0&&cartItems.map((item,index)=>{
                  return <tr key={item.itemId} className={row}>
                    <td className='cart-sno'>{index+1}</td>
                    <td className='cart-item-name'>{item.title}</td>
                    <td className='cart-item-quantity'>{item.quantity}</td>
                    <td className='cart-item-price'>{item.price}</td>
                    <td className='cart-item-total'>{item.price * item.quantity}</td>
                  </tr>
                })
            }
          </tbody>
        </table>
  )
}

export default TableComp