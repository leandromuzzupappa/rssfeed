import React from 'react';

import ListCategories from '../../components/ListCategories';
import ListItem from '../../components/ListItem';

const FeedList = (props) => {
    return (
        <section className="feed-section">
            <h4>Feeds</h4>

            <ListCategories>
                <ListItem link="#" title="Rss1" />
                <ListItem link="#" title="Rss2" />
                <ListItem link="#" title="Rss3" />
            </ListCategories>
        </section>
    );
};

export default FeedList;
