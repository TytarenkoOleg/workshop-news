import React, { Component } from 'react'
import { TopMenu } from "../../components/TopMenu";
import NewsList from "../../components/NewsList"
import './homepage.scss'

export default class Homepage extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <TopMenu />
                </div>
                <div className="row">
                    <div className="col-8"><NewsList country={this.props.match.params.country} /></div>
                    <div className="col-4">Aside</div>
                </div>
            </div>
        )
    }
}