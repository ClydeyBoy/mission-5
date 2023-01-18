import { useState } from "react";
import { useAuthContext } from './useAuthContext'

//creating a custom useSignup hook with three parameters.
//These are error, isLoading and dispatch

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    //when the user signs in. The function sets isLoading to true and also removes any saved error from a previous sign in.
    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        //post the email and password upon signup to the backend server
        const response = await fetch('http://localhost:4000/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        //if the response is not okay. output an error
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            //if the response is ok, save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //and update auth context
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}