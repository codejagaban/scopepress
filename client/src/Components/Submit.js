import React, {Fragment, useState } from 'react';
import Navbar from './navComponents/Navbar';
import Footer from './Footer';
import { formatPrice } from './helper';
import Select from 'react-select';
import axios from 'axios';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import { Helmet } from 'react-helmet';

const Submit = () => {


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

	];


const initialState = {
isEditing : false,
editingType : 'Bronze Editing',
numOfPageToEdit : 1,
isTranslating : false,
langToTranslate : 'Czech',
position: '',
company: '',
country: '',
numOfPageToTranslate : '',
isManuscriptFormatting : false,
isTabelsFormatting : false,
numOfTables : '',
isFiguresFormatting : false,
journalRecommendation : false,
numOfFigures : '',
fullName : '',
email : '',
message : '',
files : [],
success: '',
errors: '',
isLoading: false

}
const [state, setState] = useState(initialState);

const {isEditing,
editingType,
numOfPageToEdit,
isTranslating,
langToTranslate,
company,
position,
country,
isManuscriptFormatting,
isTabelsFormatting,
numOfTables,
isFiguresFormatting,
journalRecommendation,
numOfFigures,
fullName,
email,
message,
files,
success,
errors,
isLoading
} = state


const onInputChange = e =>  {
	const isCheckbox =e.target.type === 'checkbox'
    const name = e.target.name;
  const value = e.target.value;
  const checked = e.target.checked

	setState({ ...state,   [name]: isCheckbox ? checked : value });

}

const handleSelectCountryChange = (e) => {
    const country = e.value
    setState({...state, country})
}
const handleSelectPositionChange = (e) => {
    const position = e.value
    setState({...state,position})
}


const translationPrice = isTranslating ? 32000 : 0;
const manuscriptFormatingPrice = isManuscriptFormatting ?  12500 : 0;
const journalRecommendationPrice = journalRecommendation ? 15000: 0;

let price = 0
let deliveryDate = ' 5 working days';
if(editingType === 'Bronze Editing') {
	price = 2000
	deliveryDate = '5 days'
}else if( editingType === 'Silver Editing' ){
	price = 3000;
	deliveryDate = '72 hours';

} else {
	price = 4000
	deliveryDate = '48 hours'
}

let editingPrice = price * parseInt(numOfPageToEdit)
let totalAmount = 0;
if ( !isEditing ) {
	totalAmount =  translationPrice + manuscriptFormatingPrice + journalRecommendationPrice;
} else if ( isEditing ) {
	totalAmount = editingPrice + translationPrice +  manuscriptFormatingPrice + journalRecommendationPrice
}


 // specify upload params and url for your files
 const getUploadParams = ({ meta }) => {

	setState({...state, files: [...files, meta.name] })
	console.log(state.files)
	 return { url: '/api/upload' }

	 }


  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
	   console.log(status, meta, file)
	   if(status === 'removed') {
		   setState({ ...state, files: files.filter((file) => file !== meta.name) })

		   console.log(state.files)
		   axios.post('/api/upload/delete',{file : file.name})
		   .then(res => {
			   console.log(res);

		   })
		   .catch(err =>
			console.log({ err }))
	   }

	 }



