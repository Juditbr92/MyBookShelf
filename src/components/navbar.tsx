import {NavLink} from 'react-router-dom'
import Avatar from './Avatar.tsx';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider.tsx';
import {motion} from 'framer-motion'


type MenuProps = {
    isSidebarOpen?: boolean;
}

function Navbar (props: MenuProps) {

    const {isSidebarOpen} = props;

    const commonClasses = "gap-10 text-white w-full justify-end items-center mr-20 2xl:gap-12 2xl:text-xl 2xl:mr-20"
    const sidebarClasses = "flex flex-col"
    const headerClasses = "hidden md:flex "
    const classes = `${commonClasses} ${isSidebarOpen ? sidebarClasses : headerClasses}`

    const {user} = useContext(UserContext)



    return (
        <motion.nav  className = {classes}
        >
            {!user && <NavLink className="[&.active]:underline hover:text-black" to="/">Home</NavLink>}
            {user && <NavLink className=" [&.active]:underline hover:text-black" to="/discover">Discover</NavLink>}
            {user && <NavLink className="[&.active]:underline hover:text-black" to="/books">My books</NavLink>}
            {!user && <NavLink className="[&.active]:underline hover:text-black active:text-black" to="/register">Register</NavLink>}
            {!user && <NavLink className=" hover:text-black border-2 p-1 rounded hover:border-black" to="/login">Log in</NavLink>}
            {user && <NavLink className=" [&.active]:underline hover:text-black" to="/addBook">Add book</NavLink>}
            {user && <Avatar  user={user} />}
        </ motion.nav>
    ) 
}

export default Navbar


