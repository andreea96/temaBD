import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Wines from './Components/Wine';
import firebaseInit from './Components/FirebaseInit';
//import MyRouter from './Routes_config';


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

