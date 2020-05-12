 import React, { Component } from 'react';
 import axios from 'axios';
import { formatPrice } from './helper';
import moment from 'moment';
import Page from 'react-page-loading';
import {Link, Redirect} from 'react-router-dom';
import Pagination from "react-js-pagination";
import Sidebar from './navComponents/Sidebar';

 class PaymentDashboard extends Component {
     constructor(props) {
		 super(props)


		//  initial state

         this.state = {
             payments: '',
             total: null,
			 per_page: null,
			 current_page: null,
			 isAuthenticated: true,


         };


     }


// get the latest ten payment from the user
getListOfPayment = (pageNum) => {

        axios.get(`api/payments?page=${pageNum}`)
        .then(res => {

            this.setState({
                payments: res.data.data,
                total: res.data.total,
                 per_page: res.data.per_page,
			 current_page: res.data.current_page

            })
            console.log(res.data)
        })
        .catch(err => {
			if(err.response.status == 401){
				this.setState({
					isAuthenticated: false
				})
			}
        })
	}
	componentWillMount(){
		this.getListOfPayment(1);
	}


	handlePageChange = (pageNumber) => {
	this.getListOfPayment(pageNumber);


	  }


     render() {

         return(

			// checkes if the user is Authenticated
			//  !this.state.isAuthenticated ? <Redirect to={'/login'}/> :

			// //  renders the page only if the there is some data from the server
			// this.state.payments &&
			  <div>

			<Page loader={"bar"} color={"#384e7a"} size={8}></Page>
				<Sidebar/>
			<div className="content">
			<div className="row justify-content-center">
				{
					console.log(this.state.payments.length)
				}
	  {
		//   Check if there is any payment then throw an error message
		this.state.payments.length <= 0 ?   <div className="col-md-12   text-center mx-auto">
		<h3 className="display-3 mt-5"><i className="flaticon-folder-2 no-file "></i></h3>
		<h5>You don't have any orders yet, click on the button below to start a new order</h5>

		<a onClick={()=>{this.props.history.push('/quote');}} href="" className="btn  m-btn btn-brand m-btn--icon m-btn--air  mt-5 mb-5 m-btn--pill">
						<span>
							<i className="la la-cart-plus"></i>
							<span>
								New Order
							</span>
						</span>
					</a>
								</div>

															 :

								//  show payments if no errors
		  <div className="col-md-12">
	   <div className="m-portlet p-4 m-portlet--tab">


<div className="m-form m-form--label-align-right m--margin-bottom-30">
								   <div className="row align-items-center">
									   <div className="col-xl-8 order-2 order-xl-1">
										   <div className="form-group m-form__group row align-items-center">

											   <div className="col-md-6">
												   <div className="m-input-icon m-input-icon--left">
													   <input type="text" className="form-control m-input m-input--solid" placeholder="Search..." id="generalSearch"/>
													   <span className="m-input-icon__icon m-input-icon__icon--left">
														   <span>
															   <i className="la la-search"></i>
														   </span>
													   </span>
												   </div>
											   </div>
										   </div>
									   </div>
									   <div className="col-xl-4 order-1 order-xl-2 m--align-right">
										   <a onClick={()=>{this.props.history.push('/quote');}} href="" className="btn  m-btn btn-brand m-btn--icon m-btn--air m-btn--pill">
											   <span>
												   <i className="la la-cart-plus"></i>
												   <span>
													   New Order
												   </span>
											   </span>
										   </a>
										   <div className="m-separator m-separator--dashed d-xl-none"></div>
									   </div>
								   </div>
							   </div>
							   <div className="table-responsive">
									   <table className="table table-striped">
										 <thead>
										   <tr>
											 <th scope="col" className="p-4">Reference ID</th>
											 <th scope="col" className="p-4">Service Type</th>
											 <th scope="col" className="p-4">Amount Paid</th>
											 <th scope="col" className="p-4">Date Paid</th>
											 <th scope="col" className="p-4">Expected Delivery Date</th>
										   </tr>
										 </thead>
										 <tbody>
												   {
					   this.state.payments.map(payment =>
						   <tr key={payment.id} >
							   <td className="p-2">{payment.ref_id}</td>
							   <td className="p-2">{payment.helpType}</td>
							   <td className="p-2">{formatPrice(payment.amount)}</td>
							   <td className="p-2">{moment(payment.created_at).format('MMMM Do YYYY, ha')}</td>
							   <td className="p-2">{payment.deliveryDate}</td>


										   </tr>)}
										 </tbody>
									   </table>

								<div className="float-right">
								<Pagination
		  activePage={this.state.current_page}
		  itemClassFirst="page-item"
		  itemClass="page-item"
		  innerClass="pagination"
		  activeClass="page-item active"
		  activeLinkClass="page-link "
		  linkClass="page-link"
          itemsCountPerPage={this.state.per_page}
          totalItemsCount={this.state.total}
        //   pageRangeDisplayed={10}
		onChange={this.handlePageChange}
        />

								</div>

									   </div>

			</div>
			</div>}
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


 export default PaymentDashboard;