import React from 'react';
import { validString, validBool, validDateFormat } from 'form-validations';
import isEmail from 'is-email';
import validUrl from 'valid-url';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import Nav from './Nav';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      nameValid: false,
      emailAddress: '',
      emailValid: false,
      website: '',
      websiteValid: false,
      dob: '',
      dobValid: false,
      gender: 'male',
      genderValid: true,
      rating: 5,
      ratingValid: true,
      subscribe: false,
      // userObj: {
      //   "name": '',
      //   "email": '',
      //   "website": '',
      //   "dob": '',
      //   "gender": '',
      //   "rating": '',
      //   "subscribe": ''
      // },
      redirect: false,
    }
  }

  trimAndLower(str) {
    return str.trim().toLowerCase();
  }

  isInArray(arr, val) {
    return arr.indexOf(val.toLowerCase()) > -1;
  }

  showAlert(msg) {
    return Alert.error(msg, {
      position: 'bottom-right',
      effect: 'jelly',
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
  // name
  validateName = (name) => {
    // needs to only contain letters and has to be set
    const isString = validString('Not a string');
    const letters = /^[A-Za-z]+$/;
    if (name.target.value.trim().length > 1 && isString(name.target.value.trim()) && name.target.value.trim().match(letters)) {
      this.setState({ firstName: this.trimAndLower(name.target.value), nameValid: true }, () => {
        this.showValid('#name-input');
      });
    } else {
      this.showInvalid('#name-input', 'Name field is required and may only contain letters.');
      this.setState({ nameValid: false });
    }
  }
  // email
  validateEmail = (email) => {
    // can only be of type email and has to be set
    if(isEmail(email.target.value)) {
      this.setState({ emailAddress: email.target.value, emailValid: true }, () => {
        this.showValid('#email-input');
      });
    } else {
      this.showInvalid('#email-input','Email is required and has to be a valid email.')
      this.setState({ emailValid: false });
    }
  }
  // website
  validateWebsite = (url) => {
    // needs to be a valid website using https and has to be set
    if(validUrl.is_https_uri(url.target.value)) {
      this.setState({ website: url.target.value, websiteValid: true }, () => {
        this.showValid('#url-input');
      });
    } else {
      this.showInvalid('#url-input', 'URL is required and needs to have https.');
      this.setState({ websiteValid: false });
    }
  }
  // date of birth
  validateDOB = (dob) => {
    // needs to be a valid date and has to be set
    const isDate = validDateFormat('Not a valid date!');
    if (isDate(dob.target.value) && dob.target.value) {
      this.setState({ dob: dob.target.value, dobValid: true }, () => {
        this.showValid('#dob-input');
      });
    } else {
      this.showInvalid('#dob-input', 'Date is required and needs to be in date format');
      this.setState({ dobValid: false });
    }
  }
  // gender
  validateGender = (gender) => {
    // needs to be either male, female or other and has to be set
    const validGender = validString('That gender is not valid!');
    if (validGender(gender.target.value) && this.isInArray(['male', 'female', 'other'], gender.target.value)) {
      this.setState({ gender: gender.target.value, genderValid: true }, () => {
        this.showValid('#gender-input');
      });
    } else {
        this.showInvalid('#gender-input', 'Gender is required!');
        this.setState({ genderValid: false });
    }
  }
  // rating
  validateRating = (rating) => {
    // needs to be a number between 1 and 5 and has to be set
    const validNum = validString('That is not a number!');
    if(validNum(rating.target.value) && this.isInArray(['1','2','3','4','5'], rating.target.value)) {
      this.setState({ rating: rating.target.value, ratingValid: true }, () => {
        this.showValid('#rating-input');
      });
    } else {
        this.showInvalid('#rating-input', 'Rating is required and can only be between 1 and 5!');
        this.setState({ ratingValid: false });
    }
  }
  // subscribe button
  validateSubscribe = (sub) => {
    // can either be true or false but not required
    if (document.querySelector('#check-box').checked) {
      const validateCheckBox = validBool('This field can only be true or false');
      if (validateCheckBox(sub.target.value)) {
        this.setState({ subscribe: true }, () => {
        });
      }
    } else {
      this.setState({ subscribe: false });
    }

  }
  // submit form
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.nameValid && this.state.emailValid && this.state.websiteValid && this.state.dobValid && this.state.genderValid && this.state.ratingValid) {
      const userObj = 
        {
          "name": this.state.firstName,
          "email": this.state.emailAddress,
          "website": this.state.website,
          "dob": this.state.dob,
          "gender": this.state.gender,
          "rating": this.state.rating,
          "subscribe": this.state.subscribe
        }
      console.log(userObj);
      // redirect to /data and send userObj
        this.props.history.push('/data');

    } else {
      this.showInvalid('#submit-btn', 'Please make sure to fill out all required fields.');
    }
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
            <label htmlFor="firstName">First Name</label>
            <input onBlur={e => this.validateName(e)} type="text" className="form-control" id="firstName" aria-describedby="name-help" name="firstName" required />
            <small id="name-help" className="form-text text-muted">This field is required, only letters allowed.</small>
          </div>
          {/* email */}
          <div className="form-group" id="email-input">
            <label htmlFor="emailAddress">Email Address</label>
            <input onBlur={e => this.validateEmail(e)} type="email" className="form-control" id="emailAddress" aria-describedby="email-help" required />
            <small id="email-help" className="form-text text-muted">This field is required, has to be a valid email.</small>
          </div>
          {/* website */}
          <div className="form-group" id="url-input">
            <label htmlFor="website">Website</label>
            <input onBlur={e => this.validateWebsite(e)} type="url" className="form-control" id="website" aria-describedby="website-help" /*required*/ />
            <small id="website-help" className="form-text text-muted">This field is required, has to be a valid URL.</small>
          </div>
          {/* date of birth */}
          <div className="form-group" id="dob-input">
            <label htmlFor="dob">Date of Birth</label>
            <input onBlur={e => this.validateDOB(e)} type="date" className="form-control" id="dob" aria-describedby="dob-help" required />
            <small id="dob-help" className="form-text text-muted">This field is required</small>
          </div>
          {/* gender */}
          <fieldset className="form-group" id="gender-input">
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
                <i className="fa fa-genderless" aria-hidden="true"></i> Other
              </label>
            </div>
          </fieldset>
          {/* Rate the form */}
          <div className="form-group" id="rating-input">
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
          <div className="form-check" id="sub-input">
            <label htmlFor="" className="form-check-label">
              <input onBlur={e => this.validateSubscribe(e) } type="checkbox" className="form-check-input" value="true" id="check-box" />
              <i className="fa fa-envelope" aria-hidden="true"></i> Subscribe!
            </label>
            <small className="form-text text-muted">Subscribe to our newsletter.</small>
          </div>
          <button onClick={ e => this.handleSubmit(e) } className="btn btn-primary" id="submit-btn">Submit!</button>
        </form>
        <Alert stack={true} />
      </div>
    );
  }
}

export default Form;