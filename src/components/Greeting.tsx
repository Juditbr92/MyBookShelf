import { UserGreeting } from '../config/types'
import React = require('react')

type AvatarProps = {
    user: UserGreeting
}

function Greeting(props: AvatarProps) {

    const { user } = props

    return (
        <div className='border-2 border-red-600'>
            <img src={user.photo} alt="Avatar" />
            <p>{user.username}</p>
        </div>
    )
}

export default Greeting