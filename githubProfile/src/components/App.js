import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Sidebar from './Sidebar.js'
import Repos from './Repos.js'
import SearchBar from './SearchBar.js'
import Links from './Links.js'
export default () => <div className="myPage">
  <Provider store={store}>
    <Sidebar />
    <div className="myContent">
      <Links />
      <SearchBar />
      <Repos />
    </div>
  </Provider>
</div>
