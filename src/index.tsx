import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {setupStore} from './store/store';
import { Provider } from 'react-redux';
import StartApp from './components/startapp/startapp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <StartApp />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
