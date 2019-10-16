/*Gallery App
Key:
54088f91bf8f10a555ca0c6d5ac214e3

Secret:
9f5655188df906db*/



import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    NavLink,
    Redirect
} from 'react-router-dom';

import axios from 'axios';
import SearchForm from './Components/SearchForm';
import Cats from './Components/Cats';
import Dogs from './Components/Dogs';
import Birds from './Components/Birds';
import PhotoList from './Components/PhotoList';

export default class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
        photos: [],
        loading: true,
    };
  }
    
  componentDidMount() {
    
    
  }

  performSearch = (query) => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=54088f91bf8f10a555ca0c6d5ac214e3&text=${query}&per_page=24&format=json&nojsoncallback=1`)
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
      console.log(this.state.loading);
     return (
        
            <body>
            <div className='container'>
             <nav className="main-nav">
                    <Route path='/' render={({match, history}) => <SearchForm  onSearch={this.performSearch} match={match} history={history}/>} />
                    <ul>
                        <li><NavLink to='/cats' activeClassName='active'>Cats</NavLink></li>
                        <li><NavLink to='/dogs' activeClassName='active'>Dogs</NavLink></li>
                        <li><NavLink to='/birds' activeClassName='active'>Birds</NavLink></li>
                    </ul>
                </nav>
                <Route exact path='/' render={()=> <Redirect to='/cats' />} />
                <Route path='/cats' render={()=> <Cats getCats={this.performSearch}  />} />
                <Route path='/dogs' render={()=> <Dogs getDogs={this.performSearch}  />} />
                <Route path='/birds' render={()=> <Birds getBirds={this.performSearch}  />} />
                
                {
                    
                    (this.state.loading)
                    ?<p>Loading...</p>
                    : <Route path='/:query' render={({match})=> <PhotoList data={this.state.photos} match={match} loading={this.state.loading} 
                getPictures={this.performSearch} />} />
                    
                }
      
            </div>
            </body>
       
        
     );

  }
}




