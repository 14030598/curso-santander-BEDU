import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './scss/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
serviceWorker.register();