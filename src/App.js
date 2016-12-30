import React, {Component} from 'react';
import LiftSideBar from './containers/LiftSideBar/LiftSideBar';
import MainContent from './containers/MainContent/MainContent';
import RightSideBar from './containers/RightSideBar/RightSideBar';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LiftSideBar />
                <MainContent />
                <RightSideBar />
            </div>
        );
    }
}

export default App;
