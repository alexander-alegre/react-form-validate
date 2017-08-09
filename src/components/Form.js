import React from 'react';

import Nav from './Nav';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName = '',
      emailAddress = '',
      website = '',
      dob = '',
      gender = '',
      rating = 0,
      subscribe = false,
    }
  }

  // add classes to form depending if valdiation passed or not
  // has-success
  // has-warning
  // has-danger

  validateName() {
    // needs to only contain letters and has to be set
  }
  validateEmail() {
    // needs to be a valid email and has to be set
  }
  validateWebsite() {
    // needs to be a valid website and has to be set
  }
  validateDOB() {
    // needs to be a valid date and has to be set
  }
  validateGender() {
    // needs to be either male, female or other and has to be set
  }
  validateRating() {
    // needs to be a number between 1 and 5 and has to be set
  }

  render() {
    return(
      <div>
        <Nav />
        <br/>
        <h3 className="text-center">All Fields Are Required</h3>
        <hr />
        <form className="col-12 col-md-6">
          {/* name */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input onChange={this.validateName} type="text" className="form-control" id="fullName" aria-describedby="name-help" /*required*/ />
            <small id="name-help" className="form-text text-muted">This field is required, only letters allowed.</small>
          </div>
          {/* email */}
          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input onChange={this.validateEmail} type="email" className="form-control" id="emailAddress" aria-describedby="email-help" /*required*/ />
            <small id="email-help" className="form-text text-muted">This field is required, has to be a valid email.</small>
          </div>
          {/* website */}
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input onChange={this.validateWebsite} type="url" className="form-control" id="website" aria-describedby="website-help" /*required*/ />
            <small id="website-help" className="form-text text-muted">This field is required, has to be a valid URL.</small>
          </div>
          {/* date of birth */}
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input onChange={this.validateDOB} type="date" className="form-control" id="dob" aria-describedby="dob-help" /*required*/ />
            <small id="dob-help" className="form-text text-muted">This field is required</small>
          </div>
          {/* gender */}
          <fieldset className="form-group">
            <legend className="">Gender</legend>
            <div className="form-check">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" name="gender" id="gender" value="male" checked />
                <i className="fa fa-male" aria-hidden="true"></i> Male
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" name="genderRadio" id="genderRadio" value="female" />
                <i className="fa fa-female" aria-hidden="true"></i> Female
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" name="genderRadio" id="genderRadio" value="other" />
                <i className="fa fa-code" aria-hidden="true"></i> Other
              </label>
            </div>
          </fieldset>
          {/* Rate the form */}
          <div className="form-group">
            <label htmlFor="rateForm">Rate this Form</label>
            <select id="rateForm" className="form-control">
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
            <small className="form-text text-muted">5 being the highest</small>
          </div>
          {/* subscribe button */}
          <div className="form-check">
            <label htmlFor="" className="form-check-label">
              <input type="checkbox" className="form-check-input" value="newsletterTrue" checked/>
              <i className="fa fa-envelope" aria-hidden="true"></i> Subscribe!
            </label>
            <small className="form-text text-muted">Subscribe to our newsletter.</small>
          </div>
          <button className="btn btn-primary">Submit!</button>
        </form>
      </div>
    );
  }
}

export default Form;