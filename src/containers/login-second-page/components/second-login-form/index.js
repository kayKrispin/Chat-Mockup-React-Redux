import React, { Component } from 'react';
import renderField from '../../../../components/input';
import image from '../../../../app.png';
import {BrowserRouter as Router,Switch, Route,Link} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const  validate = values => {
  const errors = {}
  if (!values.Password) {
    errors.Password = 'This field is required'
  } else if (values.Password.length < 6) {
    errors.Password = 'Must be 6 characters or less'
  } else if (!Number(values.Password))  {
    errors.Password = 'Must be a number'
  }
  if (!values.Email) {
    errors.Email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = 'Invalid email address'
  }

  return errors
}


class SecondLoginForm extends Component {

  handleChoose = values =>{
    console.log(values)
  }

  render() {
      const { handleSubmit, reset, load, submitting, pristine, initialValues } = this.props;
    return (
  <div className='forget'>
    <div className='mainBlock forget-main' >
      <div className="headerTop  login-second">
        <img src={image} alt=""/>
          <h1>Titus Talk</h1>
            </div>
              <div className="loginBox register">
                <h1>Log In </h1>
                <h3 className='confirm-phone' >Confirm your phone number</h3>
               <div className="container">
                <div className = 'row'>
                  <div className ='registerBox col-md-12'>
             <form onSubmit={handleSubmit(this.handleChoose)} >
      <div className="form-group regForm">
            <p>Please pass the two-factor authentication using your mobile phone, we will send you a sms with code. Please don`t share the code to anyone, but only use it on the Titus Global website to authenticate.</p>
     </div>
     <button type='submit' disabled={submitting} className='btn btn-primary btn-proceed ' >Proceed</button>
            </form>
              </div>
            </div>
          </div>

      <div className="container registerBoxBottom">
      <div className="row">
      <div className="col-md-12">
        <p>Already have an account?</p>
        <Link to="/login">Log in</Link>
          </div>
      </div>
      </div>
    </div>
  </div>
</div>
    );
  }

}

export default reduxForm({
  form: 'forget-form',
  destroyOnUnmount:false,
  forceOnUnRegisterUnmount:true,
  validate
})(SecondLoginForm)
