import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar'>
        <img src="./logo.svg" alt="main-logo" />
        <div className="nav-items">
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