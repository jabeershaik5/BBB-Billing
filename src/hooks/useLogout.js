import React from "react";

import { useState } from "react";

export const useLogout = () =>{
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const logout = async()=>{
        setIsPending(true);

        try{

        }catch(err){
            setError(err.message);
            setIsPending(false);
        }

    }
}