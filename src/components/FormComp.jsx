import React from 'react'
import './css/auth.css';

import { useRef } from 'react';

const FormComp = ({type, hook}) => {

    //keeping track of the input values
    const email = useRef(null);
    const pwd = useRef(null);

    // const {func, error, isPending} = hook;

    //logging the current input value and emptying after.
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email.current.value);
        console.log(pwd.current.value);
        email.current.value = '';
        pwd.current.value = '';
   }

    return (

        //form takes a type attribute to mention it as headline ex: LOGIN and SIGNUP
        <form action="" className='form' onSubmit={handleSubmit}>
            <div className="form-type">{type}</div>
            <div className="form-input">
                <input type="text" placeholder='Enter Email' ref={email} className='input' />
                <input type="password" placeholder='Enter Password' ref={pwd} className='input' />
            </div>
            <button className='submit-btn' type='submit'>{type}</button>
        </form>
    )
}

export default FormComp