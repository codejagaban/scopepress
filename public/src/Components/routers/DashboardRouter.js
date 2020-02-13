import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Footer from '../Footer'
import Home from '../Home'
import NotFound from '../NotFound'
import Login from '../authComponents/Login';
import Register from '../authComponents/Register';
import Quote from '../Quote';
import PaymentDashboard from '../PaymentDashboard';
import UserProfile from '../UserProfile';
import axios from 'axios';


const routes = [

  { path: '/profile',
    main: (props) => <UserProfile {...props}/>
  },
  { path: '/account',
    main: (props) => <PaymentDashboard {...props}/>
  }
];



class DashboardRouter extends Component {
    constructor(){
        super()
    }

     logOut = () => {
        axios.post('api/logout')
        .then(response=> {
            this.props.history.push('/login');
          })
          .catch(error=> {
            console.log(error);
          });


    }
  render () {
      return(
          <div>



    <Router>

<header className="m-grid__item    m-header "  data-minimize-offset="200" data-minimize-mobile-offset="200" >
<div className="m-container m-container--fluid m-container--full-height">
<div className="m-stack m-stack--ver m-stack--desktop">
    <div className="m-stack__item m-brand  m-brand--skin-dark ">
        <div className="m-stack m-stack--ver m-stack--general">
            <div className="m-stack__item m-stack__item--middle m-brand__logo">
                <a href="index.html" className="m-brand__logo-wrapper">
                    <img alt="" src="/images/logo.png" width="80"/>
                </a>
            </div>
            <div className="m-stack__item m-stack__item--middle m-brand__tools">
            <a href="javascript:;" id="m_aside_left_minimize_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block">
                <span></span>
            </a>

            <a href="javascript:;" id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                <span></span>
            </a>



            <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                <i className="flaticon-more"></i>
            </a>
        </div>
    </div>
</div>

<div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">


    <div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general">
        <div className="m-stack__item m-topbar__nav-wrapper">
            <ul className="m-topbar__nav mt-3 m-nav m-nav--inline">
            <li className="m-nav__item  m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width" data-dropdown-toggle="click" data-dropdown-persistent="true">
                    <a href="#" className="m-nav__link m-dropdown__toggle" >



                    </a>

                </li>
                <li className="m-nav__item  m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width" data-dropdown-toggle="click" data-dropdown-persistent="true">
                    <a href="" onClick={()=>{this.props.history.push('/');}}  className="m-nav__link m-dropdown__toggle" >
                    Back to home page

                    </a>

                </li>
            </ul>
        </div>
    </div>
</div>
</div>
</div>
</header>
<div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

<button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
    <i className="la la-close"></i>
</button>
<div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">

<div
       id="m_ver_menu"
       className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark "
       data-menu-vertical="true"
       data-menu-scrollable="false" data-menu-dropdown-timeout="500"
>
   <ul className="m-menu__nav   ">

   <li className="m-menu__section">
   <h4 className="m-menu__section-text">
       Payments
   </h4>
</li>

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
   <Link  to={'/account'} className="m-menu__link ">
       <i className="m-menu__link-icon icon flaticon-coins"></i>
       <span className="m-menu__link-text">
               My Orders
               </span>
   </Link>
   <div className="m-menu__submenu ">
       <ul className="m-menu__subnav">
           <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                       <span className="m-menu__link">
                           <span className="m-menu__link-text">
                       My Orders
                           </span>
                       </span>
           </li>

       </ul>
   </div>
</li>


       <li className="m-menu__section">
           <h4 className="m-menu__section-text">
               Profile
           </h4>
       </li>
       <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
           <Link to={'/profile'}  className="m-menu__link ">
               <i className="m-menu__link-icon flaticon-user"></i>
               <span className="m-menu__link-text">
                          My Profile
                       </span>
           </Link>
           <div className="m-menu__submenu ">
               <ul className="m-menu__subnav">
                   <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                               <span className="m-menu__link">
                                   <span className="m-menu__link-text">
                                      My Profile
                                   </span>
                               </span>
                   </li>

               </ul>
           </div>
       </li>



       <li className="m-menu__section mt-5">

       </li>

       <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
           <Link  className="m-menu__link " onClick={this.logOut}>
               <i className="m-menu__link-icon icon flaticon-logout"></i>
               <span className="m-menu__link-text">
                       Log out
                       </span>
           </Link>
           <div className="m-menu__submenu ">
               <span className="m-menu__arrow"></span>
               <ul className="m-menu__subnav">
                   <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                               <span className="m-menu__link">
                                   <span className="m-menu__link-text">
                               Log out
                                   </span>
                               </span>
                   </li>

               </ul>
           </div>
       </li>




   </ul>
</div>
</div>
<div className="m-grid__item m-grid__item--fluid m-wrapper">
    <div className="m-subheader ">
        <div className="d-flex align-items-center">

        </div>
    </div>
    <div className="m-content">
        <div className="row justify-content-center">
        <div className="col-md-12">
        <div className="m-portlet p-4 m-portlet--tab">


        {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}




        </div>

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
        Oxford Editors

</a>
</span>
    </div>

</div>
</div>

</footer>


</Router>
</div>
      )

        }
    }

export default DashboardRouter;
