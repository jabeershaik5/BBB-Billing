import React, { useState } from 'react'
import './css/auth.css';

import { useRef } from 'react';

const FormComp = ({type, hook}) => {

    //keeping track of the input values
    const email = useRef(null);
    const pwd = useRef(null);
    
    const [validation, setValidation] = useState(true);

    const {func, error, loading, setError} = hook;
    

    //validating the user credentials

    const validateCreds = (creds)=>{
        for(let element of creds) {
            if(element.trim().length<=0){
                return false
            }
        };
        return true;
    }
    //logging the current input value and emptying after.
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        const emailId = email.current.value;
        const pswd = pwd.current.value;

        const creds = [emailId, pswd];
        if(validateCreds(creds)){
            func(emailId, pswd);
            setValidation(true);
            return
        }
        email.current.value = '';
        pwd.current.value = '';
        setValidation(false);   
   }

    return (

        //form takes a type attribute to mention it as headline ex: LOGIN and SIGNUP
       <form action="" className='form' onSubmit={handleSubmit}>
            <div className="form-type">{type}</div>
            <div className="form-input">
                <input type="text" placeholder='Enter Email' ref={email} className='input' />
                <input type="password" placeholder='Enter Password' ref={pwd} className='input' />
            </div>
            {error && <p className="error-message">{error}</p>}
            <p className='loading-message'>{loading&&'Loading...'}</p>
            {
            !validation&&<div className="error-message">Enter valid credentials</div>
            }
            <button className='submit-btn' type='submit'>{type}</button>
        </form>
    )
}

export default FormComp