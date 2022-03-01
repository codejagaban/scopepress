import React,{ Component } from 'react';
import axios from 'axios';
import Navbar from './navComponents/Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';


class Contact extends Component {

    constructor(){
        super()
        this.state = {
            fullName: '',
            email: '',
            message: '',
            isLoading: false,
            error: '',
            success: ''
        }
    }

    onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value });
            console.log(this.state);
    }

    sendContactForm = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true })

        axios.post('/api/contact',{
            fullName: this.state.fullName,
            email: this.state.email,
            message: this.state.message,
        })
        .then(res => {
            if(res) {
                this.setState({
                    error: '',
                    success: 'Thank you, your message has been sent, our support team will get in touch with you soon',
                    isLoading: false
            })
            }
            console.log(res)
        })
        .catch(err => {
            console.log(err);
            this.setState({
                error: 'Something went wrong, pleae try again later',
                isLoading: false,
            })
        })

    }
    render(){
        return(

            <>
            <Helmet>
                <title>Contact Us | Scope Press</title>
                <meta name="keywords" content=" Contact us, Help, Journal Information, choosing service,Journal Editing, translation , Journal translation , manuscript formatting, tables formatting, figures formatting, formatting, articles " />
    <meta name="description" content="Have a suggestion, or need help on editing  service and provide  editing, translation , journal translation , manuscript formatting, tables formatting, figures formatting, formatting,  of scientific and academic journals and articles.  Reach out to us and we will respond as soon as we can."/>
    <meta name="author" content="scopepress.org"/>
            </Helmet>
        <Navbar/>

        <div className="container">

     <div className="contact">
     <div className="m-portlet m-0 p-5">
       <div className="text-center">
        <h1>
            Get In Touch
            </h1>
            <p>Have a suggestion, or need help? <br/>
            Reach out to us and we will respond as soon as we can. </p>

        </div>

        <div className="row">
            <div className="col-md-7 mx-auto">
                <form className="m-login__form m-form" onSubmit={this.sendContactForm}>
                    {this.state.error && <div className="alert alert-danger alert-dismissible fade show" role="alert"> {this.state.error}

        </div>}

        {this.state.success && <div className="alert alert-success alert-dismissible fade show" role="alert"> {this.state.success}

        </div>}
                <div className="form-group m-form__group">
                                           <input className="form-control m-input p-3 m-input--solid m-login__form-input--last"
                                            type="text"
                                            name="fullName"
                                            value={this.state.fullName}
                                            required
                                            onChange={this.onInputChange}
                                            placeholder="Enter Full Name"/>
                                       </div>

                                       <div className="form-group m-form__group">
                                           <input className="form-control m-input p-3 m-input--solid m-login__form-input--last"
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            required
                                            onChange={this.onInputChange}
                                            placeholder="Enter Email Address"/>
                                       </div>
                                       <div className="form-group m-form__group">
                                       <textarea className="form-control  p-3 m-input m-input--solid"
                                       name="message" required
                                        id="exampleTextarea" value={this.state.message} onChange={this.onInputChange} rows="5" placeholder="Enter Your Message Here"/>


                                       </div>


                                       <button role="button" className="btn btn-brand " type="submit">
                                       {
	this.state.isLoading && <div className="m-loader" style={{ width: '30px', display: 'inline-block' }} ></div>
}
Submit</button>

                </form>


            </div>

        </div>

       </div>

     </div>

        </div>
        <Footer/>
</>
        )
    }
}



export default Contact