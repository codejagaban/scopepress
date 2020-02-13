import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home'
import NotFound from '../NotFound'
import Service from '../Services'
import Pricing from '../Pricing';
import Faq from '../Faq';
import TermsAndConditions from '../TermsAndConditions';

import Contact from '../Contact';
import About from '../About';
import JournalRecommendation from '../JournalRecommendation';
import Submit from '../Submit';
import ScrollToTop from './ScrollToTop';



const AppRouter = () => (
    <BrowserRouter>
    <ScrollToTop/>
    <div className="m-grid m-grid--hor m-grid--root m-page full-height">
      <Switch>
        <Route path="/" component={Home}  exact={true}/>
        <Route path="/services" component={Service}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/journal-recommendation" component={JournalRecommendation}/>
        <Route path="/faq" component={Faq}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/terms" component={TermsAndConditions}/>
        <Route path="/quote" component={Submit}/>




        <Route component={NotFound}/>
      </Switch>

      </div>
    </BrowserRouter>
)

export default AppRouter



