/*Gallery App
Key:
54088f91bf8f10a555ca0c6d5ac214e3

Secret:
9f5655188df906db*/



import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';


import Home from './Components/Home';
import Cats from './Components/Cats';
import Dogs from './Components/Dogs';
import Computers from './Components/Computers';

const App = () => (
    <BrowserRouter>
        <body>
        <div className='container'>
            <Home />
            <Route path='/cats' component={Cats} />
            <Route path='/dogs' component={Dogs} />
            <Route path='/computers' component={Computers} />
        </div>
        </body>
    </BrowserRouter>
        
);

export default App;


