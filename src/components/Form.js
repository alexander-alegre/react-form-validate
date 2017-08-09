import React from 'react';
import { validString, validBool, validDateFormat, validNumber } from 'form-validations';
import isEmail from 'is-email';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';

// optional - you can choose the effect you want 
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';


import Nav from './Nav';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      emailAddress: '',
      website: '',
      dob: '',
      gender: 'male',
      rating: 5,
      subscribe: false,
    }
  }

  trimAndLower(str) {
    return str.trim().toLowerCase();
  }

  showAlert(msg) {
    return Alert.error(msg, {
      position: 'bottom-right',
      effect: 'genie',
      beep: false,
      timeout: 2000,
      offset: 0,
      html: false
    });
  }

  showValid(id) {
    document.querySelector(id).classList.add('has-success');
    document.querySelector(id).classList.remove('has-danger');
  }

  showInvalid(id, msg) {
    document.querySelector(id).classList.remove('has-success');
    document.querySelector(id).classList.add('has-danger');
    this.showAlert(msg);
  }

  validateName = (name) => {
    // needs to only contain letters and has to be set
    const isString = validString('Not a string');
    const letters = /^[A-Za-z]+$/;
    if (name.target.value.trim().length > 1 && isString(name.target.value.trim()) && name.target.value.trim().match(letters)) {
      // condition passes
      this.setState({ fullName: this.trimAndLower(name.target.value) }, () => {
        this.showValid('#name-input');
      });
    } else {
      // conditions do not pass
      this.showInvalid('#name-input', 'Name field is required and may only contain letters.');
      // throw alert
    }
  }

  validateEmail = (email) => {
    if(isEmail(email.target.value)) {
      this.setState({ emailAddress: email.target.value }, () => {
        this.showValid('#email-input');
      });
    } else {
      this.showInvalid('#email-input','Email is required and has to be a valid email.')
    }

  }
  validateWebsite = (url) => {
    // needs to be a valid website and has to be set
    this.setState({ website: url.target.value }, () => {
      console.log(this.state.website);
    });
  }
  validateDOB = (dob) => {
    // needs to be a valid date and has to be set
    this.setState({ dob: dob.target.value }, () => {
      console.log(this.state.dob);
    });
  }
  validateGender = (gender) => {
    // needs to be either male, female or other and has to be set
    this.setState({ gender: gender.target.value }, () => {
      console.log(this.state.gender);
    });
  }
  validateRating = (rating) => {
    // needs to be a number between 1 and 5 and has to be set
    this.setState({ rating: rating.target.value }, () => {
      console.log(this.state.rating);
    });
  }
  validateSubscribe = (sub) => {
    // can either be true or false but not required
    this.setState({ subscribe: sub.target.value }, () => {
      console.log(this.state.subscribe);
    });
  }

  handleSubmit = (e) => {
    // get all data and redirect to data page
    e.preventDefault();
    console.log(
      this.state.fullName,
      this.state.emailAddress,
      this.state.website,
      this.state.dob,
      this.state.gender,
      this.state.rating,
      this.state.subscribe
    );
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
          <div className="form-group" id="name-input">
            <label htmlFor="fullName">Full Name</label>
            <input onBlur={e => this.validateName(e)} type="text" className="form-control" id="fullName" aria-describedby="name-help" name="fullName" /*required*/ />
            <small id="name-help" className="form-text text-muted">This field is required, only letters allowed.</small>
          </div>
          {/* email */}
          <div className="form-group" id="email-input">
            <label htmlFor="emailAddress">Email Address</label>
            <input onBlur={e => this.validateEmail(e)} type="email" className="form-control" id="emailAddress" aria-describedby="email-help" /*required*/ />
            <small id="email-help" className="form-text text-muted">This field is required, has to be a valid email.</small>
          </div>
          {/* website */}
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input onBlur={e => this.validateWebsite(e)} type="url" className="form-control" id="website" aria-describedby="website-help" /*required*/ />
            <small id="website-help" className="form-text text-muted">This field is required, has to be a valid URL.</small>
          </div>
          {/* date of birth */}
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input onBlur={e => this.validateDOB(e)} type="date" className="form-control" id="dob" aria-describedby="dob-help" /*required*/ />
            <small id="dob-help" className="form-text text-muted">This field is required</small>
          </div>
          {/* gender */}
          <fieldset className="form-group">
            <legend className="">Gender</legend>
            <div className="form-check">
              <label className="form-check-label">
                <input onBlur={e => this.validateGender(e)} type="radio" className="form-check-input" name="gender" id="gender" value="male" defaultChecked />
                <i className="fa fa-male" aria-hidden="true"></i> Male
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input onBlur={e => this.validateGender(e)} type="radio" className="form-check-input" name="gender" id="gender" value="female" />
                <i className="fa fa-female" aria-hidden="true"></i> Female
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input onBlur={e => this.validateGender(e)} type="radio" className="form-check-input" name="gender" id="gender" value="other" />
                <i className="fa fa-code" aria-hidden="true"></i> Other
              </label>
            </div>
          </fieldset>
          {/* Rate the form */}
          <div className="form-group">
            <label htmlFor="rateForm">Rate this Form</label>
            <select onBlur={ e => this.validateRating(e) } id="rateForm" className="form-control">
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
              <input onBlur={ e => this.validateRating(e) } type="checkbox" className="form-check-input" value="true"/>
              <i className="fa fa-envelope" aria-hidden="true"></i> Subscribe!
            </label>
            <small className="form-text text-muted">Subscribe to our newsletter.</small>
          </div>
          <button onClick={e => this.handleSubmit(e) } className="btn btn-primary">Submit!</button>
        </form>
        <Alert stack={true} />
      </div>
    );
  }
}

export default Form;