import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {

    const clear = () => {
        localStorage.clear();
    }


    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/bubblepage">Bubbles</NavLink>
            <NavLink to="/" onClick={clear}>Sign Out</NavLink>
        </nav>
    )
}
