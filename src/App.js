import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {


  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route path='/profile' element={<Profile data={props.data.profilePage} addPost={props.addPost} />}/>
          <Route path='/dialogs/*' element={<Dialogs data={props.data.dialogsPage} />}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}




export default App;
