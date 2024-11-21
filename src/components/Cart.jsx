import React, { useEffect, useRef, useState } from 'react';
import './css/home.css';
import './css/print.css';

import { useSelector, useDispatch } from 'react-redux';
import printJS from 'print-js';
import  html2pdf  from 'html2pdf.js';

import TableComp from './TableComp';
import { timeFormater } from '../utils/utils';


const Cart = () => {

  const [total, setTotal] = useState(0);
  const cartItems = useSelector(state=> state.cartReducer.cartItems);
  const dispatch = useDispatch();
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
    dispatch({type:'CLEAR_CART'});
  }

  return (
    <div className='cart'>
      <div className="cart-title">
      <p className=''>CART &#128722;</p>
      <p className='cart-total'>Total: <span className="cart-total-price">{total} R.s</span></p>
      </div>
      <div className="cart-list">
        <TableComp row='cart-row' header='cart-header' settings='settings' />
      </div>
      <div className="checkout-btn-container">
        <button className='checkout-btn' onClick={()=> cartItems.length>0 &&handlePrint()}>{cartItems.length>0 ?'Check Out': 'Add Items'}</button>
      </div>
      {/* hidden reciet to print */}
      <div className="reciept-wrapper">
      <div className='reciept' ref={printThis}>
        <div className="reciept-logo" style={{display:'none'}}>
          <img src="" alt="" />
        </div>
        <div className="receipt-address">
          <p class="company-name">BIG BUCKET BIRYANI</p>
          <div className="">
            <p>Bangla circle Opp Government Junior College</p>
            <p>Rayachoti 516269</p>
            <p>Phone Number: 8885342718</p>
            <p ><span className="rg-no">GSTIN:</span> 37KHZPK8412C1ZR</p>
          </div>
        </div>
        <div className="reciept-body">
            <div className="invoice-data">
              <div className="tax-invoice">Tax-Invoice</div>
              <p>Employee: Kaleem Shaik</p>
              <p>Invoice Number: RCT{Date.now()}</p>
              <p>Date: {timeFormater(new Date())}</p>
            </div>
            <div className="order-data">
              <TableComp row='cart-row-print' header='cart-header' settings='settings-print' />
            </div>
            <div className="total">
              <p>Total: R.s {total}</p>
            </div>
        </div>
        <div className="reciept-footer">
            <p>Developed by Jabeer Shaik</p>
            <p>Contact: 8639998986</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart