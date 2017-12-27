import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./App";
import Header from "./Header";
import Router from './Routes_config';
import LoginForm from "./LoginForm";
import AuthExample from './Auth';



//import SignIn from "./SignIn";

//ReactDOM.render(<SignIn />, document.getElementById('root'));


ReactDOM.render(
    (<div><Header/><App /></div>),
    document.getElementById('root')
);

registerServiceWorker();

