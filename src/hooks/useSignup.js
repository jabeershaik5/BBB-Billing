import React from 'react';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const useSignup = ()=>{
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async({email, password})=>{

        setIsPending(false);

        try{
            

        }catch(err){
            setError(err.message)
            setIsPending(false);

        }
    };
    
    return{signup, error, isPending}
};