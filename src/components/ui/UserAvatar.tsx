import { UserGreeting } from '../config/types'
import React from 'react'

type UserAvatarProps = {
    user: UserGreeting
}

function UserAvatar(props: UserAvatarProps) {

    const { user } = props

    return (
        <div className='border-2 border-red-600'>
            <img src={user.photo} alt="Avatar" />
            <p>{user.username}</p>
        </div>
    )
}

export default UserAvatar