import { useAuthContext } from './useAuthContext'

//creating a custom useLogout hook with three parameters.


export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        //removes user from local browser storage
        localStorage.removeItem('user')

        //dispatching logout action
        dispatch({ type: 'LOGOUT' })
    }
    return { logout }
}