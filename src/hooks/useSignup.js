import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../db/db';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { useDispatch } from 'react-redux';

export const useSignup = ()=>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup = async(email, password)=>{

        setLoading(true);
        setError(null);
        try{
            console.log(email);
            const userCreds = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCreds.user;
            console.log(user);
            if(user){
                const restaurantId = user.uid;
                dispatch({type:"LOG_USER", payload:user});
                const userDocRef = doc(db, 'restaurants', restaurantId);
                await setDoc(userDocRef, {admin:false ,menu:[]});
                navigate('/');
            }

        }catch(err){
            setError(err.code);
            setLoading(false);
            return false
        }
        finally{
            setLoading(false);
        }
    
    };
    
    return{ signup, error, loading, setError }
};