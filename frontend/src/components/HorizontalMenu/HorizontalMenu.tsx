import React from 'react';
import './HorizontalMenu.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const HorizontalMenu: React.FC = () => {
    return (
        <div className="horizontal-menu">
            <ul className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">Employees</a></li>
                <li><a href="#">Departments</a></li>
            </ul>
            <HamburgerMenu />
        </div>
    );
};

export default HorizontalMenu;