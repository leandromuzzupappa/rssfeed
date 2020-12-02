import './styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <article className="feed-card" target="_blank">
            <a href={props.cardLink}>
                {props.cardImage.length > 1 && (
                    <div className="card-image">
                        <img src={props.cardImage} alt={props.cardTitle} />
                    </div>
                )}

                <div className="card-content">
                    <h2>{props.cardTitle.replace(/(&quot;)/g, '"')}</h2>
                    <p>{props.cardContent.substring(0, 100) + ' [leer más]'}</p>
                </div>
                <div className="card-date">{props.cardDate}</div>
            </a>
        </article>
    );
};

export default Card;
