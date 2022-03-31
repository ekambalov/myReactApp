import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, updateNewPostChange} from './redux/state'

export let renderEntireTrie = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App data={state} 
      addPost={addPost} 
      updateNewPostChange={updateNewPostChange} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

