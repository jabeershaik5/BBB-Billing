import { db } from '../db/db';

import { doc, getDoc } from 'firebase/firestore';

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const useFetch = ()=>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const user = useSelector(state=> state.userReducer.user);

   const fetchData = async()=>{
        setLoading(true);
        setError(null);
        try {
            if(user){
                const restaurantId = user.uid;
                const docRef = doc(db, 'restaurants', restaurantId );
                const restaurantMenu = await getDoc(docRef);
                const resMenu = restaurantMenu.data();
                const menu = resMenu.menu;
                
                if(menu){
                    dispatch({type:'SET_MENU', payload:menu});
                    setLoading(false);
                }
                else{
                    console.log('menu not added');
                }  
            }
            
        } catch (err) {
            setError(err.message);
        }finally{
            setLoading(false);
        }

       
   }
    return {loading, error, fetchData}
}
export default useFetch;