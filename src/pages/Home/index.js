import './styles.scss';

import React from 'react';
import Card from '../../components/Card';
import ListCategories from '../../components/ListCategories';
import ListItem from '../../components/ListItem';

const Homepage = (props) => {
    return (
        <>
            <section className="feed-section">
                <h4>Feeds</h4>

                <ListCategories>
                    <ListItem link="#" title="dsadsa" />
                    <ListItem link="#" title="dsadsa" />
                    <ListItem link="#" title="dsadsa" />
                </ListCategories>
            </section>
            <section className="feed-content">
                <Card
                    cardLink="#"
                    cardImage="https://leandromuzzupappa.github.io/assets/images/largeFavicon.png"
                    cardTitle="Titulo bonito"
                    cardContent="Hoal son un resumen chicoHoal son"
                    cardDate="11.12.2020"
                />
            </section>
        </>
    );
};

export default Homepage;
