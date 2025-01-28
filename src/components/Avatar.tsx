import  { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'


function Avatar() {

    const { user } = useContext(UserContext)    
    const {logOut} = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='flex items-center h-12 w-12 mr-12 gap-12 2xl:mr-16 2xl:gap-18'>
            {user && <img src={user.photo || '/img/person-310799_1280.webp'} alt="Avatar" className='rounded-full'/>}
            <button 
            onClick={toggleDropdown} 
            type="button" 
            className="ml-2 inline-flex w-full justify-center gap-10 text-white align-middle items-center mr-8 2xl:gap-12 2xl:text-xl 2xl:mr-12" 
            id="menu-button" 
            aria-expanded="true" 
            aria-haspopup="true">
                {user && <div className='flex gap-2 items-center mr-8'>{user.username} <IoIosArrowDropdown  /></div>}
                
            </button>
        
        <AnimatePresence>
        {isOpen && (    
                <motion.div 
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                exit= {{opacity: 0}}
                >
                    <div className="absolute right-0 z-10 mt-6 mr-4 w-32 origin-top-right rounded-md bg-emerald-100 shadow-lg ring-1 ring-black/5 focus:outline-none" >
                        <div className="py-1" role="none">
                            <form method="POST" action="#" role="none">
                                <NavLink className="block w-full px-4 py-2 text-left text-sm text-black hover:text-emerald-800" to="/profile">Profile</NavLink>
                                <button onClick={() => {
                                    logOut();
                                    toggleDropdown();
                                    }} type="button" className="block w-full px-4 py-2 text-left text-sm text-black hover:text-red-500">Sign out</button>
                            </form>
                        </div>
                    </div>
                </motion.div> 
        )}
        </AnimatePresence>   
        </div>
    )
}

export default Avatar