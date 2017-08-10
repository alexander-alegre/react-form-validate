import React from 'react';
import Nav from './Nav';


class App extends React.Component {
  render() {
    return(
      <div>
        <Nav/>
        <br/>
        <div className="jumbotron">
          <h1 className="display-3 text-center">ReactJS Form</h1>
          <hr className="my-4" />
          <p>This is a display of ReactJS using various libraries to do form validation. Cookies are used to save and display data.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/form" role="button">Start Now!</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;