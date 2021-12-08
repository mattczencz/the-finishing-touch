import {Link} from 'react-router-dom';
import '../styles/navbar.scss';
import React from 'react';


function Header(props) {
    return (
        <header>
            <nav className="navbar">
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/type">By Type</Link></li>
                    <li className="nav-item"><Link to="/brand">By Brand</Link></li>
                </ul>
                <div className="logo"><Link to="/">The Finishing Touch</Link></div>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="#"><i class="fas fa-search"></i></Link></li>
                    <li className="nav-item"><Link to="/cart"><i class="fas fa-shopping-bag"></i></Link></li>
                </ul>
            </nav>
            <div className="blur"></div>
        </header>
    )
}

export default Header