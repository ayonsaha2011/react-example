import React from 'react';
import LoginForm from './LoginForm';
import FlashMessagesList from '../flash/FlashMessagesList';

class LoginPage extends React.Component {
  render() {
    document.title = "Eazyfyi - Login";
    document.body.classList = "login-page";
    return (
	    <div className="login-box">
	       <FlashMessagesList />
	        <div className="logo">
	            <a href="javascript:void(0);"><b>Eazyfyi</b></a>
	            <small>Makes life eazy</small>
	        </div>
	        <div className="card">
	            <div className="body">
	                <LoginForm />
	            </div>
	        </div>
	    </div>
    );
  }
}

export default LoginPage;
