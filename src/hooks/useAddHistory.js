import { db } from "../db/db";
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useState } from "react";
import { useSelector } from "react-redux";

const useAddHistory = ()=>{
    const [error, setError ] = useState(null);
    const [loading, setLoading] = useState(false);
    const user = useSelector(state=> state.userReducer.user);

    const updateHistory = async(trans)=>{
        setError(null);

        try {
            setLoading(true);
            // if(trans.length>0){
            //     trans = trans.map(item => ({
            //         ...item,
            //         time:Date()
            //     }));
            // };
            console.log(trans);
            const reciept = {
                date:Date(),
                bill:trans
            };
            console.log(reciept);
            const docRef = doc(db, 'restaurants', user.uid);
            await updateDoc(docRef, { history: arrayUnion(reciept)});
        } catch (err) {
            setError(err.code);
        }finally{
            setError(null);
            setLoading(false);
        }
    }
    return { loading, error, updateHistory }
}   
export default useAddHistory
