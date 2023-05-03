import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  me  from './mypic3.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

var data = {
  name: "Malcolm Thompson",
  imgURL: me,
  hobbyList: ['Back-end Web Development',
              'Trading',
              'Martial Arts',
            ]
};



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default data;