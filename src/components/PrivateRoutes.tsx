
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'


function PrivateRoutes() {

    const {user} = useContext(UserContext)


    return (
        <div>
            {!user && <Navigate to="/" />}
            {user && <Navigate to="/login" />}
        </div>
    )
}

export default PrivateRoutes
