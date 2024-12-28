import React, { createContext, ReactNode, useState } from 'react'
import { UpdateUser, User } from '../config/types';


type UserContextType = {
        user: User | null,
        logIn?: (user: User | UpdateUser) => void, 
        logOut?: () => void
}

type UserProviderProps = {
    children: ReactNode
}

const UserContext = createContext<UserContextType>({user: null});



function UserProvider(props: UserProviderProps) {
    const { children } = props

    const [user, setUser] = useState<User | null>(() => {

        // Aqui hay que meter el user con el que hacemos LogIn
        //Aquí metemos todo el código de lo que queremos que salga según iniciamos la app
        const userLocalStorage = localStorage.getItem('user')

        // Esto me hace que si hay algo en el userLocalStorage me lo retorne, y si no hay nada me traiga null. 
        return userLocalStorage ? JSON.parse(userLocalStorage) : null
    })

    function logIn (user:User) {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('user_id', JSON.stringify(user.user_id));
    }

    function logOut (){
        setUser(null)
        localStorage.removeItem('user')
    }

    return (
        <UserContext.Provider value = {{user, logIn, logOut}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

export { UserContext }


