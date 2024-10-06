import { auth } from '../db/db';


import { useState } from "react";
import { signOut } from "firebase/auth";

const useLogout = () =>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();

    const logout = async()=>{
        
        setLoading(true);

        try{

            await signOut(auth);
            setUser(null);

        }catch(err){
            setError(err.message);
            setLoading(false);
        }

    }
    return { logout,  user, error, loading}
}
export default useLogout