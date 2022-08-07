import {Component, lazy, Suspense} from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "./hoc/withRoute";
import {initializeAppThunk} from "./redux/app-reducer";
import Preloader from "./components/common/preloader";

const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));

class App extends Component {

    componentDidMount() {
        this.props.initializeAppThunk();
    }

    render() {
        if (!this.props.initialized) {
            return <>Загрузка, подождите...<Preloader/></>
        } else {
            return (
                <BrowserRouter>
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <main className='main'>
                            <Sidebar/>
                            <Suspense fallback={<Preloader/>}>
                                <Routes>
                                    <Route path='/*' element={<ProfileContainer/>}/>
                                    <Route path='/profile/' element={<ProfileContainer/>}/>
                                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                                    <Route path='/login' element={<Login/>}/>
                                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                                    <Route path='/news' element={<News/>}/>
                                    <Route path='/Music' element={<Music/>}/>
                                    <Route path='/users' element={<UsersContainer/>}/>
                                    <Route path='/settings' element={<Settings/>}/>
                                </Routes>
                            </Suspense>
                        </main>
                    </div>
                </BrowserRouter>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunk})
)(App)