/*Gallery App
Key:
54088f91bf8f10a555ca0c6d5ac214e3

Secret:
9f5655188df906db*/



import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

import axios from 'axios';
import SearchForm from './Components/SearchForm';
import Cats from './Components/Cats';
import Dogs from './Components/Dogs';
import Computers from './Components/Computers';
import PhotoList from './Components/PhotoList';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    let match = this.props.match;
    this.state = {
        photos: [],
        loading: true,
    };
  }
    
  componentDidMount() {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=54088f91bf8f10a555ca0c6d5ac214e3&text=northernlights&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
                console.log(response);
                this.setState({
                    photos: response.data.photos.photo
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
                    photos: response.data.photos.photo
                })
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
  }
  
  render() {
     return (
        <BrowserRouter>
            <body>
            <div className='container'>
             <nav className="main-nav">
                    <Route path='/' render={({match, history}) => <SearchForm  onSearch={this.performSearch} match={match} history={history}/>} />
                    <ul>
                        <li><Link to='/cats'>Cats</Link></li>
                        <li><Link to='/dogs'>Dogs</Link></li>
                        <li><Link to='/computers'>Computers</Link></li>
                    </ul>
                </nav>
                <Route path='/cats' component={Cats} />
                <Route path='/dogs' component={Dogs} />
                <Route path='/computers' component={Computers} />
                <Route path='/:query' render={({match})=> <PhotoList data={this.state.photos} match={match} />} />
            </div>
            </body>
        </BrowserRouter>
        
     );

  }
}



