import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Task from './components/Task';
import Notes from './components/Notes';
import Category from './components/Category';
import Address from './components/Address';
import Tags from './components/Tags';
import Landing from './components/Landing';
import User from './components/User';

import './App.css';
class RouteMap extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' component={Landing}/>
          <Route path='/user' component={User} />  
          <Route path="home" component={Layout}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default RouteMap;
