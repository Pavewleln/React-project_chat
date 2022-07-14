import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

const App = () =>{
  return (
    <div className="app-wrapper">
      <Header />
      <main className='main'>
        <Sidebar/>
        <Profile/>
      </main>
    </div>
  );
};
export default App;