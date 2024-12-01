import { useSelector } from 'react-redux';
import { db } from '../db/db';
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';

const useAddtoDb = (data)=>{
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const user = useSelector(state=> state.userReducer.user);

    const addToDb = async(menuNew, id)=>{
        setError(null);
        setLoading(true);
        try{
            if(user){
                const docRef = doc(db, 'restaurants', id);
                await updateDoc(docRef, {menu:menuNew});
            }
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }

    }
    return{ loading, error, addToDb }
}
export default useAddtoDb