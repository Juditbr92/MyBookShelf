import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function Footer () { 
    
    return (
        <footer className="bg-custom-bg h-12 p-4 flex justify-center gap-4 mt-auto">
            <a href="https://x.com/?lang=es&mx=2"><BsTwitterX size={20}/></a>
            <a href="https://www.instagram.com"><FaInstagram size={20}/></a>
            <a href="https://www.facebook.com"><FaFacebook size={20} /></a>
        </footer>
    )
}

export default Footer