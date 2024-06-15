import { Outlet } from "react-router-dom"
import Header from "./Header"


const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Layout;