import React, { useEffect, useRef, useState } from 'react';
import './css/home.css';
import './css/print.css';

import { useSelector } from 'react-redux';
import printJS from 'print-js';
import  html2pdf  from 'html2pdf.js';


const Cart = () => {

  const [total, setTotal] = useState(0);
  const cartItems = useSelector(state=> state.cartReducer.cartItems);
  const printThis = useRef();

  useEffect(()=>{
    const cartTotal = (cartItems)=>{
      let newTotal = 0;
      cartItems.map(item=>{
        return newTotal+=(item.price*item.quantity)
      });
      setTotal(newTotal);

    }
    cartTotal(cartItems);
  },[cartItems]);

  const handlePrint = ()=>{
    
    // printJS('printThis', 'html');
    const element = printThis.current;
    const opt = {
      margin: 0,
      filename: 'download.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: 'in',
        format: [4, 7], // Custom size: width = 3 inches, height = 10 inches
        orientation: 'portrait'
      }
    };
    html2pdf().from(element).set(opt).toPdf().get('pdf').then(pdf=>{
      const blob = pdf.output('blob');

      const url = URL.createObjectURL(blob);
      printJS(url,'pdf');

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 1000);
    });
    console.log('done');
  }

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
        <button className='checkout-btn' onClick={handlePrint}>{cartItems.length>0 ?'Check Out': 'Add Items'}</button>
      </div>
      <div className="reciept-wrapper">
      <div className='reciept' ref={printThis}>
        <div className="reciept-logo" style={{display:'none'}}>
          <img src="" alt="" />
        </div>
        <div className="receipt-address">
          <p>BIG BUCKET BIRYANI</p>
          <div className="">
            <p>Trunk Road Opp to Governement Junior College</p>
            <p>Rayachoti 516269</p>
            <p>Phone Number: 8885342718</p>
            <p ><span className="rg-no">company Registration Number:</span> 37KHZPK8412C1ZR</p>
          </div>
        </div>
        <div className="reciept-body">
            <div className="invoice-data">
              <div className="tax-invoice">Tax-Invoice</div>
              <p>Employee: Kaleem Shaik</p>
              <p>Invoice Number: RCT{Date.now()}</p>
              <p>Date: {Date.now()}</p>
            </div>
            <div className="order-data">
              <div className="order-header">
                <p>ITEM</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>AMOUNT</p>
              </div>
              {
                cartItems.map(item => {
                  return <div className="order-body">
                          <p>{item.title}</p>
                          <p>{item.price}</p>
                          <p>{item.quantity}</p>
                          <p>{item.quantity * item.price}</p>
                        </div>
                })
              }
            </div>
            <div className="total">
              <p>Total: R.s {total}</p>
            </div>
        </div>
        <div className="reciept-footer">
            <p>Developed by Jabeer Shaik</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart