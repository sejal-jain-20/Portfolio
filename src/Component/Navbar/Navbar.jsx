import React from 'react';
import '../header.css';

const Navbar = () => {
  return (
    <div className="Container">
        <div className="main_nav">
            <div className="navbar">
                <div className="logo">SEJAL</div>
                <div className="navlist">
                     <ul className="listed">
                        <li className="item">About me</li>
                        <li className="item">Skills</li>
                        <li className="item">Activites</li>
                        <li className="item">Projects</li>
                        <li className="item">Interships</li>
                        <li className="item">Achievement</li>
                        <li className="item">Contact me</li>
                     </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar