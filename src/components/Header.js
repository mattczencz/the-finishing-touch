import {Link} from 'react-router-dom';
import '../styles/navbar.scss';

function Header(props) {
    return (
        <>
        <header>
            <nav className="navbar">
                <ul className="nav-items">
                    <li className="nav-item"><Link to="#">By Type</Link></li>
                    <li className="nav-item"><Link to="#">By Brand</Link></li>
                </ul>
                <div className="logo"><Link to="/">The Final Touch</Link></div>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="#">Search</Link></li>
                    <li className="nav-item"><Link to="#">Cart</Link></li>
                    <li className="nav-item"><Link to="#">Account</Link></li>
                </ul>
            </nav>
            <div className="blur"></div>
        </header>

        
        </>
    )
}

export default Header