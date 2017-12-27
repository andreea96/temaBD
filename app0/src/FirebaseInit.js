/**
 * Created by andreea.olaru on 11/23/2017.
 */

import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDtm3zQ7MX5JPSg4d0ZNXKVmaihL49l3gM",
    authDomain: "rovinieta-7da5f.firebaseapp.com",
    databaseURL: "https://rovinieta-7da5f.firebaseio.com",
    projectId: "rovinieta-7da5f",
    storageBucket: "rovinieta-7da5f.appspot.com",
    messagingSenderId: "834948493809"
};

export default function () {
    firebase.initializeApp(config);

}
