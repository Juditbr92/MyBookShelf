import Navbar from "./navbar"

type sidebarProps = {
    isSidebarOpen: boolean;
}

function Sidebar ( {isSidebarOpen}: sidebarProps) {
    return (
        <div className="absolute h-auto w-auto bg-custom-bg border-2 border-emerald-100 rounded right-0 top-0 mt-20 p-10 z-50">
            <Navbar isSidebarOpen={isSidebarOpen}/>
        </div>
    )
}

export default Sidebar