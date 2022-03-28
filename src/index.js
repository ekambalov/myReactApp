import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let data = { postData: [
  {id1:0, message:"fuck you, russian warship!", likesCounter:1337},
  {id1:1, message:"Hellow, world", likesCounter:10},
  {id1:2, message:"It's my first post", likesCounter:0},
  {id1:3, message:"fuck", likesCounter:0},
  {id1:4, message:"fuck", likesCounter:0}
],
dialogsData : [
  {id: 1, name: "Zmicer"},
  {id: 2, name: "Jahor"},
  {id: 3, name: "Julia"},
  {id: 4, name: "Mikita"},
  {id: 5, name: "Hanna"}
],
messagesData : [
  {id:1, message: 'Hi!'},
  {id:2, message: 'How are you?'},
  {id:3, message: 'wtf, man?!'},
  {id:4, message: 'it\'s not of your busnisses'},
  {id:5, message: 'yo'}
]
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
