import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Sidebar from './Sidebar.js'
import Body from './Body.js'
export default () => <div className="myPage">
  <Provider store={store}>
    <Sidebar />
    <Body />
  </Provider>
</div>
