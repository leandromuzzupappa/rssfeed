import React from 'react';

const Button = ({ children, ...props }) => {
    return (
        <button className="input" {...props}>
            {children}
        </button>
    );
};

export default Button;
