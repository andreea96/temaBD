/**
 * Created by andreea.olaru on 11/23/2017.
 */
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import * as firebase from 'firebase';
var Button = require ('react-bootstrap').Button;

export default class SignIn extends Component {
    constructor(){
        super();
    }



    onClick(e) {

            e.preventDefault();
            const auth = firebase.auth();
            auth.signInWithEmailAndPassword('andreeaolaruana@gmail.com', 'password');
    }


}
