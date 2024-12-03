import { useState } from "react";
import Logo from "./Logo"
import Navbar from "./navbar"
import Sidebar from "./Sidebar"
import Avatar from "./Avatar"
import { RxHamburgerMenu } from "react-icons/rx";
import { UserGreeting } from "../config/types";

function Header () {

    const [isSidebarOpen, setSidebar] = useState(false)  

    return (
        <header className="flex flex-nowrap bg-custom-bg justify-between">
            <Logo/>         
            <Navbar/> 
            <div className="flex justify-end">
                <button className='flex md:hidden p-4 text-2xl text-white self-center' onClick={() => setSidebar(!isSidebarOpen)}><RxHamburgerMenu/> </button>
                {isSidebarOpen && <Sidebar isSidebarOpen= {isSidebarOpen }/>}
            </div>
            
        </header>
        
    )
}


export default Header