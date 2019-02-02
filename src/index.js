import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as serviceWorker from './serviceWorker';
import App from './App';
ReactDOM.render(<MuiThemeProvider>
  <App />
</MuiThemeProvider>, document.getElementById('root'));


serviceWorker.unregister();
