import React from 'react';
import state, { subscribe } from './redux/state'
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, updateNewPostChange} from './redux/state'

const renderEntireTrie = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App data={state} 
      addPost={addPost} 
      updateNewPostChange={updateNewPostChange} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

renderEntireTrie(state);
subscribe(renderEntireTrie)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
