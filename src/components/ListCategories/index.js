import React from 'react';
import { Link } from 'react-router-dom';

const ListCategories = (props) => {
    return <ul>{props.children}</ul>;
};

export default ListCategories;
