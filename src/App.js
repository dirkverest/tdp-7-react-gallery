import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Components
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoContainer from './components/PhotoContainer';
import Error from './components/Error';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      errorMessage: "",
      defaultSubject: "helicopter",
      defaultPhotos: [],
      sunsetPhotos: [],
      waterfallPhotos: [],
      rainbowPhotos: [],
      photoSearch: []
    }
    this.searchFlickr = this.searchFlickr.bind(this);
    this.searchFor = this.searchFor.bind(this);
  }

  componentDidMount() {
    // Rerender search on forward and back buttons
    window.onpopstate = (e) => {
      this.searchUrlQuery();
    }
    // Check for search path
    this.searchUrlQuery();
    // Preload predefined photo collections
    Promise.all([
      this.searchFlickr(this.state.defaultSubject), 
      this.searchFlickr("sunset"), 
      this.searchFlickr("waterfall"), 
      this.searchFlickr("rainbow")])
    .then(data => {
      this.setState({
        defaultPhotos: data[0],
        sunsetPhotos: data[1],
        waterfallPhotos: data[2],
        rainbowPhotos: data[3],
        loading: false
      })
    })
    .catch(error => {
      console.log('Data Fetching & Parsing Error |', error);
      this.setState({
        error: true,
        errorMessage: `data Fetching & Parsing Error. ${error}. Try reloading the page or contact the page owner.`
      })
    });
  }

  // Fetch Flickr data
  searchFlickr(query) { 
    this.setState({
      error: false
    })
    let photoData =
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => responseData.photos.photo )
    .catch(error => {
      console.log('Data Fetching & Parsing Error |', error);
      this.setState({
        error: true,
        errorMessage: `data Fetching & Parsing Error. ${error}. Try reloading the page or contact the page owner.`
      })
    });
    return photoData;
  }

  // Fetch Flickr data based on URL derived query
  searchUrlQuery() {
    if (window.location.pathname.includes("search")) {
      this.setState({
        loading: true
      })
      this.searchFlickr(window.location.pathname.slice(8)).then(data => {
        this.setState({
          photoSearch: data,
          loading: false
        })
      })
      .catch(error => {
        console.log('Data Fetching & Parsing Error |', error);
        this.setState({
          error: true,
          errorMessage: `data Fetching & Parsing Error. ${error}. Try reloading the page or contact the page owner.`
        })
      });
    }
  }

  // Fetch Flickr data based on user input query
  searchFor(query) {
    this.setState({
      loading: true
    })
    this.searchFlickr(query).then(data => {
      this.setState({
        photoSearch: data,
        loading: false
      })
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm searchFor={this.searchFor} />
          <Navigation />
          <Switch>
            
            <Route exact path="/" render={ () => <PhotoContainer loading={this.state.loading} error={this.state.error} errorMessage={this.state.errorMessage} photoData={this.state.defaultPhotos} query={this.state.defaultSubject} prevQuery={this.state.prevQuery} /> } />

            <Route exact path="/sunset" render={ () => <PhotoContainer loading={this.state.loading} error={this.state.error} errorMessage={this.state.errorMessage} photoData={this.state.sunsetPhotos} query={"sunset"} /> } />
            <Route exact path="/waterfall" render={ () => <PhotoContainer loading={this.state.loading} error={this.state.error} errorMessage={this.state.errorMessage} photoData={this.state.waterfallPhotos} query={"waterfall"} /> } />
            <Route exact path="/rainbow" render={ () => <PhotoContainer loading={this.state.loading} error={this.state.error} errorMessage={this.state.errorMessage} photoData={this.state.rainbowPhotos} query={"rainbow"} /> } />

            <Route exact path="/search/:query" render={ ({match}) => <PhotoContainer loading={this.state.loading} error={this.state.error} errorMessage={this.state.errorMessage} photoData={this.state.photoSearch} query={match.params.query} /> } />
            
            <Route component={Error} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
