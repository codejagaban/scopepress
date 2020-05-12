import React, { Component } from 'react';
// import axios from 'axios';
// import { formatPrice } from './helper';
// import moment from 'moment';
import Page from 'react-page-loading';

class PaymentItem extends Component {
    constructor() {
        super()

        this.state = {
            user: '',


        };
    }

    componentDidMount() {

//    this._isMounted = true;


//        axios.get('api/user')
//        .then(res => {

//            this.setState({
//                user: res.data
//            })
//            console.log(res.data)
//        })
//        .catch(err => {
//            console.log(err)
//        })


   }

    render() {
        return(
            <div>
                <h5>Hello I am the individual payment item </h5>
            </div>
        )
    }
}


export default PaymentItem;