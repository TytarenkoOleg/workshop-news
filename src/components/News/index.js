import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

class News extends Component{
    render() {
        const { urlToImage, title, description} = this.props.news;
         return (
             <>
                <Helmet>
                     <title>{title}</title>
                </Helmet>
                <div className="row news-item">
                    <div className="col-4 news-image">
                        <img src={urlToImage} alt={title} className="img-fluid" />
                    </div>
                    <div className="col-8 news-info">
                        {title}
                        <p className="news-short">{description}</p>
                    </div>
                </div>
             </>
        )
    }

}

const mapStateToProps = (store, props) => {
    return {
        news: store.news.newsList[props.id]
    }
}

export default connect(mapStateToProps)(News)