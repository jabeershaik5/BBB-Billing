import { db } from '../db/db';

import { doc, getDoc } from 'firebase/firestore';

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const useFetch = ()=>{
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const user = useSelector(state=> state.userReducer.user);

   const fetchData = async()=>{
        try {
            if(user){
                const restaurantId = user.uid;
                const docRef = doc(db, 'restaurants', restaurantId );
                const restaurantMenu = await getDoc(docRef);
                const resMenu = restaurantMenu.data();
                const menu = resMenu.menu;
                
                console.log(menu);
                if(menu){
                    dispatch({type:'SET_MENU', payload:menu});
                }
                else{
                    console.log('menu not added');
                }  
            }
            
        } catch (err) {
            setError(err.message);
        }
   }
    return {error, fetchData}
}
export default useFetch;