import React from 'react';
import SearchForm from './SearchForm';
import {NavLink} from 'react-router-dom';

const Nav = props => {
    
    let searchTag = e => {
        props.onSearch(e.target.innerText);
    }
    
    return (
         <nav className="main-nav">
            <SearchForm onSearch={props.onSearch} match={props.match} history={props.history}  />
                <ul>
                    <li><NavLink to={'/cats'}  activeClassName='active' onClick={searchTag}>Cats</NavLink></li>
                    <li><NavLink to={'/dogs'} activeClassName='active' onClick={searchTag}>Dogs</NavLink></li>
                    <li><NavLink to={'/birds'} activeClassName='active' onClick={searchTag}>Birds</NavLink></li>
                </ul>
         </nav>
    
    );
 

}
    

export default Nav;


