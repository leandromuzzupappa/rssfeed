import './styles.scss';

import React from 'react';

import FeedList from '../../components/FeedList';
import FeedContent from '../../components/FeedContent';

const Homepage = (props) => {
    return (
        <>
            <FeedList />
            <FeedContent />
        </>
    );
};

export default Homepage;
