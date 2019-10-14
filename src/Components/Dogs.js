import React, {Component} from 'react';

class Dogs extends Component {
    
    componentDidMount() {
      
        this.props.getDogs("dogs");
      
  }
  
    render() {
        return (
            <h2>Dog Results</h2>
    
        )  
    }
    
}

export default Dogs;