import React, { useState, useEffect } from 'react';
import HandleFetchNews from '../../customHooks';

import Card from '../../components/Card';

const FeedContent = (props) => {
    const posts = HandleFetchNews(
        'http://contenidos.lanacion.com.ar/herramientas/rss/categoria_id=30'
    );

    console.log(posts.status);

    return posts.status === 200 ? (
        <section className="feed-content">
            {posts.posts.map((post, key) => {
                return (
                    <Card
                        key={key}
                        cardLink={post.link}
                        cardImage={post.thumbnail}
                        cardTitle={post.title}
                        cardContent={post.content}
                        cardDate={post.pubDate}
                    />
                );
            })}
        </section>
    ) : (
        <h1>dsadsaa</h1>
    );
};

export default FeedContent;
