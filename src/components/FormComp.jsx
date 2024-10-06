import React from 'react'
import './css/auth.css';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FormComp = ({type, hook}) => {

    //keeping track of the input values
    const email = useRef(null);
    const pwd = useRef(null);
    const navigate = useNavigate();

    const {func, error, } = hook;
    
    //logging the current input value and emptying after.
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const emailId = email.current.value;
        const pswd = pwd.current.value;
        email.current.value = '';
        pwd.current.value = '';
        func(emailId, pswd);
        navigate('/');
   }

    return (

        //form takes a type attribute to mention it as headline ex: LOGIN and SIGNUP
        <form action="" className='form' onSubmit={handleSubmit}>
            <div className="form-type">{type}</div>
            <div className="form-input">
                <input type="text" placeholder='Enter Email' ref={email} className='input' />
                <input type="password" placeholder='Enter Password' ref={pwd} className='input' />
            </div>
            {error && <p>{error}</p>}
            <button className='submit-btn' type='submit'>{type}</button>
        </form>
    )
}

export default FormComp