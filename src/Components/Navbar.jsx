import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    // Simple navbar
    <nav className='navbar'>
      {/* logo */}
        <img src="./logo.svg" alt="main-logo" />
        <div className="nav-items">
            {/* We use navlinks from react-router-dom to get a default active state when on the right url */}
            <NavLink className={"nav-item"} to={"/"}>
                <p>Accueil</p>
            </NavLink>
            <NavLink className={"nav-item"} to={"/about"}>
                <p>A Propos</p>
            </NavLink>
        </div>
    </nav>
  )
}