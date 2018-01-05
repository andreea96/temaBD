import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {Fade, Flip,Rotate,Zoom} from 'react-reveal';
import Header from "./Components/Header";
import App from "./App";
import {BrowserRouter,Switch} from 'react-router-dom';


ReactDOM.render(
    (<div>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </div>),
    document.getElementById('root')
);

registerServiceWorker();
//<App/>
