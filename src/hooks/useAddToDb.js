import { useSelector } from 'react-redux';
import { db } from '../db/db';
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';

const useAddtoDb = (data)=>{
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const user = useSelector(state=> state.userReducer.user);

    const addToDb = async(menuNew)=>{
        setError(null);
        setLoading(true)

        try{
            if(user){
                const restaurantId = user.uid;
                const docRef = doc(db, 'restaurants', restaurantId);

                await updateDoc(docRef, {menu:menuNew});
            }


        }catch(err){
            console.log(err.message);
            setError(err.message);
        }finally{
            setLoading(false);
        }

    }
    return{ loading, error, addToDb }
}
export default useAddtoDb