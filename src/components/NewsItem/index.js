import React from 'react';
import { NavLink } from 'react-router-dom';
import './NewsItem.scss';

export const NewsItem = (props) => {
    const item = props.news;
    return (
        <div className="row news-item">
            <div className="col-4 news-image">
                <img src={item.urlToImage} alt={item.title} className="img-fluid" />
            </div>
            <div className="col-8 news-info">
                <NavLink to={'news/'+item.id}>{item.title}</NavLink>
                <p className="news-short">{item.description}</p>
            </div>
        </div>
    )
}