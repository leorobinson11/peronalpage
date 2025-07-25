import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/header.css'

const Header = () => {
    const [ open, setOpen ] = useState(false);
    
    const toggle = () => {
        // opening closing banner
        setOpen(prev => !prev);
    }

    useEffect(() => {
        const onScroll = () => setOpen(false);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
      }, []);

    return (
        <div className="header-container">
            <div className={`links-container ${open ? "open" : ""}`}>
                    <span> <a href="#profile"> Profile </a> </span>
                    <span><a href="#portfolio"> Portfolio </a></span>
                    <span> <a href="#contact"> Contact </a> </span>
            </div>

            <div className="hamburger-menu" onClick={toggle}>
                <span className></span>
                <span className></span>
                <span className></span>
            </div>
        </div>
    )
}

export default Header;