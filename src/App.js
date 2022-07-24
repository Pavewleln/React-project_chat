import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <main className='main'>
                    <Sidebar/>
                    <Routes>
                        <Route path='/' element={<ProfileContainer />}/>
                        <Route path='/Profile' element={<ProfileContainer/>}/>
                        {/*<Route path='/' element={<Profile*/}
                        {/*    posts={props.state.profilePage.posts}*/}
                        {/*    newPostText={props.state.profilePage.newPostText}*/}
                        {/*    dispatch={props.dispatch}/>}/>*/}
                        {/*<Route path='/Profile' element={ <Profile*/}
                        {/*    posts={props.state.profilePage.posts}*/}
                        {/*    newPostText={props.state.profilePage.newPostText}*/}
                        {/*    dispatch={props.dispatch}/>}/>*/}
                        <Route path='/Dialogs' element={<DialogsContainer store={props.store}/>}/>
                        {/*<Route path='/Dialogs' element={<Dialogs*/}
                        {/*    state={props.state.dialogsPage}*/}
                        {/*    newMessage={props.state.dialogsPage.newMessage}*/}
                        {/*    dispatch={props.dispatch}/>}/>*/}
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Users' element={<UsersContainer store={props.store}/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};
export default App;