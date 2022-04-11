import React from 'react';
import store from './redux/state'
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let renderEntireTrie = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App data={state} 
      addPost={store.addPost.bind(store)} 
      updateNewPostChange={store.updateNewPostChange.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

renderEntireTrie(store.getState());
store.subscribe(renderEntireTrie)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
