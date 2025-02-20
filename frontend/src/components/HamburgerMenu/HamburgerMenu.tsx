import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="hamburger-button" onClick={toggleMenu}>
        ☰ Settings
      </div>
      <ul className={`menu-list ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#">Setting 1</a>
        </li>
        <li>
          <a href="#">Setting 2</a>
          <ul className="submenu">
            <li>
              <a href="#">Sub-Setting 2.1</a>
            </li>
            <li>
              <a href="#">Sub-Setting 2.2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Setting 3</a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
