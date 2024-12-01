import React, { useEffect, useRef, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import printJS from 'print-js';
import  html2pdf  from 'html2pdf.js';

import TableComp from './TableComp';
import { timeFormater } from '../utils/utils';

import './css/home.css';
import './css/print.css';

const Cart = () => {

  const [total, setTotal] = useState(0);
  const cartItems = useSelector(state=> state.cartReducer.cartItems);
  const billType = useSelector(state=> state.dataReducer.billType); //kot bill or plain. true for plain.
  const dispatch = useDispatch();
  const printThis = useRef(); //refs to the bill to be printed

  
  useEffect(()=>{
    //calculates total everytime the cart state changes
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
    const element = printThis.current;
    const opt = {
      margin: 0,
      filename: 'BiBucketBill.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 12 },
      jsPDF: {
        unit: 'in',
        format: [3, 7], // Custom size: width = 3 inches, height = 10 inches
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

    setTimeout(() => {
      dispatch({type:'CLEAR_CART'});
    }, 1000); //clears cart at the end
  }
  
  const handleCheckout =(e)=>{
    if(cartItems.length<=0){
      alert('Please add items to the cart...');
      return
    }
    const kot = e.target.classList.contains('kot-btn');
    //checks if bill type is kot

    if(kot){
      dispatch({type:"SET_BILL_TYPE", payload:false})
    }else{
      dispatch({type:"SET_BILL_TYPE", payload:true})
    }
    //add to database
    // updateHistory(cartItems);
    setTimeout(() => {
      handlePrint();
    }, 0); //helps to print only after the redux state is updated for the bill type
  }

  const handleClearCart = ()=>{
    dispatch({type:'CLEAR_CART'});
  }

  return (
    <div className='cart'>
      <div className="cart-title">
      <p className=''>CART &#128722;</p>
      <div className='current-cart-data'>
        <span className='cart-total'>Total: <span className="cart-total-price">
          {total}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 rupee-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </span>
        </span>
        {
          cartItems.length>0 && <button onClick={handleClearCart} className='clear-btn'>Clear Cart</button>
        }
      </div>
      </div>
      <div className="cart-list">
        <TableComp row='cart-row' header='cart-header' settings='settings' />
      </div>
      <div className="checkout-btn-container">
        <button className='checkout-btn' onClick={(e)=>{handleCheckout(e)}}>{cartItems.length>0 ?'Check Out': 'Add Items'}</button>
        <button className='checkout-btn kot-btn' onClick={(e)=>{handleCheckout(e)}}>{cartItems.length>0 ?'KOT Check Out': 'Add Items KOT'}</button>
      </div>
      
      {/* hidden reciet to print */}
      <div className="reciept-wrapper">
      <div className='reciept' ref={printThis}>
        <div className="reciept-logo" style={{display:'none'}}>
          <img src="" alt="" />
        </div>
        <div className="receipt-address">
          <p className="company-name">BIG BUCKET BIRYANI</p>
          <div className="">
            <p>Bangla circle opp Govt. Junior College</p>
            <p>Rayachoti 516269</p>
            <p>Phone Number: 8885342718</p>
            <p><span className="rg-no">GSTIN:</span> 37KHZPK8412C1ZR</p>
          </div>
        </div>
        <div className="reciept-body">
            <div className="invoice-data">
              <div className="tax-invoice">Tax-Invoice</div>
              <p><span className='bolds'>Employee: </span>Kaleem Shaik</p>
              <p><span className="bolds">Invoice Number: </span>RCT{Date.now()}</p>
              <p><span className="bolds">Date: </span>{timeFormater(new Date())}</p>
            </div>
            <div className="order-data">
              {
                billType?
                <TableComp row='cart-row-print' header='cart-header' settings='settings-print' />:
                <TableComp row='cart-row-print' header='cart-header' settings='kot-print' />
              }
            </div>
            <div className="total">
              {billType?
                <span className="reciept-total">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 rupee-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Total: {total}</span>
                </span>:
                <div className='kot-greet'>Thank You</div>
              }
            </div>
        </div>
        <div className="reciept-footer">
            <p>Developed by Jabeer Shaik</p>
            <p>jabeershaik999@gmail.com</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart