import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Wines from './Components/Wine';
import LoginForm from "./LoginForm";
import firebaseInit from './FirebaseInit';
//import MyRouter from './Routes_config';
import AdminComponent from './AdminComponent';
import {BrowserRouter,Route} from 'react-router-dom';

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



  /*render() {
    return (
      <div className="App">
            <BrowserRouter>
                <div>
                <LoginForm onLogin={this.onLogin} name="Some name" />
                <Route path='/admin' component={AdminComponent }/>
                </div>
            </BrowserRouter>

      </div>
    );
  } */
    render() {
        return (
            <div className="App">
               <Wines />
            </div>
        );
    }
}

export default App;

