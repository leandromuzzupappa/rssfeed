import React from 'react';

const LoginLayout = (props) => {
    return (
        <div className="loginForms">
            <main>{props.children}</main>
        </div>
    );
};

export default LoginLayout;
