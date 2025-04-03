import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLbfZo8EWhZF_4eCb_INDGhIUPiCvvylE",
  authDomain: "willian-lomeu.firebaseapp.com",
  databaseURL: "https://willian-lomeu.firebaseio.com",
  projectId: "willian-lomeu",
  storageBucket: "willian-lomeu.appspot.com",
  messagingSenderId: "1072125614052",
  appId: "1:1072125614052:web:20cfbb76a972585f2719f1",
  measurementId: "G-KBBHTGESBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
