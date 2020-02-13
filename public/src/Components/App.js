import React, { Component} from 'react';
import ReactDOM from 'react-dom';
// import './App.scss';
import AppRouter from './routers/AppRouter'
import DashboardRouter from './routers/DashboardRouter';

export default class Index extends Component  {

    constructor(){
        super()
        this.state = {
            userValid: false
        }
    }


    render(){
        return(
            <div className="full-height">

            <AppRouter/>

        </div>
        )
    }
}

ReactDOM.render( <Index/>, document.getElementById('app'));