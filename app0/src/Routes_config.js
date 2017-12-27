/**
 * Created by andreea.olaru on 12/15/2017.
 */

import React, {Component} from 'react';
import {BrowserRouter,Route,withRouter}  from 'react-router-dom';
import AdminComponent from "./AdminComponent";
import LoginForm from './LoginForm';

const MyRouter = withRouter( ({history})=>(

    <Route path='/admin' component={AdminComponent }/>

    ));

export default MyRouter

