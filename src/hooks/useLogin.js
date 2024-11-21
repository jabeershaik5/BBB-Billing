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

        setError(null);
        try {
            setLoading(true);
            const userCreds = await signInWithEmailAndPassword(auth, email, password);
            
            const user =  userCreds?.user;
            //fetching the menu data
            if(user){
                dispatch({type:"LOG_USER", payload:user});

                const restaurantId = user.uid;

                const docRef = doc(db, 'restaurants', restaurantId );
                const restaurantMenu = await getDoc(docRef);
                console.log(restaurantMenu);
                const resMenu = restaurantMenu.data();
                const menu = resMenu.menu;
                
                if(menu){
                    dispatch({type:'SET_MENU', payload:menu});
                }
                else{
                    console.log('menu not added');
                }  
            }
        } catch (err) {
            setError(err.code);
            setLoading(true);
            return false;
        }finally{
            setLoading(false);       
        }
    }
    return { loading, error, logIn, setError}
}

export default useLogin