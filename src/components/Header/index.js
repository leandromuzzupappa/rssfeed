import './styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <div className="logo">
                <Link to="/" title="Ir al inicio">
                    RSS Bonito
                </Link>
            </div>
            <nav id="menu">
                <ul>
                    <li>
                        <Link to="/">Link1</Link>
                    </li>
                    <li>
                        <Link to="/">Link2</Link>
                    </li>
                    <li>
                        <Link to="/">Link3</Link>
                    </li>
                </ul>
            </nav>
            <div className="userActions">
                <Link to="/">Account</Link>
            </div>
        </header>
    );
};

export default Header;
