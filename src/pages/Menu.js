import React from "react";
import "../styles/Menu.css";

export const Menu = () => {
    
    return (
        <div className="overlayNav">
            <nav className="overlayNav-menu">
                <ul className="overlayNav-list neonTextGlow2">
                    <li><a href="/Home">HOME</a></li>
                    <li><a href="/Work">WORK</a></li>
                    <li><a href="/About">ABOUT</a></li>
                    <li><a href="/Contact">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    )
};