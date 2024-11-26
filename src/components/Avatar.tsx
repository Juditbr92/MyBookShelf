import { NavLink } from 'react-router-dom'
import { UserGreeting } from '../config/types'
import React from 'react'

type AvatarProps = {
    user: UserGreeting
}

function Avatar(props: AvatarProps) {

    const { user } = props

    return (
        <div className='flex items-center h-12 w-12 mr-6 gap-2 2xl:mr-10'>
            <img src={user.photo || 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg'} alt="Avatar" className='rounded-full'/>
            <NavLink to="/profile">{user.username}</NavLink>
        </div>
    )
}

export default Avatar