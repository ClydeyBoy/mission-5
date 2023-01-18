import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

//creating a custom useAuthContext hook
export const useAuthContext = () => {
    const context = useContext(AuthContext)

    //throwing error to console if there is no AuthContext
    if(!context) {
        throw Error('useAuthContext must be inside the AuthContextProvider')
    }
    return context
}