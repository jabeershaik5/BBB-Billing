import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../db/db';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useLogin = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const logIn = async(email, password) =>{

        setLoading(true);

        try {

            const userCreds = await signInWithEmailAndPassword(auth, email, password);
            const user =  userCreds.user;
            dispatch({type:"LOG_USER", payload:user});

        } catch (err) {
            setError(err.message);
            setLoading(true);
            console.log(err);
            return false;
        }
        setLoading(false);
    }
    
    return { loading, error, logIn}
}

export default useLogin