import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

export const NotFound = () => {

    return (
        <div className="notFound">
            <h1 className="neonTextFlicker">404</h1>
            <p className="neonTextFlicker">We couldn't find that page</p>
            <Link to="/">
                <button>BACK TO HOME PAGE</button>
            </Link>
        </div>
    )
};