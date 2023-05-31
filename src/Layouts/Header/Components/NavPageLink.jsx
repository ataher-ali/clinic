import React from 'react';
import { NavLink } from 'react-router-dom';

const NavPageLink = () => {
    return (
        <>
            <ul className="menu menu-horizontal px-1">
                <li> <NavLink to='/'> Home </NavLink> </li>
                <li> <NavLink to='/authentication'> Login </NavLink> </li>
            </ul>
        </>
    );
};

export default NavPageLink;