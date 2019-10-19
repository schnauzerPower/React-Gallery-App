/*Gallery App
Key:
54088f91bf8f10a555ca0c6d5ac214e3

Secret:
9f5655188df906db*/



import React, {Component} from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

import axios from 'axios';
import PhotoContainer from './Components/PhotoContainer';
import Nav from './Components/Nav';
import ApiKey from './config.js';

const key = ApiKey;

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        photos: [],
        loading: true
    };
  }
    
  componentDidMount() {
    //If no query has been manually entered into address bar, default to cat pictures
      
    if(this.props.location.pathname === '/') {
        this.performSearch("cats");
    }
    else {
        this.performSearch(this.props.location.pathname);
    }
    
   
  }

  performSearch = (query) => {
      this.setState({loading:true});
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
                this.setState({
                    photos: response.data.photos.photo,
                    loading: false
                })
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }
  
  
  render() {
      console.log("fuck")
      console.log(key);
      console.log("this")
     return (
            <div className='container'>
                <Route path='/' render={(props) => <Nav  onSearch={this.performSearch} {...props}/>} />
                <Route exact path='/' render={()=> <Redirect to='/cats' />} />
                {
                    //Create a loading message to as the pictures load
                    (this.state.loading)
                    ?<p>Loading...</p>
                    : <Route path='/:query' render={(props)=> <PhotoContainer data={this.state.photos} {...props} />}  /> 
                }
            </div>
     );

  }
}




