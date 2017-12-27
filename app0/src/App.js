import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import LoginForm from "./LoginForm";
import firebaseInit from './FirebaseInit';
//import MyRouter from './Routes_config';
import AdminComponent from './AdminComponent';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {

    state={
        users: []
    };

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

 componentDidMount(){

     fetch('http://192.168.33.101:3001/users')
         .then(res => res.json())
         .then(users => this.setState({ users }));

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
                <h1>Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                )}
            </div>
        );
    }
}

export default App;

