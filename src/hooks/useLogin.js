import { signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../db/db';
import { doc, getDoc } from 'firebase/firestore';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useLogin = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const logIn = async(email, password) =>{

        setLoading(true);
        setError(null);
        try {

            const userCreds = await signInWithEmailAndPassword(auth, email, password);
            const user =  userCreds.user;
            dispatch({type:"LOG_USER", payload:user});

            //fetching the menu data
            if(user){
                const restaurantId = user.uid;
                const docRef = doc(db, 'restaurants', restaurantId );
                const restaurantMenu = await getDoc(docRef);
                const resMenu = restaurantMenu.data();
                const menu = resMenu.menu;
                
                console.log(menu);
                if(menu){
                    dispatch({type:'SET_MENU', payload:menu});
                    console.log('menu added');
                }
                else{
                    console.log('menu not added');
                }  
            }

        } catch (err) {
            setError(err.message);
            setLoading(true);
            return false;
        }finally{
            setLoading(false);
        }
    }
    
    return { loading, error, logIn, setError}
}

export default useLogin