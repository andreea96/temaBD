import React from 'react';
import ReactDOM from 'react-dom';
//import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
//import App from "./App";

//import Header from "./Components/Header";
import {Fade, Flip,Rotate,Zoom} from 'react-reveal';
import Header from "./Components/Header";
import ModalExample from "./Example";


ReactDOM.render(
    (<div>
        <Header/>
        <br />
        <ModalExample/>
    </div>),
    document.getElementById('root')
);

registerServiceWorker();
//<App/>
