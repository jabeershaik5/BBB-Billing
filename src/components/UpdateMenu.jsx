import React, { useRef } from 'react';
import './css/cards.css'
// import { useSelector } from 'react-redux';

// import useAddToDb from '../hooks/useAddToDb';

const UpdateMenu = () => {
    
    // const {addToDb, loading, error } = useAddToDb();
    const item = useRef(null);
    const price = useRef(null);
    const category = useRef(null);

    // const user = useSelector(state=> state.userReducer.user);

    const handleAddItem = (e)=>{
        e.preventDefault();

        // addToDb(menu); //hook func to add to the database.



        
        //create an object to send to the database.
        // const newItem = {
        //     title: item.current.value,
        //     price: price.current.value,
        //     userId: user.uid,
        //     categoryId:category.current.value,
        //     itemId:Date.now()
        // }
        // item.current.value='';
        // price.current.value='';
        // category.current.value='';

        console.log('added the menu');
    }

  return (
    <div className='update-menu-page' onSubmit={handleAddItem}>
        
        <form action="" className='menu-form'>
            <p className='menu-form-title'>ADD ITEM</p>
            <div className="form-input">
                <label htmlFor="item-name">Item Name :</label>
                <input type="text" className="input" id="item-name" placeholder='Dum Biryani' ref={item} />
            </div>
            <div className="form-input">
                <label htmlFor="item-price">Item Price :</label>
                <input type="number" className="input" id="item-price" placeholder='250' ref={price} />
            </div>
            <div className="form-input">
                <label htmlFor="item-category">category: How many person :</label>
                <input type="number" className="input" id="item-category" placeholder='Enter numbers only... Ex: 1' ref={category} />
            </div>
            <button className='update-menu-btn'>Add Item</button>
        </form>
    </div>
  )
}

export default UpdateMenu