import React from 'react';

import ListCategories from '../../components/ListCategories';
import ListItem from '../../components/ListItem';

const FeedList = (props) => {
    return (
        <section className="feed-section">
            <h4>Feeds</h4>

            <ListCategories>
                <ListItem link="#" title="dsadsa" />
                <ListItem link="#" title="dsadsa" />
                <ListItem link="#" title="dsadsa" />
            </ListCategories>
        </section>
    );
};

export default FeedList;
