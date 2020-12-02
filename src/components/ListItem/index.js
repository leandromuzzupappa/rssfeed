import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
    return (
        <li>
            <Link to={props.link}>{props.title}</Link>
        </li>
    );
};

export default ListItem;
