import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1FAUJ-H_YFPZA3WPiHleNJS_1m7I-hvg",
  authDomain: "final-react-js.firebaseapp.com",
  projectId: "final-react-js",
  storageBucket: "final-react-js.appspot.com",
  messagingSenderId: "1023471752106",
  appId: "1:1023471752106:web:347a7787f3b0f987a7d1d3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