const onFromSubmit = (e) => {
e.preventDefault();
const formData = {
	fullName: fullName,
	email: email,
	files: files,
	message:
      	`<h2>An order has been placed for the following services by ${fullName} for the following services</h2>

	  <p> Editing Type : <strong>${ isEditing ? editingType: 'None'}</strong> </p>
	   <p>Number Of pages to edit : <strong> ${ numOfPageToEdit ? numOfPageToEdit : 'None' }</strong></p>
	   <p>Language to translate from : <strong>${langToTranslate}</strong></p>
	   <p> ${isManuscriptFormatting ? 'Manuscript Formatting' : ''}</p>
	   <p> ${isTabelsFormatting ? 'Tables Formatting' : ''}</p>
	   <p>Number of tables to format <strong>${ numOfTables ? numOfTables : 'None' }</strong></p>
	   <p> ${isFiguresFormatting ? 'Figures Formatting' : ''}</p>
	   <p>Number of figures to format <strong>${ numOfFigures ? numOfFigures : 'None' }</strong></p>
	   <p> ${journalRecommendation ? 'Journal Recommendation' : 'None'}</p>

	   <p>Additional Information from the this author : ${ message }</p>
	  <p>Attached below are the neccessary files that requires these services </p>

	  <h2> Contact Information for  ${fullName} : </h2>
	  <p>Full Name : ${fullName}</p>
	  <p>Email Address : ${email}</p>
	  <p>Company / Institution : ${company} </p>
	  <p>Position:  ${position}</p>
	  <p>Country:  ${country}</p>



	  <h2> Prices : </h2>
	   <p>{editingType} : -  ${ formatPrice(editingPrice) }</p>
	   <p>Manuscript Formatitng: ${ formatPrice(manuscriptFormatingPrice)}</p>

	   <p>Tables Formatting : ${ formatPrice(.000)}</p>
	   <p>Figures Formatting : ${ formatPrice(.000)}</p>

	   <p>Journal Recommendation : ${ formatPrice(journalRecommendationPrice)}</p>

	  <p>TOTAL : ${formatPrice(totalAmount)}</p>
	  `
}
	  setState({ ...state, isLoading: true})

 axios.post(
 	'/api/order'
 
 	,formData
			)

	  .then( res => {
	  	console.log(res)
		  setState({...initialState, success : res.data.msg,});
		  window.scrollTo(0, 0);

	  })
	  .catch(err => {
	  	console.log({ err })
		  setState({errors : 'Something went wrong please try again later', isLoading: false});
		  window.scrollTo(0, 0);
	  })

}
return (
<>
<Helmet>
	<title>Submit Journals | Scope Press</title>
	<meta name="keywords" content=" Submission of Journal, Uploading of Journal, Journal Information, choosing service,Journal Editing, translation , Journal translation , manuscript formatting, tables formatting, figures formatting, formatting, articles " />
    <meta name="description" content="Submit your Journals for editing  service and provide  editing, translation , journal translation , manuscript formatting, tables formatting, figures formatting, formatting,  of scientific and academic journals and articles.  Reach out to us and we will respond as soon as we can."/>
    <meta name="author" content="scopepress.org"/>

</Helmet>
<Navbar/>
<section>
<div id="banner" className="quotebanner">
				<div className="">
						<div className="container">
						<div className="row mt-5" >
				<div className="col-md-12">
					<h2 className="submit-text text-dark text-uppercase"> Get a service that suites your needs</h2>
				</div>
				</div>
				</div>
				</div>

				</div>


				<div className="m-portlet p-4 m-portlet--tab mb-0">
				<div className="container">
			<div className="row">
				<div className="col-md-7 ">
					<p className="submit-text">Select a service or send a mail with the neccessary files required for the services
					 you want to <a href="mailto:submit@scopepress.org">submit@scopepress.org</a></p>
						<form action="" onSubmit={onFromSubmit} className="mb-5" encType="multipart/form-data">


<div className="row">

<div className="col-md-12">
{
	success && <div className="alert alert-success alert-dismissible fade show" role="alert">
	 {success}

</div>
}

{
	errors && <div className="alert alert-danger alert-dismissible fade show" role="alert">
	 {errors}.

</div>
}



		<label className="m-option mt-3">
	<span className="m-option__control">
		<span className="m-checkbox m-checkbox--brand m-checkbox--check-bold">
	<input type="checkbox"
	name="isEditing"
	checked={isEditing}
	required
	onChange={onInputChange}

	/>
			<span></span>
		</span>
	</span>
						<span className="m-option__label">
							<span className="m-option__head">
								<span className="m-option__title">
									Editing { isEditing && <span> ({ editingType } {formatPrice(price)} / per page )</span>}
								</span>
								<span className="m-option__focus">
								<span></span>
								</span>
							</span>
							<span className="m-option__body">
							Experts in your field will ensure that  your ideas are communicated clearly, accurately and free from grammatical errors.
							</span>
						</span>

					</label>

				{ isEditing &&  <Fragment>	<div className="form-group m-form__group">
						<label for="editingType">
							Select the type of editing you want
						</label>

						<select
							className="form-control m-input"
							id="editingType"
							name="editingType"
							required
							value={editingType}

							onChange={onInputChange}>
							<option value="Bronze Editing" >Bronze Editing ($20/page)</option>
							<option value="Silver Editing">Silver Editing ($30/page)</option>
							<option value="Gold Editing">Gold Editing ($40/page)</option>

						</select>
					</div>

					<div className="form-group">
						<label htmlFor="numOfPageToEdit"> Number of pages to edit</label>
			<input
				className="form-control"
				placeholder="Number of pages to edit"
				value={numOfPageToEdit}
				type="number"
				required
				min={1}
				name="numOfPageToEdit"
				onChange={onInputChange}
				/>

			</div>
			</Fragment>

}


				</div>




				<div className="col-md-12">
					<label className="m-option mt-3">
						<span className="m-option__control">
							<span className="m-checkbox m-checkbox--brand m-checkbox--check-bold">
						<input type="checkbox"
						name="isTranslating"
						checked={isTranslating}

						onChange={onInputChange}

						/>
								<span></span>
							</span>
						</span>
						<span className="m-option__label">
							<span className="m-option__head">
								<span className="m-option__title">
									Translation
								</span>
								<span className="m-option__focus">
								$320
								</span>
							</span>
							<span className="m-option__body">
							Translation service is focused on preparing a publication-quality manuscript.
Your journals will be translated into proper American or British English

							</span>

						</span>
					</label>

				{ isTranslating &&	<div className="form-group m-form__group">
						<label for="lang">
							Select Language for translation
						</label>

						<select
						className="form-control m-input"
							id="lang"
							name="langToTranslate"
							required
							value={langToTranslate}
							onChange={onInputChange}>
						<option value="Czech">Czech </option>
						<option value="China">Chinese </option>
						<option value="French">French </option>
						<option value="Finland">Finland </option>
						<option value="Finnish">Finnish </option>
						<option value="German">German </option>
						<option value="Japanese">Japanese </option>
						<option value="Korea">Korean </option>
						<option value="Norwegian">Norwegian </option>
						<option value="Poland">Poland </option>
						<option value="Portuguese">Portuguese </option>
						<option value="Spanish">Spanish </option>
						<option value="Swedish">Swedish </option>
						<option value="Taiwan">Taiwan </option>
						<option value="Turkish">Turkish </option>

						</select>
					</div>
}


				</div>
<div className="col-md-12">
								<label className="m-option mt-3">
									<span className="m-option__control">
										<span className="m-checkbox m-checkbox--brand m-checkbox--check-bold">
									<input type="checkbox"
									name="isTabelsFormatting"
									checked={isTabelsFormatting}
									onChange={onInputChange}

									/>
											<span></span>
										</span>
									</span>
									<span className="m-option__label">
										<span className="m-option__head">
											<span className="m-option__title">
												Tables Formatting
											</span>
											<span className="m-option__focus">
												FREE
											</span>
										</span>
										<span className="m-option__body">
										Our  illustrators handles the
layout, borders, and shading of your tables to accurately
and efficiently communicate your results.

										</span>

									</span>
								</label>


		{ isTabelsFormatting &&	<div className="form-group">
			<label htmlFor="numOfTables" >
				Number of tables to be formatted
			</label>
			<input
				className="form-control"
				placeholder="Number of tables to be formatted"
				value={numOfTables}
				type="number"
				name="numOfTables"
				required
				min={1}
				onChange={onInputChange}
				/>

			</div>}





							</div>



<div className="col-md-12">
								<label className="m-option mt-3">
									<span className="m-option__control">
										<span className="m-checkbox m-checkbox--brand m-checkbox--check-bold">
		<input type="checkbox"
			name="isFiguresFormatting"
			checked={isFiguresFormatting}
			onChange={onInputChange}
			/>
											<span></span>
										</span>
									</span>
									<span className="m-option__label">
										<span className="m-option__head">
											<span className="m-option__title">
												Figures Formatting
											</span>
											<span className="m-option__focus">
												FREE
											</span>
										</span>
										<span className="m-option__body">
										Publication-ready figures wil be created from your files that conform to your chosen journal’s specifications.
This includes changes to file type, resolution, color, space etc.
										</span>
									</span>
								</label>


{ isFiguresFormatting &&
	<div className="form-group">
		<label htmlFor="numOfFigures">Number of figures to be formatted</label>
<input
	className="form-control"
	placeholder="Number of figures to be formatted"
	value={numOfFigures}
	type="number"
	name="numOfFigures"
	required
	min={1}
	onChange={onInputChange}
	/>

</div>

}


							</div>


				<div className="col-md-12">
					<label className="m-option mt-3">
						<span className="m-option__control">
							<span className="m-checkbox m-checkbox--brand m-checkbox--check-bold">
<input type="checkbox"
name="journalRecommendation"
checked={journalRecommendation}
onChange={onInputChange}
/>
								<span></span>
							</span>
						</span>
						<span className="m-option__label">
							<span className="m-option__head">
								<span className="m-option__title">
									Journal Recommendation
								</span>
								<span className="m-option__focus">
								$150
								</span>
							</span>
							<span className="m-option__body">
							our team of experts will shortlist3 best-suited journals for your papers that match your subjext area

							</span>
						</span>
					</label>
				</div>

				<div className="col-md-12">
					<label className="m-option mt-3">
						<span className="m-option__control">
							<span className="m-checkbox m-checkbox--brand m-checkbox--check-bold">
<input type="checkbox"
name="isManuscriptFormatting"
checked={isManuscriptFormatting}
onChange={onInputChange}
/>
								<span></span>
							</span>
						</span>
						<span className="m-option__label">
							<span className="m-option__head">
								<span className="m-option__title"
>
									Manuscript Formatting
								</span>
								<span className="m-option__focus">
								$125
								</span>
							</span>
							<span className="m-option__body">
							Your page layout, text, formatting,
headings, image placement, and citations/references will be modified to meet the guidelines of your target journal.

							</span>
						</span>
					</label>
				</div>




					</div>










					<div>






				<h5 className="mt-4">Contact info</h5>
			<div className="form-group">
			<input
				className="form-control"
				type="text"
				placeholder="Enter full Name"
				name="fullName"
				required

				value={fullName}
				onChange={onInputChange}

				/>

			</div>

			<div className="form-group">
			<input
				className="form-control"
				placeholder="Enter Email Address"
				type="email"
				name="email"
				value={email}
				required
				onChange={onInputChange}
				/>

			</div>




			<div className="form-group">
			<input
				className="form-control"
				type="text"
				name="company"
				required

				placeholder="Institution/Company"
				value={company}
				onChange={onInputChange}

				/>

			</div>






			<div className="form-group">
			<Select
			name="position"
			options={positions}


			placeholder="Select your Position"
			onChange={handleSelectPositionChange}/>

			</div>




			<div className="form-group">

			<Select
			name="country"
			options={countries}
			placeholder="Select your Country"
			onChange={handleSelectCountryChange}/>



			</div>






				</div>



				<div>
				<h5 className="mt-4">Select Upload your files</h5>
					<p>Upload files that require these services</p>


					<Dropzone
      getUploadParams={getUploadParams}
	  onChangeStatus={handleChangeStatus}
	  accept="application/*"
	  inputContent={(files, extra) => (extra.reject ? 'File not allowed' : 'Drag and drop files or select file')}
      styles={{
        dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
        inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
      }}
    />


				</div>


				<div className="remark mt-3">
					<label htmlFor="message">
						Do you have any additional message to provide?
					</label>
					<textarea
					id="#message"
					name="message"
					rows="10"
					className="form-control"
					value={message}
					placeholder="Enter your message here"
					onChange={onInputChange}
					/>

				</div>

<div className="form-group mt-4">
<button role="button" type="submit" className="btn btn-brand">
		                              {
	isLoading && <div className="m-loader" style={{ width: '30px', display: 'inline-block' }} ></div>
}	Submit

	</button>

</div>

							</form>

				</div>
				<div className="col-md-5">
				<ul className="price-summary p-0 sticky-top">
            <li className="price-summary-section"><h5 className=" heading text-uppercase text-center">Summary</h5></li>

            <li className="price-summary-section">
            <p className="sub-header text-uppercase">Selected Service (s)</p>
            <ul className="service-selected p-0">
            {isEditing && <li className="service-taked">{editingType } ( { numOfPageToEdit ? numOfPageToEdit : 0 } page (s) )
            <span className=" float-right pricing">{numOfPageToEdit ? formatPrice(editingPrice) : formatPrice(.000)}</span>
            <p className="delivery-date">
            <i className="mdi mdi-calendar-check-outline"></i> will be delivered in { deliveryDate }
            </p>
			</li>}

			{isTranslating
              && <li className="service-taked">Translation from { langToTranslate}
           <span className=" float-right pricing">{formatPrice(translationPrice)}</span>
           <p className="delivery-date mb-0">
		   <i className="mdi mdi-calendar-check-outline"></i> will be delivered in { deliveryDate }
           </p>
           </li>}

            {isTabelsFormatting && <li className="service-taked">
            {numOfTables} tables


            <span className=" float-right pricing">{formatPrice(.000)}</span>
            <p className="delivery-date mb-0">
            <i className="mdi mdi-calendar-check-outline"></i> will be delivered in { deliveryDate }

            </p>
            </li>}

            {isFiguresFormatting && <li className="service-taked">
            {numOfFigures}  figures
            <span className=" float-right pricing">{formatPrice(.000)}</span>
            <p className="delivery-date mb-0">
			<i className="mdi mdi-calendar-check-outline"></i> will be delivered in { deliveryDate }
            </p>
            </li>}

            {isManuscriptFormatting
              && <li className="service-taked">Manuscript Formatting
           <span className=" float-right pricing">{formatPrice(manuscriptFormatingPrice)}</span>
           <p className="delivery-date mb-0">
		   <i className="mdi mdi-calendar-check-outline"></i> will be delivered in { deliveryDate }
           </p>
           </li>}

           {journalRecommendation
              && <li className="service-taked">Journal Recommendation
           <span className=" float-right pricing">{formatPrice(journalRecommendationPrice)}</span>
           <p className="delivery-date mb-0">
		   <i className="mdi mdi-calendar-check-outline"></i> will be delivered in { deliveryDate }
           </p>
           </li>}


            <li className="service-taked">TOTAL
            <span className=" float-right pricing">
                <input type="hidden"/>
                {formatPrice(totalAmount)}
                </span>
                </li>


            </ul>


            </li>

            </ul>

				</div>

			</div>
							</div>


							</div>




</section>
<Footer/>

</>
)
}

export default Submit
