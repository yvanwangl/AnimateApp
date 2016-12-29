import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

injectTapEventPlugin();
const AppContainer = ()=>(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);
ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
);
