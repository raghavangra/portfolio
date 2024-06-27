import React from "react";
import './MobileNav.css';
import 'material-symbols';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
      <>
        <div className= {`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <h1 className= "logo">Raghav Angra</h1>
                <ul>
                    <li>
                        <a href = '#home' className="menu-item">Home</a>
                    </li>

                    <li>
                        <a href = '#skills' className="menu-item">Skills</a>
                    </li>

                    <li>
                        <a href = '#experience' className="menu-item">Work Experience</a>
                    </li>

                    <li>
                        <a href = '#project' className="menu-item">Projects</a>
                    </li>

                    <a href = '#contact' style = {{ textDecoration: "none" }}>
                        <button className="contact-btn" onClick={() => {}}>Contact</button>
                    </a>
                </ul>
                
            </div>
        </div>
      </>
    );
  };

export default MobileNav;