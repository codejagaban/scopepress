import React, { Component } from 'react';
import axios from 'axios';
// import { formatPrice } from './helper';
// import moment from 'moment';
import { Redirect } from "react-router-dom"
// import Page from 'react-page-loading';
import Select from 'react-select';
import Sidebar from './navComponents/Sidebar';


class UserProfile extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            isAuthenticated: true,
            id: '',
           first_name : '',
            last_name: '',
            position:
                {
                    value: '',
                    label: '',
                },
            company: '',
            country:
                {
                    value: '',
                    label: '',
                },
            email: '',
            password: '',
            new_password: '',
            confirmNewPassword: '',

            // errors
            passwordErr: '',
            new_passwordErr: '',
            confirmNewPasswordErr: '',

        }
    }

    // get the user data before componentWillMount
    componentWillMount(){
        axios.get('api/user')
        .then(res => {

            console.log(res)
            this.setState({
                id: res.data.id,
               first_name: res.data.first_name,
                last_name: res.data.last_name,
                position: {
                    value: res.data.position,
                    label: res.data.position,

                },
                company:res.data.company,
                country: {
                    value: res.data.country,
                    label: res.data.country,
                },
                email: res.data.email,

            })

        })
        .catch(err => {
              // checks if the user is isAuthenticated
              if(err.response.status === 401) {
                this.setState({
                    isAuthenticated: false

                })
            }
        })
    }


    onInputChange = (e) => {
        const name = e.target.name;
      const value = e.target.value;
      this.setState({
          [name]: value });

    }
    handleSelectCountryChange = (e) => {
        const country = e
        console.log(e)
        this.setState({ country})
    }
    handleSelectPositionChange = (e) => {
        const position = e
        this.setState({ position})
    }

    updateProfile = (e) => {
        e.preventDefault();
        console.log(this.state)


        axios.put(`api/user/update/${this.state.id}`, {
           first_name: this.state.first_name,
            last_name: this.state.last_name,
            position:this.state.position.value,
            company: this.state.company,
            country: this.state.country.value,
            email: this.state.email,
        })
        .then(res => {

            console.log(res)
        })
        .catch(err => {
            if (err) {
          this.setState({passwordErr: 'Password given does not match current password'})
            }

        })


    }
    updateUserPassword = (e) => {
        e.preventDefault()
        // FrontEnd validations
        if( this.state.password === ''){
            this.setState({passwordErr: 'Current password is required'})
        }else if(this.state.new_password === ''){
            this.setState({new_passwordErr: 'New password is required',
                            passwordErr: ''})
        }else if(this.state.password === this.state.new_password) {
            this.setState({new_passwordErr: 'New password must be different from old password'
                        })
        }else if(this.state.confirmNewPassword !== this.state.new_password){
            this.setState({confirmNewPasswordErr: 'New Password do not match',
                            passwordErr: '',
                            new_passwordErr: '',
        })
        }


        axios.put(`api/user/update/password/${this.state.id}`, {
            password: this.state.password,
            new_password: this.state.new_password,

        })
        .then(res => {
            // console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const countries = [
            { value: 'Afghanistan', label: 'Afghanistan' },
            { value: 'Åland Islands', label: 'Åland Islands' },
            { value: 'Albania', label: 'Albania' },
            { value: 'Algeria', label: 'Algeria' },
            { value: 'American Samoa', label: 'American Samoa' },
            { value: 'Andorra', label: 'Andorra' },
            { value: 'Angola', label: 'Angola' },
            { value: 'Anguilla', label: 'Anguilla' },
            { value: 'Antarctica', label: 'Antarctica' },
            { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
            { value: 'Argentina', label: 'Argentina' },
            { value: 'Armenia', label: 'Armenia' },
            { value: 'Aruba', label: 'Aruba' },
            { value: 'Australia', label: 'Australia' },
            { value: 'Austria', label: 'Austria' },
            { value: 'Azerbaijan', label: 'Azerbaijan' },
            { value: 'Bahamas', label: 'Bahamas' },
            { value: 'Bahrain', label: 'Bahrain' },
            { value: 'Bangladesh', label: 'Bangladesh' },
            { value: 'Barbados', label: 'Barbados' },
            { value: 'Belarus', label: 'Belarus' },
            { value: 'Belgium', label: 'Belgium' },
            { value: 'Belize', label: 'Belize' },
            { value: 'Benin', label: 'Benin' },
            { value: 'Bermuda', label: 'Bermuda' },
            { value: 'Bhutan', label: 'Bhutan' },
            { value: 'Bolivia', label: 'Bolivia' },
            { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
            { value: 'Botswana', label: 'Botswana' },
            { value: 'Bouvet Island', label: 'Bouvet Island' },
            { value: 'Brazil', label: 'Brazil' },
            { value: 'British Indian Ocean Territory', label: 'British Indian Ocean Territory' },
            { value: 'Brunei Darussalam', label: 'Brunei Darussalam' },
            { value: 'Bulgaria', label: 'Bulgaria' },
            { value: 'Burkina Faso', label: 'Burkina Faso' },
            { value: 'Burundi', label: 'Burundi' },
            { value: 'Cambodia', label: 'Cambodia' },
            { value: 'Cameroon', label: 'Cameroon' },
            { value: 'Canada', label: 'Canada' },
            { value: 'Cape Verde', label: 'Cape Verde' },
            { value: 'Cayman Islands', label: 'Cayman Islands' },
            { value: 'Central African Republic', label: 'Central African Republic' },
            { value: 'Chad', label: 'Chad' },
            { value: 'Chile', label: 'Chile' },
            { value: 'China', label: 'China' },
            { value: 'Christmas Island', label: 'Christmas Island' },
            { value: 'Cocos (Keeling) Islands', label: 'Cocos (Keeling) Islands' },
            { value: 'Colombia', label: 'Colombia' },
            { value: 'Comoros', label: 'Comoros' },
            { value: 'Congo', label: 'Congo' },
            { value: 'Congo, The Democratic Republic of The', label: 'Congo, The Democratic Republic of The' },
            { value: 'Cook Islands', label: 'Cook Islands' },
            { value: 'Costa Rica', label: 'Costa Rica' },
            { value: 'Cote D ivoire', label: 'Cote D ivoire' },
            { value: 'Croatia', label: 'Croatia' },
            { value: 'Cuba', label: 'Cuba' },
            { value: 'Cyprus', label: 'Cyprus' },
            { value: 'Czech Republic', label: 'Czech Republic' },
            { value: 'Denmark', label: 'Denmark' },
            { value: 'Djibouti', label: 'Djibouti' },
            { value: 'Dominica', label: 'Dominica' },
            { value: 'Dominican Republic', label: 'Dominican Republic' },
            { value: 'Ecuador', label: 'Ecuador' },
            { value: 'Egypt', label: 'Egypt' },
            { value: 'El Salvador', label: 'El Salvador' },
            { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
            { value: 'Eritrea', label: 'Eritrea' },
            { value: 'Estonia', label: 'Estonia' },
            { value: 'Ethiopia', label: 'Ethiopia' },
            { value: 'Falkland Islands (Malvinas)', label: 'Falkland Islands (Malvinas)' },
            { value: 'Faroe Islands', label: 'Faroe Islands' },
            { value: 'Fiji', label: 'Fiji' },
            { value: 'Finland', label: 'Finland' },
            { value: 'France', label: 'France' },
            { value: 'French Guiana', label: 'French Guiana' },
            { value: 'French Polynesia', label: 'French Polynesia' },
            { value: 'French Southern Territories', label: 'French Southern Territories' },
            { value: 'Gabon', label: 'Gabon' },
            { value: 'Gambia', label: 'Gambia' },
            { value: 'Georgia', label: 'Georgia' },
            { value: 'Germany', label: 'Germany' },
            { value: 'Ghana', label: 'Ghana' },
            { value: 'Gibraltar', label: 'Gibraltar' },
            { value: 'Greece', label: 'Greece' },
            { value: 'Greenland', label: 'Greenland' },
            { value: 'Grenada', label: 'Grenada' },
            { value: 'Guadeloupe', label: 'Guadeloupe' },
            { value: 'Guam', label: 'Guam' },
            { value: 'Guatemala', label: 'Guatemala' },
            { value: 'Guernsey', label: 'Guernsey' },
            { value: 'Guinea', label: 'Guinea' },
            { value: 'Guinea-bissau', label: 'Guinea-bissau' },
            { value: 'Guyana', label: 'Guyana' },
            { value: 'Haiti', label: 'Haiti' },
            { value: 'Heard Island and Mcdonald Islands', label: 'Heard Island and Mcdonald Islands' },
            { value: 'Holy See (Vatican City State)', label: 'Holy See (Vatican City State)' },
            { value: 'Honduras', label: 'Honduras' },
            { value: 'Hong Kong', label: 'Hong Kong' },
            { value: 'Hungary', label: 'Hungary' },
            { value: 'Iceland', label: 'Iceland' },
            { value: 'India', label: 'India' },
            { value: 'Indonesia', label: 'Indonesia' },
            { value: 'Iran, Islamic Republic of', label: 'Iran, Islamic Republic of' },
            { value: 'Iraq', label: 'Iraq' },
            { value: 'Ireland', label: 'Ireland' },
            { value: 'Isle of Man', label: 'Isle of Man' },
            { value: 'Israel', label: 'Israel' },
            { value: 'Italy', label: 'Italy' },
            { value: 'Jamaica', label: 'Jamaica' },
            { value: 'Japan', label: 'Japan' },
            { value: 'Jersey', label: 'Jersey' },
            { value: 'Jordan', label: 'Jordan' },
            { value: 'Kazakhstan', label: 'Kazakhstan' },
            { value: 'Kenya', label: 'Kenya' },
            { value: 'Kiribati', label: 'Kiribati' },
            { value: 'Korea, Democratic Peoples Republic of', label: 'Korea, Democratic Peoples Republic of' },
            { value: 'Korea, Republic of', label: 'Korea, Republic of' },
            { value: 'Kuwait', label: 'Kuwait' },
            { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
            { value: 'Lao Peoples Democratic Republic', label: 'Lao Peoples Democratic Republic' },
            { value: 'Latvia', label: 'Latvia' },
            { value: 'Lebanon', label: 'Lebanon' },
            { value: 'Lesotho', label: 'Lesotho' },
            { value: 'Liberia', label: 'Liberia' },
            { value: 'Libyan Arab Jamahiriya', label: 'Libyan Arab Jamahiriya' },
            { value: 'Liechtenstein', label: 'Liechtenstein' },
            { value: 'Lithuania', label: 'Lithuania' },
            { value: 'Luxembourg', label: 'Luxembourg' },
            { value: 'Macao', label: 'Macao' },
            { value: 'Macedonia, The Former Yugoslav Republic of', label: 'Macedonia, The Former Yugoslav Republic of' },
            { value: 'Madagascar', label: 'Madagascar' },
            { value: 'Malawi', label: 'Malawi' },
            { value: 'Malaysia', label: 'Malaysia' },
            { value: 'Maldives', label: 'Maldives' },
            { value: 'Mali', label: 'Mali' },
            { value: 'Malta', label: 'Malta' },
            { value: 'Marshall Islands', label: 'Marshall Islands' },
            { value: 'Martinique', label: 'Martinique' },
            { value: 'Mauritania', label: 'Mauritania' },
            { value: 'Mauritius', label: 'Mauritius' },
            { value: 'Mayotte', label: 'Mayotte' },
            { value: 'Mexico', label: 'Mexico' },
            { value: 'Micronesia, Federated States of', label: 'Micronesia, Federated States of' },
            { value: 'Moldova, Republic of', label: 'Moldova, Republic of' },
            { value: 'Monaco', label: 'Monaco' },
            { value: 'Mongolia', label: 'Mongolia' },
            { value: 'Montenegro', label: 'Montenegro' },
            { value: 'Montserrat', label: 'Montserrat' },
            { value: 'Morocco', label: 'Morocco' },
            { value: 'Mozambique', label: 'Mozambique' },
            { value: 'Myanmar', label: 'Myanmar' },
            { value: 'Namibia', label: 'Namibia' },
            { value: 'Nauru', label: 'Nauru' },
            { value: 'Nepal', label: 'Nepal' },
            { value: 'Netherlands', label: 'Netherlands' },
            { value: 'Netherlands Antilles', label: 'Netherlands Antilles' },
            { value: 'New Caledonia', label: 'New Caledonia' },
            { value: 'New Zealand', label: 'New Zealand' },
            { value: 'Nicaragua', label: 'Nicaragua' },
            { value: 'Niger', label: 'Niger' },
            { value: 'Nigeria', label: 'Nigeria' },
            { value: 'Niue', label: 'Niue' },
            { value: 'Norfolk Island', label: 'Norfolk Island' },
            { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands' },
            { value: 'Norway', label: 'Norway' },
            { value: 'Oman', label: 'Oman' },
            { value: 'Pakistan', label: 'Pakistan' },
            { value: 'Palau', label: 'Palau' },
            { value: 'Palestinian Territory, Occupied', label: 'Palestinian Territory, Occupied' },
            { value: 'Panama', label: 'Panama' },
            { value: 'Papua New Guinea', label: 'Papua New Guinea' },
            { value: 'Paraguay', label: 'Paraguay' },
            { value: 'Peru', label: 'Peru' },
            { value: 'Philippines', label: 'Philippines' },
            { value: 'Pitcairn', label: 'Pitcairn' },
            { value: 'Poland', label: 'Poland' },
            { value: 'Portugal', label: 'Portugal' },
            { value: 'Puerto Rico', label: 'Puerto Rico' },
            { value: 'Qatar', label: 'Qatar' },
            { value: 'Reunion', label: 'Reunion' },
            { value: 'Romania', label: 'Romania' },
            { value: 'Russian Federation', label: 'Russian Federation' },
            { value: 'Rwanda', label: 'Rwanda' },
            { value: 'Saint Helena', label: 'Saint Helena' },
            { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
            { value: 'Saint Lucia', label: 'Saint Lucia' },
            { value: 'Saint Pierre and Miquelon', label: 'Saint Pierre and Miquelon' },
            { value: 'Saint Vincent and The Grenadines', label: 'Saint Vincent and The Grenadines' },
            { value: 'Samoa', label: 'Samoa' },
            { value: 'San Marino', label: 'San Marino' },
            { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
            { value: 'Saudi Arabia', label: 'Saudi Arabia' },
            { value: 'Senegal', label: 'Senegal' },
            { value: 'Serbia', label: 'Serbia' },
            { value: 'Seychelles', label: 'Seychelles' },
            { value: 'Sierra Leone', label: 'Sierra Leone' },
            { value: 'Singapore', label: 'Singapore' },
            { value: 'Slovakia', label: 'Slovakia' },
            { value: 'Slovenia', label: 'Slovenia' },
            { value: 'Solomon Islands', label: 'Solomon Islands' },
            { value: 'Somalia', label: 'Somalia' },
            { value: 'South Africa', label: 'South Africa' },
            { value: 'South Georgia and The South Sandwich Islands', label: 'South Georgia and The South Sandwich Islands' },
            { value: 'Spain', label: 'Spain' },
            { value: 'Sri Lanka', label: 'Sri Lanka' },
            { value: 'Sudan', label: 'Sudan' },
            { value: 'Suriname', label: 'Suriname' },
            { value: 'Svalbard and Jan Mayen', label: 'Svalbard and Jan Mayen' },
            { value: 'Swaziland', label: 'Swaziland' },
            { value: 'Sweden', label: 'Sweden' },
            { value: 'Switzerland', label: 'Switzerland' },
            { value: 'Syrian Arab Republic', label: 'Syrian Arab Republic' },
            { value: 'Taiwan, Province of China', label: 'Taiwan, Province of China' },
            { value: 'Tajikistan', label: 'Tajikistan' },
            { value: 'Tanzania, United Republic of', label: 'Tanzania, United Republic of' },
            { value: 'Thailand', label: 'Thailand' },
            { value: 'Timor-leste', label: 'Timor-leste' },
            { value: 'Togo', label: 'Togo' },
            { value: 'Tokelau', label: 'Tokelau' },
            { value: 'Tonga', label: 'Tonga' },
            { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
            { value: 'Tunisia', label: 'Tunisia' },
            { value: 'Turkey', label: 'Turkey' },
            { value: 'Turkmenistan', label: 'Turkmenistan' },
            { value: 'Turks and Caicos Islands', label: 'Turks and Caicos Islands' },
            { value: 'Tuvalu', label: 'Tuvalu' },
            { value: 'Uganda', label: 'Uganda' },
            { value: 'Ukraine', label: 'Ukraine' },
            { value: 'United Arab Emirates', label: 'United Arab Emirates' },
            { value: 'United Kingdom', label: 'United Kingdom' },
            { value: 'United States', label: 'United States' },
            { value: 'United States Minor Outlying Islands', label: 'United States Minor Outlying Islands' },
            { value: 'Uruguay', label: 'Uruguay' },
            { value: 'Uzbekistan', label: 'Uzbekistan' },
            { value: 'Vanuatu', label: 'Vanuatu' },
            { value: 'Venezuela', label: 'Venezuela' },
            { value: 'Viet Nam', label: 'Viet Nam' },
            { value: 'Virgin Islands, British', label: 'Virgin Islands, British' },
            { value: 'Virgin Islands, U.S.', label: 'Virgin Islands, U.S.' },
            { value: 'Wallis and Futuna', label: 'Wallis and Futuna' },
            { value: 'Western Sahara', label: 'Western Sahara' },
            { value: 'Yemen', label: 'Yemen' },
            { value: 'Zambia', label: 'Zambia' },
            { value: 'Zimbabwe', label: 'Zimbabwe' },
        ];

        const positions = [
{ value: "Academia - Assistant Professor", label: "Academia - Assistant Professor" },
{ value: "Academia - Associate Professor", label: "Academia - Associate Professor" },
{ value: "Academia - Graduate Student", label: "Academia - Graduate Student" },
{ value: "Academia - Post-doctoral Associate/Fellow", label: "Academia - Post-doctoral Associate/Fellow" },
{ value: "Academia - Professor", label: "Academia - Professor" },
{ value: "Academia - Research Associate", label: "Academia - Research Associate" },
{ value: "Academia - Research Technician/Assistant", label: "Academia - Research Technician/Assistant" },
{ value: "Academia - Teacher/Lecturer/Reader", label: "Academia - Teacher/Lecturer/Reader" },
{ value: "Clinical - Clinician Researcher", label: "Clinical - Clinician Researcher" },
{ value: "Clinical - Fellow", label: "Clinical - Fellow" },
{ value: "Clinical - Medical Student", label: "Clinical - Medical Student" },
{ value: "Clinical - Physician", label: "Clinical - Physician" },
{ value: "Clinical - Research Associate", label: "Clinical - Research Associate" },
{ value: "Clinical - Research Technician/Assistant", label: "Clinical - Research Technician/Assistant" },
{ value: "Clinical - Resident", label: "Clinical - Resident" },
{ value: "Government - Laboratory Director/Head", label: "Government - Laboratory Director/Head" },
{ value: "Government - Post-doctoral Associate/Fellow", label: "Government - Post-doctoral Associate/Fellow" },
{ value: "Government - Principal Investigator", label: "Government - Principal Investigator" },
{ value: "Government - Research Associate", label: "Government - Research Associate" },
{ value: "Government - Research Technician/Assistant", label: "Government - Research Technician/Assistant" },
{ value: "Industry - Post-doctoral Associate/Fellow", label: "Industry - Post-doctoral Associate/Fellow" },
{ value: "Industry - Principal Investigator", label: "Industry - Principal Investigator" },
{ value: "Industry - Research Associate", label: "Industry - Research Associate" },
{ value: "Industry - Research Technician/Assistant", label: "Industry - Research Technician/Assistant" },
{ value: "Publishing - Editor in Chief", label: "Publishing - Editor in Chief" },
{ value: "Publishing - Executive", label: "Publishing - Executive" },
{ value: "Publishing - Managing Editor", label: "Publishing - Managing Editor" },
{ value: "Retired", label: "Retired" },
{ value: "Other", label: "Other" },

        ]



        return(
            // Redirect to login if not if not authenticated
            // !this.state.isAuthenticated ? <Redirect to={'/login'} /> :
            // // render the page only if there is a user
            // this.state.id  &&
              <div>
            <Sidebar/>
            <div className="content">
            <div className="col-xl-12 col-lg-8">






<div className="m-portlet m-portlet--full-height m-portlet--tabs  ">
    <div className="m-portlet__head">
        <div className="m-portlet__head-tools">
        <ul className="nav nav-tabs m-tabs m-tabs-line   m-tabs-line--left m-tabs-line--brand" role="tablist">
                <li className="nav-item m-tabs__item">
                    <a className="nav-link m-tabs__link active" data-toggle="tab" href="#m_user_profile_tab_1" role="tab">
                        <i className="flaticon-share m--hide"></i>
                        Profile
                    </a>
                </li>
                <li className="nav-item m-tabs__item">
                    <a className="nav-link m-tabs__link" data-toggle="tab" href="#m_user_profile_tab_2" role="tab">
                        Work Details
                    </a>
                </li>
                <li className="nav-item m-tabs__item">
                    <a className="nav-link m-tabs__link" data-toggle="tab" href="#m_user_profile_tab_3" role="tab">
                        Password
                    </a>
                </li>
            </ul>
        </div>

    </div>
    <div className="tab-content">
        <div className="tab-pane active" id="m_user_profile_tab_1">
            <form className="m-form m-form--fit m-form--label-align-right" onSubmit={this.updateProfile}>
                <div className="m-portlet__body">
                    <div className="form-group m-form__group m--margin-top-10 m--hide">

                    </div>
                    <div className="form-group m-form__group row">
                        <label htmlFor="example-text-input" className="col-sm-2 col-form-label">
                            First Name
                        </label>
                        <div className="col-sm-7">

                            <input
                            type="text"
                            className="form-control m-input"
                            name="first_name"
                            value={this.state.first_name}
                            onChange={this.onInputChange}/>

                        </div>
                    </div>
                    <div className="form-group m-form__group row">
                        <label htmlFor="example-text-input" className="col-sm-2 col-form-label">
                            Last Name
                        </label>
                        <div className="col-sm-7">
                        <input
                        type="text"
                        name="last_name"
                        className="form-control m-input"
                        value={this.state.last_name}
                        onChange={this.onInputChange}/>

                        </div>
                    </div>
                    <div className="form-group m-form__group row">
                        <label htmlFor="example-text-input" className="col-sm-2 col-form-label">
                            Email Address
                        </label>
                        <div className="col-sm-7">
                            <input
                            type="email"
                            name="email"
                            className="form-control m-input"
                            value={this.state.email}
                            onChange={this.onInputChange}/>

                        </div>
                    </div>


                    </div>
                <div className="m-portlet__foot m-portlet__foot--fit">
                    <div className="m-form__actions">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-7">
                                <button type="submit" className="btn btn-brand m-btn m-btn--air m-btn--custom">
                                    Save changes
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className="tab-pane " id="m_user_profile_tab_2">

        <form className="m-form m-form--fit m-form--label-align-right" onSubmit={this.updateProfile}>
                <div className="m-portlet__body">
                    <div className="form-group m-form__group m--margin-top-10 m--hide">

                    </div>
                    <div className="form-group m-form__group row">
                        <label htmlFor="example-text-input" className="col-sm-2 col-form-label">
                            Institution/Company
                        </label>
                        <div className="col-sm-7">
                        <input
                            type="text"
                            className="form-control m-input"
                            name="company"
                            value={this.state.company}
                            onChange={this.onInputChange}/>

                        </div>
                    </div>
                    <div className="form-group m-form__group row">
                        <label htmlFor="example-text-input" className="col-sm-2 col-form-label">
                            Position
                        </label>
                        <div className="col-sm-7">
                        <Select
                        name="position"
                        value={this.state.position}
                        options={positions}
                        onChange={this.handleSelectPositionChange}/>

                        </div>
                    </div>

                    <div className="form-group m-form__group row">
                        <label htmlFor="example-text-input" className="col-sm-2 col-form-label">
                            Country
                        </label>
                        <div className="col-sm-7">
                        <Select
                        name="position"
                        value={this.state.country}
                        options={countries}
                        onChange={this.handleSelectCountryChange}/>

                        </div>



                </div>
                    </div>
                <div className="m-portlet__foot m-portlet__foot--fit">
                    <div className="m-form__actions">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-7">
                                <button type="submit" className="btn btn-brand m-btn m-btn--air m-btn--custom">
                                    Save Work Details
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </form>


        </div>
        <div className="tab-pane " id="m_user_profile_tab_3">
        <form className="m-form m-form--fit m-form--label-align-right" onSubmit={this.updateUserPassword}>
                <div className="m-portlet__body">
                    <div className="form-group m-form__group m--margin-top-10 m--hide">

                    </div>
                    <div className="form-group m-form__group row">
                        <label htmlFor="example-text-input" className="col-sm-2 col-form-label">
                            Old Password
                        </label>
                        <div className="col-sm-7">
                        {
        this.state.passwordErr &&
        <div className=" mt-3 alert alert-danger alert-dismissible fade show" role="alert">
        {this.state.passwordErr}
        </div>}
                        <input
                        type="password"
                        className="form-control m-input"
                        name="password"
                        value={this.state.password}
                        onChange={this.onInputChange}/>

                        </div>
                    </div>

                    <div className="form-group m-form__group row">
                        <label htmlFor="example-text-input" className="col-sm-2 col-form-label">
                            New Password
                        </label>
                        <div className="col-sm-7">

                        {
        this.state.new_passwordErr &&
        <div className=" mt-3 alert alert-danger alert-dismissible fade show" role="alert">
        {this.state.new_passwordErr}
        </div>}

                    <input
                    type="password"
                    className="form-control m-input"
                    name="new_password"
                    value={this.state.new_password}
                    onChange={this.onInputChange}/>


                        </div>
                    </div>

                    <div className="form-group m-form__group row">
                        <label htmlFor="example-text-input" className="col-sm-2 col-form-label">
                            Confirm New Password
                        </label>
                        <div className="col-sm-7">
                        {
        this.state.confirmNewPasswordErr &&
        <div className=" mt-3 alert alert-danger alert-dismissible fade show" role="alert">
        {this.state.confirmNewPasswordErr}
        </div>}

                    <input
                    type="password"
                    className="form-control m-input"
                    name="confirmNewPassword"
                    value={this.state.confirmNewPassword}
                    onChange={this.onInputChange}/>


                        </div>


                    </div>
                    <div className="m-portlet__foot m-portlet__foot--fit">
                    <div className="m-form__actions">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-7">
                                <button type="submit" className="btn btn-brand m-btn m-btn--air m-btn--custom">
                                    Update Password
                                </button>

                            </div>
                        </div>
                    </div>
                </div>





        </div>
        </form>
    </div>
</div>



</div>
</div>
</div>

<footer className="m-grid__item		m-footer ">
<div className="m-container m-container--fluid m-container--full-height m-page__container">
<div className="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
   <div className="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
<span className="m-footer__copyright">
2019 &copy;
	   <a href="/about" className="m-link">
	  Scope Press Editing

</a>
</span>
   </div>

</div>
</div>

</footer>
</div>




        )
    }

}






export default UserProfile;