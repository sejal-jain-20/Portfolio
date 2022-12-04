import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import "../header.css";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    
    <div className="nav_section">
     
        <div className="navbar">
          <nav className={toggle? "navbar expanded" : "navbar"}>
            <h2 className="logo"><a href="#home">Sejal Jain</a></h2>
            <div className="toggle-icon" onClick={handleToggle}>
              {toggle ? (
                <Icon icon={x} size={28} />
              ) : (
                <Icon icon={menu} size={28} />
              )}
            </div>
            <ul className="links">
              <li className="item"><a href="#about">
                About me</a></li>
              <li className="item"><a href="#skill">Skills</a></li>
              <li className="item"><a href ="#activite">Activites</a></li>
              <li className="item"><a href="#project">Projects</a></li>
              <li className="item"><a href="#Contact">Contact me</a></li>
            </ul>
          </nav>
        </div>
    
    </div>
  );
};

export default Navbar;
