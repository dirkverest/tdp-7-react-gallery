import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: null
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          
          <Route path="/">
            <SearchForm />
            <Navigation />
          </Route>
          <Switch>
            <Route path="/newyork" component="PhotoContainer" />
            <Route path="/mahattan" component="PhotoContainer" />
            <Route path="/soho" component="PhotoContainer" />
          </Switch>
          <PhotoContainer />

        </div>
      </Router>
    );
  }
}

export default App;
