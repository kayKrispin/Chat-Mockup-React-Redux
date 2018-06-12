import { USER_LOGIN, USER_LOGGED_OUT, REQUEST_SEND, REQUEST_ERROR, SEND_SESSION_KEY, SAVE_USER, FETCH_USERS, POST_SELECTED } from "../constans/actions";
import { fetchUser } from "../api/user";
import { fetchUsers } from "../api/user";


export const userLoggedIn = user => ({
  type: USER_LOGIN,
  user
});

export const fetchUserss = users=> ({
  type:FETCH_USERS,
  users
})

const postSelected = postSelected =>({
 type:POST_SELECTED,
 postSelected
})

export const saveUser = user => ({
  type: SAVE_USER,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

const requestSend = () =>({
  type:REQUEST_SEND
});

export const  sendSessionKey = (key,user) =>({
  type:SEND_SESSION_KEY,
  key,
  user
});

const requestErrors = (err) =>({
  type:REQUEST_ERROR,
  err
});

export const login = credentials => dispatch =>
    fetchUser(credentials).then(credentials=>{
        dispatch(userLoggedIn(credentials));
});


export const logout = () => dispatch => {
  localStorage.removeItem('userName');
  dispatch(userLoggedOut ());
};


export const users = () => dispatch => {
  dispatch(requestSend);
 fetchUsers ()
    .then(users =>dispatch(fetchUserss(users))
    )
    .catch(err=>{dispatch(requestErrors(err)
    )});
}

export const postChosen = (post) => dispatch =>{
  dispatch(postSelected(post));
}
