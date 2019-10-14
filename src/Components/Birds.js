import React, {Component} from 'react';

class Birds extends Component {
    
    componentDidMount() {
      
        const x = this.props.getBirds("birds");
      
  }
  
    render() {
        return (
            <h2>Bird Results</h2>
    
        )  
    }
    
}

export default Birds;