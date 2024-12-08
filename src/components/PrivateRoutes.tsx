
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'


function PrivateRoutes() {

    const {user} = useContext(UserContext)

    // Si no hay usuario que me lleve a register:
    
    if(!user) {
        return <Navigate to="/register" />
    }

    // Si hay usiario que me lleve a las rutas protegidas:

    return <Outlet />

}

export default PrivateRoutes
