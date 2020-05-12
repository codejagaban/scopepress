import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import PaymentDashboard from './PaymentDashboard';
import UserProfile from './UserProfile';

// const token = document.querySelectorAll('meta')


// console.log(isLoggedIn);

class UserDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            first_name: '',
        }

    }


    render() {
        console.log(this.state)
        return(
            <div></div>

        )
    }
}


export default UserDashboard;