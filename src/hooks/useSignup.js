import { useState } from 'react';
import { auth } from '../db/db';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useDispatch } from 'react-redux';

export const useSignup = ()=>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const signup = async(email, password)=>{

        setLoading(true);
        setError(null);
        try{
            const userCreds = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCreds.user;
            dispatch({type:"LOG_USER", payload:user});

        }catch(err){
            setError(err.message)
            setLoading(false);
        }
        finally{
            setLoading(false);
        }
    
    };
    
    return{ signup, error, loading, setError }
};