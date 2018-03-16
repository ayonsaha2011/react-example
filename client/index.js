import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import cookie from 'react-cookie';

import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser, getCurrentUser } from './actions/authActions';

import routes from './routes';



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const is_logged_in = cookie.load('is_logged_in');
if (is_logged_in) {
  cookie.save('is_logged_in', true, { path: '/', maxAge: 36000 });
  setAuthorizationToken(cookie.load('access_token'));
  store.dispatch(setCurrentUser({user: true}));
  store.dispatch(getCurrentUser());
}
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));
