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
      data: null
    }
    this.performSearch = this.performSearch.bind(this);
  }

  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&tags=sunset&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        data: responseData.photos.photo
      });
      console.log(this.state.data)
    })
    .catch(error => {
      console.log('Data Fetching & Parsing Error |', error);
    })
  }

  performSearch(search) {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${search}&tags=sunset&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        data: responseData.photos.photo
      });
      console.log(this.state.data)
    })
    .catch(error => {
      console.log('Data Fetching & Parsing Error |', error);
    })
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
          <PhotoContainer data={this.state.data} />

        </div>
      </Router>
    );
  }
}

export default App;
