/**
 * Created by andreea.olaru on 12/12/2017.
 */

import React, {Component} from 'react';
import * as firebase from 'firebase';

export default function (email,password) {
    console.log('in register');
        const auth=firebase.auth();
        auth.signInWithEmailAndPassword(email,password);


}


