import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import FormInput from '../../components/forms/FormInput';
import Button from '../../components/forms/Button';

const SignIn = (props) => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setErrors([]);
    };

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        alert('Hola Google!');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Hola Email pwd');
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

            <form id="login" onSubmit={handleSubmit}>
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

                <Button type="submit" id="sendLogin">
                    Iniciar sesión
                </Button>

                <hr />
                <Button id="loginGoogle" onClick={handleGoogleSignIn}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34.313"
                        height="34.875"
                        viewBox="0 0 34.313 34.875"
                    >
                        <path
                            d="M34.313,18.408c0,9.949-6.813,17.03-16.875,17.03a17.438,17.438,0,0,1,0-34.875A16.769,16.769,0,0,1,29.13,5.126L24.384,9.689C18.176,3.7,6.63,8.2,6.63,18A10.923,10.923,0,0,0,17.438,29.011c6.9,0,9.492-4.95,9.9-7.516h-9.9v-6h16.6A15.287,15.287,0,0,1,34.313,18.408Z"
                            transform="translate(0 -0.563)"
                        />
                    </svg>
                    Continuar con Google
                </Button>
            </form>

            <div className="loginOptions">
                <Link to="/register">Registrate</Link>
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

export default SignIn;
