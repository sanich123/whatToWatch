import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import store from './store/store';
import { Provider } from 'react-redux';
import StartApp from './components/startapp/startapp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StartApp />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
