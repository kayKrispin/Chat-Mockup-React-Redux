import React, { Component } from 'react';
import renderField from '../../../components/input';
import image from '../../../app.png';
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


class ForgetPasswordForm extends Component {

  handleChoose = values =>{
    console.log(values)
  }

  render() {
      const { handleSubmit, reset, load, submitting, pristine, initialValues } = this.props;
    return (
  <div className='forget'>
    <div className='mainBlock forget-main' >
      <div className="headerTop forget-header">
        <img src={image} alt=""/>
          <h1>Titus Talk</h1>
            </div>
              <div className="loginBox register">
                <h1>Password recovery</h1>
               <div className="container">
                <div className = 'row'>
                  <div className ='registerBox col-md-12'>
             <form onSubmit={handleSubmit(this.handleChoose)} >
      <div className="form-group regForm">
          <Field  name="Email" icon={'fas fa-at'}  type="text" label='Email' component={renderField}/>
     </div>
     <button type='submit' disabled={submitting} className='btn btn-primary'>Send</button>
            </form>
              </div>
            </div>
          </div>

      <div className="container registerBoxBottom">
      <div className="row">
      <div className="col-md-12">
        <Link to="/login">Back to login</Link>
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
})(ForgetPasswordForm)
