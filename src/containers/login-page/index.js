import React, { Component } from 'react';
import LoginForm from './components/login-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  Redirect } from 'react-router-dom';



class LoginPage extends Component {

componentWillReceiveProps(nextProps){

  if(nextProps.user){
  
    this.props.history.push('dashboard')
  }
}

render() {
  console.log(this.props)
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    user:state.user.user
  }
}

export default withRouter(connect(mapStateToProps)(LoginPage));
