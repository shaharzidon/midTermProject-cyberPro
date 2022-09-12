import React from 'react';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Contact from "./Contact/Contact"
import Contribute from "./ContributeComponent/Contribute";
import MainNav from './navbarComponents/Topnavbar';

import './App.css';
import BookStep2 from './bookComponent/Book-step2';
import BookStep1 from './bookComponent/BookStep1';
import BookStep3 from './bookComponent/Book-step3';
import BookStep4 from './bookComponent/Book-step4';
import JoinUs from './components_joinUs/JoinUs'
import Mapsection from './components_mapSection/Mapsection';
import OurStory from './component_ourStory/OurStory'
import EndSection from './components_endSection/EndSection';
import Faq from './component_faq/Faq';
import { Provider } from 'react-redux';
import store from './store';
import FirstSection from './components_firstSection/FirstSection';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<App></App>



 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

