import { auth } from '../db/db';

import { useState } from "react";
import { signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useLogout = () =>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = async()=>{
        
        setLoading(true);
        setError(null);

        try{
            await signOut(auth);
            dispatch({type:'LOG_USER_OUT'})
            dispatch({type:'SET_ADMIN', payload:false})

        }catch(err){
            setError(err.message);
            setLoading(false);
        }finally{
            setLoading(false);
            setError(null);
            navigate('/login');
        }

    }
    return { logout, error, loading}
}
export default useLogout