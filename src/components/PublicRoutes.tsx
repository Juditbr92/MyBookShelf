import { Outlet, Navigate } from 'react-router-dom'

function PublicRoutes() {

    const user = {}

    return (
        <div>
            {!user && <Outlet />}
            {user && <Navigate to='/' />}
        </div>
    )
}

export default PublicRoutes
