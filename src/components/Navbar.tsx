import React from 'react';
import navbar from "../scss/components/navbar.module.scss"

const Navbar: React.FC = ():JSX.Element => {
    return (
        <nav className={navbar.navbar}>
            <h1>logo</h1>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#skill">skill</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#project">project</a></li>
                <li><a href="#contact">contact me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
