import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../../../components/input';
import RegistrationPage from '../../../registration-page';
import { BrowserRouter as Router,Switch, Route,Link } from 'react-router-dom';
import IconInput from '../../../../components/input';
import image from '../../../../app.png';
import { login, logout }  from '../../../../actions/user';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import history from '../../../../history';



const  validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'This field is required'
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or less'
  }
  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}


class LoginForm extends Component {

  handleLogin = values =>{
      this.props.login(values)


  }
  handleLogout = () =>{
      this.props.logout()
  }


  render() {

console.log(this.props)
      const { handleSubmit, reset, load, submitting, pristine, initialValues,error} = this.props;
  return (
    <div className='mainBlock' >
    <div className="headerTop">
    <img src={image} alt=""/>
      <h1>Titus Talk</h1>
    </div>
      <div className="loginBox">
          { !this.props.user   ?  (<h1>Log In</h1>) : (<h1>Wellcome  {this.props.user.first_name} </h1>)}
          {error && <div>Hello there</div>}
          <p>Titus Talk can only be connected to the services authorized by Titus</p>
          <div className="boxBody">
         {!this.props.user ? (<form onSubmit={handleSubmit(this.handleLogin)} >
    <div className="form-group">
      <Field  name="email" icon={'fas fa-at'}  type="text" label='Email' component={renderField}/>
    </div>
    <div className="form-group">
          <Field  name="password" icon= {'fas fa-lock'} type="text" label='Password' component={renderField}/><br/>
     </div>
      < button type='submit' disabled={submitting} className='btn btn-primary'>Login</button>
            </form>) : (< button  disabled={submitting} onClick={()=>{this.handleLogout()}} className='btn btn-primary'>Logout</button>) }
          </div>
      <div className="boxBottom">
        <p>Do you have an account yet?</p>
        <Link to = '/registration' exact component={RegistrationPage}>Register an account</Link>
        <Link to="/forget_password">Forgot password</Link>

      </div>
    </div>
  </div>

)
  }

}




export default compose(
	connect((state, mapStateToProps) => ({

    user:state.user.user,
    key:state.user.key
  }), { login,logout }),
	reduxForm({
		form: 'login-form',
		enableReinitialize: true,
    destroyOnUnmount : false,
    validate
	})
)(LoginForm);
