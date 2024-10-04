import React, { useEffect, useRef, useState } from 'react';
import './css/print.css';


import { useSelector, useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';

const Print = () => {

  const printRef = React.useRef(null);

  const cartItems = useSelector(state=> state.cartReducer.cartItems);
  const printDoc = useSelector(state=> state.cartReducer.printDoc);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:'SET_PRINT_REF', payload:printRef});
  },[]);
  return (
    <div className='reciept' ref={printRef} style={{display:'none'}}>
        <div className="reciept-logo">
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
              <div className="order-body">
                <p>Dum Biryani</p>
                <p>180</p>
                <p>1</p>
                <p>180.00</p>
              </div>
            </div>
            <div className="total">
              <p>Total: R.s 180.00</p>
            </div>
        </div>
        <div className="reciept-footer">
            <p>Developer by Jabeer Shaik</p>
        </div>
    </div>,
    document.body
    
  )
}

export default Print
