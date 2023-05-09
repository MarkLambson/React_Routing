import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='container'>
            <ul className="navbar bg-dark">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"aboutus"}>About Us</Link></li>
                <li><Link to={"contactus"}>Contact Us</Link></li>
                <li><Link to={"teams"}>Teams</Link></li>
            </ul>
        </div>
    )
}

export default NavBar