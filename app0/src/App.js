import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Wines from './Components/Wine';
import firebaseInit from './Components/FirebaseInit';
//import MyRouter from './Routes_config';
import { Switch, Route } from 'react-router-dom';
import AdminComponent from './Components/AdminComponent';


class App extends Component {


 constructor(){

     super();
     firebaseInit();

 }

 onLogin(state) {
    console.log('in login from app');
     const auth=firebase.auth();
     //Sign in
     const promise = auth.signInWithEmailAndPassword(state.mail,state.pass);
     const user=firebase.auth().currentUser;
     promise.catch(e=>console.log(e.message));
 }


    render() {
        return (
                <Switch>
                    <Route exact path='/' component={Wines} />
                    <Route path="/admin" component={AdminComponent} />
                </Switch>
        );
    }
}

export default App;

