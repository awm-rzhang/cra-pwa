import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import AppBar from './components/AppBar';
import SpeedDialTooltipOpen from './components/SpeedDial';
import Camera from './components/Camera';
import Home from './components/Home';
import ProductPage from './components/Product/Product';
import Bluetooth from './components/Bluetooth';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <HashRouter>
        <AppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/camera" element={<Camera />} />
          <Route exact path="/product" element={<ProductPage />} />
          <Route exact path="/bluetooth" element={<Bluetooth />} />
        </Routes>
        <SpeedDialTooltipOpen />
      </HashRouter>
    </>

  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
