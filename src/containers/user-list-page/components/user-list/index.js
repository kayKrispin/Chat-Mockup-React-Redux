import React, { Component } from 'react';
import { users } from '../../../../actions/user';
import { connect } from 'react-redux';
import UserItem from '../user-item';

class UserListPage extends Component {

componentDidMount(){
  this.props.users()
}

handleChoose(item){
  console.log(item)
}

render() {

const { first_name, avatar  } = this.props.user;
const { users } = this.props.userList;
console.log(users)

    return (
    <div>
      <div className="user-container">
        <div className="main-content">
          <div className="profile"><div className="wrap"><img src={avatar} alt=""/><p>{first_name}</p></div></div>
           <div className="search"><label htmlFor=""><i className="fas fa-search"></i></label><input placeholder='Search contacts...'  type="text"/></div>
            <div className="user-list">
            <ul >
              {users !==undefined  ? (
                  users.map((user, i) => {
                  return <UserItem  user={user} /> ;
          })
        ) : <h2>Loading...</h2>}
        </ul>
            </div>
      </div>
        <div className="side-section">
          <div className="user-header">{this.props.userChoosen !== undefined ?
            (<p><img src={this.props.userChoosen.avatar} alt=""/> {this.props.userChoosen.first_name}({this.props.userChoosen.email})
            <span ><i className="fas fa-phone"></i></span> </p>):null} </div>
        </div>
      </div>
    <div className='chat-fotter'>
      <input type="text" placeholder='Write your massage' className='chat-input'/>
        <button className='chat-btn' >Cmo</button>
      </div>
    </div>
    );
  }
}

const  mapStateToProps = (state) => ({
  user:state.user.user,
  userList:state.user,
  userChoosen:state.user.postSelected
});

export default connect(mapStateToProps, { users } )(UserListPage);
