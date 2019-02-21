import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { NewsItem } from '../NewsItem'
import { API_KEY } from '../../config/api'

const API_GET_NEWS = 'https://newsapi.org/v2/top-headlines?';

class NewsList extends Component {

    componentDidUpdate(prevProps) {
        if(prevProps.country != this.props.country){
            this.getNewsFromServer();
        }
    }

    componentDidMount(){
        this.getNewsFromServer();
    }

    getNewsFromServer = () => {
        const propCountry = this.props.country ? this.props.country : 'ua';
        const country = 'country='+propCountry;
        const apiKey = '&apiKey='+API_KEY;

        axios.get(API_GET_NEWS+country+apiKey)
            .then( (res) => {
                const result = res.data.articles.map( (item, i) => {
                    item.id = i;
                    return item;
                });
                this.props.addNewsList(result);
            })
    }


    render(){
        const news = this.props.newsList.map( (item) => {
            return (
                <NewsItem news={item} key={item.description} />
            )
        })
        return (
            <>
                {news}
            </>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        newsList: store.news.newsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewsList: (newsList) => {
            dispatch({type: 'ADD_NEWS_LIST', payload: [...newsList] })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsList)