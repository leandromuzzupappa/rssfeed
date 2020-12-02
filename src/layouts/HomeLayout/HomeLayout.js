import './styles.scss';

import React from 'react';

import Header from '../../components/Header';

const HomeLayout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <main className="home">{props.children}</main>
        </React.Fragment>
    );
};

export default HomeLayout;
