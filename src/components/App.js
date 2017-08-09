import React from 'react';
import Nav from './Nav';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onSubmit(data) {
    console.log(data);
  }

  handleErrors(errors) {
    console.log(`You have ${errors.length} error(s) to fix`);
  }

  render() {
    return(
      <div>
        <Nav/>
      </div>
    );
  }
}

export default App;