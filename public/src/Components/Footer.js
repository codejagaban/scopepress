import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


const Footer = () => (

                  <footer className="footer pt-5 pb-3">
                      <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="footer-links row">
                          <div className="col-md-5">

                              <img src="./images/logo.png" className="footer-logo" height="150" alt="SPC Logo"/>
                              <p>113 Seaford  Road,  CUNNOQUHIE, KY15 8WG,  United Kingdom.
                               </p>
                               <p>985 Plainfield Avenue, Syracuse, New York, NY,  13221, USA.</p>
                               <p>Need help? Send us a mail at support@scopepress.org</p>

                          </div>
                          <div className="col-md-3 col-6 mt-5">
                          <ul>
                                  <li className="footer-links__heading mt-4">Company</li>

                                  <li>
                                      <Link to="/about">About</Link>
                                  </li>
                                  <li>
                                      <Link to="/services">Services</Link>
                                  </li>
                                  <li>
                                      <Link to="/pricing">Pricing</Link>
                                  </li>
                              </ul>

                          </div>
                          <div className="col-md-3 col-6 mt-5">
                          <ul>
                              <li className="footer-links__heading mt-4">Help</li>
                                  <li>
                                      <Link to="faq">FAQ</Link>
                                  </li>
                                  <li>
                                      <Link to="contact">Contact Us</Link>
                                  </li>

                                  <li>
                                      <Link to="/terms">Terms and Conditions</Link>
                                  </li>
                              </ul>

                          </div>
                          </div>

                      </div>

                  </div>  <div className="copyright text-center mt-5">
                          <li>&copy; {moment().year()} Scope Press Editing. All rights reserved.</li>

                          </div>

              </div>
          </footer>







)

export default Footer;