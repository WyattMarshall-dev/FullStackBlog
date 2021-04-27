import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-4 mt-2">
            <div className="container">
                <Link to="/">
                    <img className="mr-4" src={process.env.PUBLIC_URL + 'Logo.svg'} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav text-end push">
                    <li className="nav-item">
                    <NavLink to="/" exact={true} className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/blog" className="nav-link">Blog</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Nav;