import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="container-fluid text-center">
            <nav className="row">
                <div className="col-sm">
                    <li className="p-2">
                        <Link to="/home">Home</Link>
                    </li>
                </div>
                <div className="col-sm">
                    <li className="p-2">
                        <Link to="/about">About Alissa</Link>
                    </li>
                </div>
                <div className="col-sm">
                    <li className="p-2">
                        <Link to="/gallery">Portfolio Gallery</Link>
                    </li>
                </div>
                <div className="col-sm">
                    <li className="p-2">
                        <Link to="/contact">Contact Info</Link>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Nav;