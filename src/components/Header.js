import {Link} from 'react-router-dom';
import '../styles/navbar.scss';
import {GlobalCtx} from "../App"
import React from 'react';
import Login from './Login';
import Logout from './Logout';

function Header(props) {
    const {gState, setgState} = React.useContext(GlobalCtx)
    return (
        <>
        <header>
            <nav className="navbar">
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/type">By Type</Link></li>
                    <li className="nav-item"><Link to="/brand">By Brand</Link></li>
                </ul>
                <div className="logo"><Link to="/">The Finishing Touch</Link></div>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="#"><i class="fas fa-search"></i></Link></li>
                    { gState.loggedIn ? <li className="nav-item"><Link to="/cart"><i class="fas fa-shopping-bag"></i></Link></li>: null}
                    <li className="nav-item">
                        {gState.loggedIn ? <Logout/> : <Login/>}
                    </li>
                </ul>
            </nav>
            <div className="blur"></div>
        </header>

        
        </>
    )
}

export default Header