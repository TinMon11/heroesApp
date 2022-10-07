import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"


export const PrivateRoute = ({ children }) => {

    //Tomo del Context si está loggeado o no el usuario
    const { logged } = useContext(AuthContext)

    return (logged) ? children : <Navigate to='/login' />
}
