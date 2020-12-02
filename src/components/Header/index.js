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
                        <Link to="/login">Iniciar sesion</Link>
                    </li>
                    <li>
                        <Link to="/register">Registrarse</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
