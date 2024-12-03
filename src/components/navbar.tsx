import {NavLink} from 'react-router-dom'
import Avatar from './Avatar.tsx';


type MenuProps = {
    isSidebarOpen?: boolean;
}

function Navbar (props: MenuProps) {

    const {isSidebarOpen} = props;

    const commonClasses = "gap-10 text-white w-full justify-end items-center mr-8 2xl:gap-12 2xl:text-xl 2xl:mr-12"
    const sidebarClasses = "flex flex-col"
    const headerClasses = "hidden md:flex "
    const classes = `${commonClasses} ${isSidebarOpen ? sidebarClasses : headerClasses}`

    const user = null



    return (
        <nav className = {classes}>
            <NavLink className="[&.active]:underline hover:text-black" to="/">Home</NavLink>
            {user && <NavLink className="[&.active]:underline hover:text-black" to="/books">My books</NavLink>}
            {!user && <NavLink className="[&.active]:underline hover:text-black active:text-black" to="/register">Register</NavLink>}
            {!user && <NavLink className=" hover:text-black border-2 p-1 rounded hover:border-black" to="/login">Log in</NavLink>}
            {user && <NavLink className=" [&.active]:underline hover:text-black" to="/profile">Profile</NavLink>}
            {user && <NavLink className=" [&.active]:underline hover:text-black" to="/addBook">Add book</NavLink>}
            {user && <NavLink className=" [&.active]:underline hover:text-black" to="/editBook">Edit book</NavLink>}
            {user && <Avatar  user={user} />}
        </nav> 
    )
}

export default Navbar


