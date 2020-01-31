import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
    padding: 2%;
    display: flex;
    justify-content: space-around;
    background: #6acff7;
`;

const Links = styled(NavLink)`
    color: black;
    font-weight: 800;
    text-decoration: none;
`;

export default function Nav() {

    const clear = () => {
        localStorage.clear();
    }


    return (
        <NavBar>
            {/* <Links to="/">Home</Links> */}
            <Links to="/">Login</Links>
            <Links to="/bubblepage">Bubbles</Links>
            <Links to="/" onClick={clear}>Sign Out</Links>
        </NavBar>
    )
}
