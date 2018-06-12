import React, { Component } from 'react';
import LoginPage from './containers/login-page';
import RegistrationPage from './containers/registration-page';
import ForgetPasswordPage from './containers/forget-password-page';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import HomePage from './containers/home-page';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginSecondPage from './containers/login-second-page';
import UserPage from './containers/user-list-page';

class App extends Component {
  render() {
    console.log(this.props)
    const { Email } = this.props;
    return (
      <div>
        <Route path='/login' exact component={LoginPage} />
        <Route path='/login/2fa' exact component={LoginSecondPage} />
        <Route path='/registration' exact component={RegistrationPage} />
        <Route path='/forget_password' exact component={ForgetPasswordPage} />
        { this.props.user ? (<Route path='/home' exact component={HomePage} />):(<Redirect to='/login' />) }
        <Route path='/dashboard' exact component={UserPage} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user:state.user.user
  }
}

export default  withRouter(connect(mapStateToProps)(App));
