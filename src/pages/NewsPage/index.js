import React, {Component} from 'react';
import { TopMenu } from "../../components/TopMenu";
import News from '../../components/News';

export default class NewsPage extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <TopMenu />
                </div>
                <div className="row">
                    <div className="col-8"><News id={this.props.match.params.id} /></div>
                    <div className="col-4">Aside</div>
                </div>
            </div>
        )
    }
}