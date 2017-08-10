import React from 'react';

import Nav from './Nav';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <Nav />

      </div>
    );
  }
}

export default Data;