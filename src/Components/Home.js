import React, {Component} from 'react';
import SearchForm from './SearchForm';
import '../index.css';
import axios from 'axios';
import Cats from './Cats';
import Dogs from './Dogs';
import Computers from './Computers';
import {Link} from 'react-router-dom';


export default class Home extends Component {
  
  constructor() {
    super();
    this.state = {
        gifs: [],
        loading: true
    };
  }
    
  componentDidMount() {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=54088f91bf8f10a555ca0c6d5ac214e3&text=northernlights&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
                console.log(response);
                this.setState({
                    gifs: response.data.photos.photo
                })
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
      
  }

  performSearch = (query) => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=54088f91bf8f10a555ca0c6d5ac214e3&text=${query}&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
                console.log(response);
                this.setState({
                    gifs: response.data.photos.photo
                })
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }
    
  render() {
       console.log(this.state.gifs);
     return (
        <div>
            <nav className="main-nav">
                <SearchForm onSearch={this.performSearch} />
                <ul>
                    <li><Link to='/cats'>Cats</Link></li>
                    <li><Link to='/dogs'>Dogs</Link></li>
                    <li><Link to='/computers'>Computers</Link></li>
                </ul>
            </nav>
        </div>
      ); 
  }
  
}

