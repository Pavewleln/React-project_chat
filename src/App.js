import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <main className='main'>
                    <Sidebar/>
                    <Routes>
                        <Route path='/' element={<Profile/>}/>
                        <Route path='/Profile' element={<Profile/>}/>
                        <Route path='/Dialogs' element={<Dialogs/>}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};
export default App;