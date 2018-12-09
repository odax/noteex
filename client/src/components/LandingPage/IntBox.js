import React from 'react'
import { Route } from 'react-router-dom';

import IntBox__InitialView from './IntBox__InitialView';
import IntBox__SignupView from './IntBox__SignupView';
import IntBox__LoginView from './IntBox__LoginView';
import IntBox__Activate from './IntBox__Activate';

//IntBox is short for InteractionBox
const IntBox = () => {
    return (
      <div className = 'IntBox'>
        <Route exact path = '/' component = {IntBox__InitialView}/>
        <Route path = '/signup' component = {IntBox__SignupView}/>
        <Route path = '/login' component = {IntBox__LoginView}/>
        <Route path = '/activateaccount' component = {IntBox__Activate}/>
      </div>
    )
};

export default IntBox;