import React, { useState } from "react";
import './Navbar.css';
import 'material-symbols';
import MobileNav from "./MobileNav/MobileNav.js";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
      <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className="nav-wrapper">
            <div className="nav-content">
                <div className = "logo">
                    <h1 style={{fontFamily: 'sans-serif', marginBottom: "0px"}}>RAGHAV ANGRA</h1>
                    
                </div>
                

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
                    
               
                    
                

                <button className="menu-btn" onClick = {toggleMenu}>
                    <span className = {"material-symbols-outlined"} style = {{ fontSize: "1.8rem" }}>
                        {openMenu ? "close" : "menu"}
                    </span>
                    
                </button> 

            </div>
        </nav>
      </>
    );
};

export default Navbar;