import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';
import Error from './components/Error';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      prevQuery: "default"
    }
    this.searchFlickr = this.searchFlickr.bind(this)
  }

  searchFlickr(query = "helicopter") {
    this.setState({
      loading: true,
      prevQuery: query
    });
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        data: responseData.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      console.log('Data Fetching & Parsing Error |', error);
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Navigation onSearch={this.searchFlickr} />
          <Switch>

            <Route exact path="/" render={ () => <PhotoContainer onSearch={this.searchFlickr} loading={this.state.loading} data={this.state.data} urlQuery={"helicopter"} prevQuery={this.state.prevQuery} /> } />
            <Route exact path="/:subject" render={ ( {match} ) => <PhotoContainer onSearch={this.searchFlickr} loading={this.state.loading} data={this.state.data} urlQuery={match.params.subject} prevQuery={this.state.prevQuery} /> } />
            <Route exact path="/search/:query" render={ ({match}) => <PhotoContainer onSearch={this.searchFlickr} loading={this.state.loading} data={this.state.data} urlQuery={match.params.query} prevQuery={this.state.prevQuery} /> } />

            <Route component={Error} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
