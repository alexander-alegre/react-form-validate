import React from 'react';
import Nav from './Nav';
import { read_cookie, delete_cookie } from 'sfcookies';


class Data extends React.Component {
  handleDelete = () => {
    delete_cookie('userObj');
    this.props.history.push({
      pathname: '/form',
    });
  }

  render() {
    const userData = read_cookie('userObj');
    console.log(userData);

    return (
      <div>
        <Nav />
        <br/>
        {
          userData.name 
          ?
            <div className="card">
              <img className="mx-auto d-block col-lg-4 col-md-6 col-sm-8" src="./user.png" alt="User Image" />
              <div className="card-block">
                <h4 className="card-title text-center">
                  <div className="card-block">
                    <h1 className="card-title">{userData.name}</h1>
                    <p className="card-text">
                      {
                        userData.subscribed 
                        ?
                          <span>{userData.name} is subscribed!</span>
                        :
                          <span>{userData.name} is not subscribed..</span>
                      }
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      &nbsp;
                      <a href={`mailto:${userData.email}`}>{userData.email}</a>
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-link" aria-hidden="true"></i>
                      &nbsp;
                      <a href={userData.website} target="_blank">{userData.website}</a>
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      &nbsp;
                      {userData.dob}
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-user-o" aria-hidden="true"></i>
                      &nbsp;
                      {userData.gender}
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      &nbsp;
                      {userData.rating}
                    </li>
                  </ul>
                  <div className="card-block">
                    <button type="button" onClick={e => this.handleDelete(e)} className="btn btn-danger">Delete</button>
                  </div>
                </h4>
              </div>
            </div>
          :
            <div className="jumbotron">
              <h1 className="display-3">Nothing here yet..</h1>
              <p className="lead">You need to fill out the <a href="/form">form</a> in order to see the card.</p>
              <p className="lead">
                <a onClick={e => this.handleDelete(e)} className="btn btn-primary btn-lg" href="/form">Create Card</a>
              </p>
            </div>
        }
      </div>
    );
  }
}

export default Data;