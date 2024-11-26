import { signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../db/db';
import { doc, getDoc } from 'firebase/firestore';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useLogin = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const logIn = async(email, password) =>{

        setError(null);
        try {
            setLoading(true);
            const userCreds = await signInWithEmailAndPassword(auth, email, password);
            
            const user =  userCreds?.user;
            //fetching the menu data
            if(user){
                const restaurantId = user.uid;

                const docRef = doc(db, 'restaurants', restaurantId );
                const restaurantMenu = await getDoc(docRef);
                console.log(restaurantMenu);
                const resMenu = restaurantMenu.data();
                const menu = resMenu.menu;
                const admin = resMenu?.admin || false;

                if(menu){
                    dispatch({type:'SET_ADMIN', payload:admin});
                    dispatch({type:'SET_MENU', payload:menu});
                };
                user.admin = admin;
                dispatch({type:"LOG_USER", payload:user});
            }
        } catch (err) {

            setError(err.code);
            setLoading(true);
            return false;

        }finally{
            setLoading(false);
            navigate('/');      
        }
    }
    return { loading, error, logIn, setError}
}

export default useLogin