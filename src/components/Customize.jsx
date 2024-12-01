import React, { useRef } from "react";
import './css/customize.css';
import './css/cards.css';
import { useDispatch } from "react-redux";
const Customize = () =>{
    const itemName = useRef(null);
    const itemPrice = useRef(null);
    const itemQuantity = useRef(null);
    const dispatch = useDispatch();
    const handleCustomize= (e)=>{
        e.preventDefault();
        const item={
            title:itemName.current.value,
            price:itemPrice.current.value,
            category:1,
            uid:'BBB',
            itemId:Date(),
            quantity:itemQuantity.current.value
        }

        dispatch({type:'ADD_TO_CART', payload:item});
        itemName.current.value ='';
        itemQuantity.current.value ='';
        itemPrice.current.value ='';
    }

    return(
        <main>
            <div className="customize-container">
                <form className='menu-form' onSubmit={handleCustomize}>
                    <p className='menu-form-title'>CUSTOMIZE</p>
                    <div className="form-input">
                        <label htmlFor="itemName">Item Name</label>
                        <input type="text" className="input" id="itemNamne" ref={itemName} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="itemPrice" className='custom-file'>Item Price</label>
                        <input type="number" className="input" id="itemPrice" ref={itemPrice} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="itemQuantity" className='custom-file'>Quantity</label>
                        <input type="number" className="input" id="resId" ref={itemQuantity} />
                    </div>
                    <button className='update-menu-btn'>Add Item</button>
                </form>
            </div>
        </main>
    )
}
export default Customize