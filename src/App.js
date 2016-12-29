import React, {Component} from 'react';
import logo from './logo.svg';
import picture from './picture.png';
import LiftSideBar from './containers/LiftSideBar/LiftSideBar';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LiftSideBar />
                <div className="App-header">
                    <img src={picture} alt="logo"/>
                    <h2>A React Animate App</h2>
                </div>
            </div>
        );
    }
}

export default App;
