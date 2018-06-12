import React, { Component } from 'react';
import { postChosen } from '../../../../actions/user';
import { connect } from 'react-redux';

class UserItem extends Component {

handleChoose(item){
  this.props.postChosen(item)
  console.log(item)
}

  render() {

const { avatar, email, first_name,  id} = this.props.user;
    return (
  <div  >
    <li  onClick={()=>{this.handleChoose(this.props.user)}} key={id}>
      <div className="wrapper">
        <span></span>
        <img src={avatar} alt=""/>
        <div className="preview">
          <p className='name'>{first_name} </p>
          <p className='email'>{email}</p>
        </div>
      </div>
    </li>
 </div>
);
  }
}



export default connect(null, { postChosen })(UserItem);
