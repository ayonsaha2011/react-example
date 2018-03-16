import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
// import jwtDecode from 'jwt-decode';
import cookie from 'react-cookie';
import { SET_CURRENT_USER, API_BASE_URL } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    cookie.remove('is_logged_in', { path: '/', maxAge: 36000 });
    cookie.remove('access_token', { path: '/'});
    // localStorage.removeItem('access_token');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post(API_BASE_URL+'/auth/login', data).then(res => {
      const data = res.data;
      const token = data.data.login_token;
      if (data.status == "success") {
        cookie.save('is_logged_in', true, { path: '/', maxAge: 36000 });
        cookie.save('access_token', token, { path: '/'});
        setAuthorizationToken(token);
        dispatch(setCurrentUser(data.data));
      }
    });
  }
}

export function getCurrentUser() {
  return dispatch => {
    return axios.get(API_BASE_URL+'/user/getCurrentUser')
          .then(res => {
            dispatch(setCurrentUser(res.data));
          })
          .catch(error => {
            console.log(error);
            cookie.remove('is_logged_in', { path: '/', maxAge: 36000 });
            cookie.remove('access_token', { path: '/'});
            setAuthorizationToken(false);
            dispatch(setCurrentUser({}));
          });
    
  }
}
