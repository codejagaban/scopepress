import React, { Component } from 'react';
import axios from 'axios';
import { formatPrice } from './helper';
import moment from 'moment';
import { Link } from "react-router-dom"
import Page from 'react-page-loading';

class EditUserProfile extends Component {
    constructor() {
        super()

        this.state = {
            user: '',
        };
    }

    componentDidMount() {

   this._isMounted = true;
console.log(this.props.user)

       axios.get('api/user')
       .then(res => {

           this.setState({
               user: res.data
           })
           console.log(res.data)
       })
       .catch(err => {
           console.log(err)
       })


   }

    render() {
        return(
            <div>
            <Page loader={"bar"} color={"#384e7a"} size={8}></Page>


            </div>
        )
    }
}


export default EditUserProfile;