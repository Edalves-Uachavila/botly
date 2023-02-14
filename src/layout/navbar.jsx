

import "../App.css"
import { NavLinks } from "../components/nav"
import logo from "../img/logo.png"

function Navbar(){
    return(
        <div id="navbar">
            <div id="logo">
                <img src={logo} className = "logo" alt="my logo"/>
            </div>
            <ul>
                <li><NavLinks/></li>
            </ul>
        </div>
    )
}

export default Navbar