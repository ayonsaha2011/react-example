import React from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'info',
          text: 'You need to logout to access this page'
        });
        this.context.router.push('/dashboard');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated) {
        this.context.router.push('/dashboard');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
  }

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}