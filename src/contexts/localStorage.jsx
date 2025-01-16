import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LocalStorageContext = createContext();

export const LocalStorageProvider = ({children}) => {


    const [session, setSession] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
        const storeSession = localStorage.getItem('user');
        if(storeSession) {
            setSession(JSON.parse(storeSession));
            console.log(session)
        }
        setLoading(false)
    },[])

    function createSession(newSession) {
        setLoading(true);
        try {
            const userSession = localStorage.setItem('user', JSON.stringify(newSession));
            setSession(userSession);
            setLoading(true);
            
        } catch (error) {
            console.log(error);
            setLoading(true)
        }
    }

    function destroySession() {
        localStorage.removeItem('user');
        setSession(null)
        // setLoading(true)
    }

    
    return (
        <LocalStorageContext.Provider value={{createSession, session, destroySession, loading}}>
            {children}
        </LocalStorageContext.Provider>
    )
}