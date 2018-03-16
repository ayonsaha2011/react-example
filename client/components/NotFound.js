import React from 'react';
import { Link } from 'react-router';

class LoginPage extends React.Component {
  render() {
    document.title = "SARA - 404 Page Not Found";
    document.body.classList = "four-zero-four";

    return (
      <div className="four-zero-four-container">
          <div className="error-code">404</div>
          <div className="error-message">This page doesn't exist</div>
          <div className="button-place">
              <Link to="/" className="btn btn-default btn-lg waves-effect">GO TO HOMEPAGE</Link>
          </div>
      </div>

    );
  }
}

export default LoginPage;
