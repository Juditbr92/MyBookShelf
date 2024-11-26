import { useState } from "react";
import Logo from "./Logo"
import Navbar from "./navbar"
import Sidebar from "./Sidebar"
import Avatar from "./Avatar"
import { RxHamburgerMenu } from "react-icons/rx";
import { UserGreeting } from "../config/types";

function Header () {

    const [isSidebarOpen, setSidebar] = useState(false)  

    const loggedUser: UserGreeting = {
        username: "judit",
        photo: "data:image/png;base64,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"
    }

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