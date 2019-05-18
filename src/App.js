import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/home'
import Search from './components/search'

class BooksApp extends React.Component {
  render(){
    return(
      <Router>
        <div className="app">
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
        </div>
      </Router>
    );
  }
};
export default BooksApp;
