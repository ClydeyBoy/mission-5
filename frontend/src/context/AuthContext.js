import { createContext, useReducer, useEffect } from 'react'


//creating a authContext function to provide global authorisation context to the application when a user signs in
//export context for use in other files
export const AuthContext = createContext()


export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return {user: null}
        default:
            return state
    }
}

//this function is exported to the index.js to wrap around the <app/> component and provide global auth context
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        //original state is null. I.e no user has signed in
        user: null
    })
//when the page loads check if there is a user stored in the browser's local storage.
//if there is a user, use the dispatch function to update the user state in the reducer, so that the user is logged into the application.
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])



    console.log('AuthContext state: ', state)

    //context is provided to entire application
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}




