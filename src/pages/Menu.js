import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

export const Menu = () => {

    return (
        <div className="overlayNav">
            <nav className="overlayNav-menu">
                <ul className="overlayNav-list neonTextGlow2">
                    <li>
                        <Link to="/">
                            <a href="/Home">HOME</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/work">
                            <a href="/Work">WORK</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <a href="/About">ABOUT</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <a href="/Contact">CONTACT</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};