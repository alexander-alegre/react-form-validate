import React from 'react';
import Nav from './Nav';


class App extends React.Component {
  render() {
    return(
      <div className="container">
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
        <div className="row">
          <div className="card col-sm-12 col-md-6">
            <div className="card-block">
              <h3 className="card-title">Project by Alexander Alegre</h3>
              <p className="card-text">Code is hosted on GitHub follow the link to see.</p>
              <a href="https://github.com/alexander-alegre/react-form-validate" className="btn btn-primary" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>&nbsp;
              See Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;