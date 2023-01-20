import React from 'react';
import {NavLink} from 'react-router-dom';
import HomeIcon from '../assets/logo192.png';

function Header() {
    return (
        <div className="header">
            <div className="header_icon">
                <NavLink to="/">
                    <img src={HomeIcon} alt="home-icon"/>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;