import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"


export const PrivateRoute = ({ children }) => {

    //Tomo del Context si está loggeado o no el usuario
    const { logged } = useContext(AuthContext)

    const location = useLocation()
    const {pathname, search} = location

    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)

    return (logged) ? children : <Navigate to='/login'/>
}
