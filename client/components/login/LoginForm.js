import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../validations/login';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => {if (err) { console.log('err', err); return this.setState({ errors: err.response.data.errors, isLoading: false })}}
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;

    return (
        <form onSubmit={this.onSubmit}>
          <div className="msg">Sign in to start your session</div>
          { errors.form && <div className="alert alert-danger">{errors.form}</div> }
            <TextFieldGroup
              field="identifier"
              label="Username / Email / Phone No."
              value={identifier}
              error={errors.identifier}
              icons="person"
              focus={true}
              onChange={this.onChange}
              GroupStyle= 'icon'
            />
            <TextFieldGroup
              field="password"
              label="Password"
              value={password}
              error={errors.password}
              icons="lock"
              onChange={this.onChange}
              type="password"
              GroupStyle='icon'
            />
          <div className="row">
              <div className="col-xs-offset-8 col-xs-4">
                  <button className="btn btn-block bg-pink waves-effect" disabled={isLoading} type="submit">SIGN IN</button>
              </div>
          </div>
          <div className="row m-t-15 m-b--20">
              <div className="col-xs-6 align-right">
                  <a href="forgot-password.html">Forgot Password?</a>
              </div>
          </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
