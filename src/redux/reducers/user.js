import { USER_LOGIN, USER_LOGGED_OUT, REQUEST_ERROR, REQUEST_SEND, SEND_SESSION_KEY, SAVE_USER, FETCH_USERS , POST_SELECTED } from '../../constans/actions';

const defaultState = {
  loading: false,
  key:{},
  data:{},
  credentials:{},
  users:{}
};

export default function user( state = defaultState, action = {} ){
    switch(action.type){
      case REQUEST_SEND:
          return Object.assign({}, state, { loading:true});
      case REQUEST_ERROR:
          return Object.assign({}, state, { loading:false, error : action.err});
      case USER_LOGIN:
          return Object.assign({}, state,  action.user);
      case SEND_SESSION_KEY:
          return Object.assign({}, state,   { user:action.user,  key: action.key });
      case SAVE_USER:
          return Object.assign({}, state,   { user:action.user });
      case FETCH_USERS:
          return Object.assign({}, state,  {users: action.users} );
          case POST_SELECTED:
        return Object.assign({},state, { loading:false, postSelected:action.postSelected});
      case USER_LOGGED_OUT:
          return {}
      default:
          return state
      }
    }
