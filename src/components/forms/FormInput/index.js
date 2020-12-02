import './styles.scss';

import React from 'react';

const FormInput = ({ handleChange, ...otherProps }) => {
    return <input className="input" onChange={handleChange} {...otherProps} />;
};

export default FormInput;
