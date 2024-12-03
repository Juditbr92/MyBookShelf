import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import { IoIosArrowDropdown } from "react-icons/io";


function Avatar() {

    const { user } = useContext(UserContext)    
    const {logOut} = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='flex items-center h-12 w-12 mr-12 gap-6 2xl:mr-16 2xl:gap-10'>
            {user && <img src={user.photo} alt="Avatar" className='rounded-full'/>}
            <button 
            onClick={toggleDropdown} 
            type="button" 
            className="ml-2 inline-flex w-full justify-center gap-10 text-white align-middle items-center mr-8 2xl:gap-12 2xl:text-xl 2xl:mr-12" 
            id="menu-button" 
            aria-expanded="true" 
            aria-haspopup="true">
                {user && <div className='flex gap-2 items-center mr-8'>{user.username} <IoIosArrowDropdown  /></div>}
                
            </button>
        
        {isOpen && (
            <div>
                <div className="absolute right-0 z-10 mt-6 mr-4 w-32 origin-top-right rounded-md bg-white hover:bg-red-100 shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="py-1" role="none">
                        <form method="POST" action="#" role="none">
                            <button onClick={() => {
                                logOut();
                                toggleDropdown();
                                }} type="button" className="block w-full px-4 py-2 text-left text-sm text-black hover:text-red-500">Sign out</button>
                        </form>
                    </div>
                </div>
            </div>
        )}   
        </div>
    )
}

export default Avatar