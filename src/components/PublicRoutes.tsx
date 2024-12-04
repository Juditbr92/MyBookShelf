
import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'


function PublicRoutes() {

    const {user} = useContext(UserContext)


    return (
        <div>
            {!user && <Outlet />}
            {user && <Navigate to='/' />}
        </div>
    )
}

export default PublicRoutes
