import React, {Component} from 'react';

class Cats extends Component {
    
    componentDidMount() {
      
        this.props.getCats("cats");
      
  }
  
    render() {
        return (
            <h2>Cat Results</h2>
    
        )  
    }
    
}
 

export default Cats;