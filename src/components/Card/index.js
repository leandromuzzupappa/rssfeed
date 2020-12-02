import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <article class="feed-card">
            <Link to={props.cardLink}>
                <div className="card-image">
                    <img src={props.cardImage} alt={props.cardTitle} />
                </div>
                <div className="card-content">
                    <h2>{props.cardTitle}</h2>
                    <p>{props.cardContent}</p>
                </div>
                <div className="card-date">{props.cardDate}</div>
            </Link>
        </article>
    );
};

export default Card;
