import React from 'react';

class Instructions extends React.Component {
  render() {
    return(
      <div className="col-md-6 hidden-md-down">
        <h4 className="display-3 text-center">Instructions</h4>
        {/* name */}
        <div className="list-group">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">First Name</h5>
              <small><i className="fa fa-asterisk text-danger" aria-hidden="true"></i> required</small>
            </div>
            <p className="mb-1">Field cannot contain any special symbols, numbers or spaces.</p>
            <small>Alexander</small>
          </a>
        </div>
        {/* email */}
        <div className="list-group">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Email Address</h5>
              <small><i className="fa fa-asterisk text-danger" aria-hidden="true"></i> required</small>
            </div>
            <p className="mb-1">Field has to be a valid email.</p>
            <small>you@mail.com</small>
          </a>
        </div>
        {/* website */}
        <div className="list-group">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Website</h5>
              <small><i className="fa fa-asterisk text-danger" aria-hidden="true"></i> required</small>
            </div>
            <p className="mb-1">URL has to be valid and has to use HTTPS.</p>
            <small>https://github.com/alexander-alegre</small>
          </a>
        </div>
        {/* Date of birth */}
        <div className="list-group">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Date of Birth</h5>
              <small><i className="fa fa-asterisk text-danger" aria-hidden="true"></i> required</small>
            </div>
            <p className="mb-1">Field has to be a valid date.</p>
            <small>01/01/1990</small>
          </a>
        </div>
        {/* gender */}
        <div className="list-group">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Gender</h5>
              <small><i className="fa fa-asterisk text-danger" aria-hidden="true"></i> required</small>
            </div>
            <p className="mb-1">Field is required.</p>
            <small>Male</small>
          </a>
        </div>
        {/* rating */}
        <div className="list-group">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Rating</h5>
              <small><i className="fa fa-asterisk text-danger" aria-hidden="true"></i> required</small>
            </div>
            <p className="mb-1">Number can only be between 1 and 5 and the field is required.</p>
            <small>1 - 5</small>
          </a>
        </div>
        {/* sub */}
        <div className="list-group">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Subscribe</h5>
            </div>
            <p className="mb-1">Not required, but feel free to subscribe!</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Instructions;