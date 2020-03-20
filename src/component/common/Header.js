import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: "#f15b2a" }

    return (
        <nav>
            <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>{" | "}
            <NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink>
        </nav>
    );
}

export default Header;