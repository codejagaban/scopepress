import React from 'react';
import {NavLink, withRouter } from 'react-router-dom';


const Navbar = () =>  {
    return(

    <div>


<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
<div className="container">
  <NavLink className="navbar-brand d-flex justify-content-start" to={'/'} >
    <img src={"/images/logo.png"} height="70"/>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className=" collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <NavLink activeClassName={"active__link"}  exact={true} className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'/services'}>Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  to={'/pricing'}>Pricing</NavLink>
      </li>



      <li className="nav-item">
        <NavLink className="nav-link" to={'/faq'}>FAQ</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to={'/about'}>About</NavLink>
      </li>



      <li className="nav-item">
        <NavLink className="nav-link" to={'/contact'}>Contact Us</NavLink>
      </li>







      <li className="nav-item">
        <NavLink className="nav-link btn  btn-brand text-white mt-1    pl-3 pr-3 " to={'/quote'}> Get A Quote</NavLink>
      </li>


    </ul>


  </div>
  </div>
</nav>

    </div>
    )
  }

export default  withRouter(Navbar);