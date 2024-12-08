
import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'


function PublicRoutes() {

    const {user} = useContext(UserContext)

     // Si hay usuario autenticado, redirige a /books

    if(user){
        return <Navigate to="/books" />
    }

    return <Outlet />

}

export default PublicRoutes
