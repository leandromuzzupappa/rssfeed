import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import FormInput from '../../components/forms/FormInput';
import Button from '../../components/forms/Button';

const SignUp = (props) => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Hola me registre');
    };

    return (
        <>
            <i className="closeLogin" onClick={() => history.goBack()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.426"
                    height="13.423"
                    viewBox="0 0 13.426 13.423"
                >
                    <path
                        d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z"
                        transform="translate(-11.285 -11.289)"
                    />
                </svg>
            </i>

            <div className="header">
                <h4>{props.subtitle}</h4>
                <h1>{props.title}</h1>
            </div>

            <form id="login" onSubmit={handleFormSubmit}>
                <FormInput
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    placeholder="Nombre completo"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <FormInput
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Correo electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormInput
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    placeholder="Repetir contraseña"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Button type="submit" id="sendLogin">
                    Registrarme
                </Button>

                <hr />
            </form>

            <div className="loginOptions">
                <Link to="/login">Iniciar sesión</Link>
                <Link to="/reset-password">Recuperar contraseña</Link>
            </div>

            {errors.length > 0 && (
                <div className="formValidation" onClick={resetForm}>
                    <i className="close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13.426"
                            height="13.423"
                            viewBox="0 0 13.426 13.423"
                        >
                            <path
                                d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z"
                                transform="translate(-11.285 -11.289)"
                            />
                        </svg>
                    </i>
                    <h5>¡Cuidado!</h5>
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    <p>{err}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
};

export default SignUp;
