import React from 'react';
import onClickOutside from 'react-onclickoutside';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

let self = '';
class DropDwon extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {showDropDwon:false};
  	}

  	componentWillMount() {
    	self = this;
  	}

  	handleClickOutside (evt) {
  		self.props.handleDisableDropDwonOutside();
    	self.setState({showDropDwon: !self.state.showDropDwon});
  	}
	handleDropDwon() {
  	self.props.handleDisableDropDwonOutside();
		self.setState({showDropDwon: !self.state.showDropDwon});
	}
  logout(e) {
      e.preventDefault();
      self.props.logout();
  }
  render() {

    return (
	    <div className={(this.state.showDropDwon) ? 'btn-group user-helper-dropdown open' : 'btn-group user-helper-dropdown' }   onClick={this.handleDropDwon}>
	                        <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">{this.props.icon}</i>
	                        <ul className="dropdown-menu pull-right">
	                            <li><a href="javascript:void(0);"><i className="material-icons">person</i>Profile</a></li>
	                            <li role="seperator" className="divider"></li>
	                            <li><a href="javascript:void(0);"><i className="material-icons">group</i>Followers</a></li>
	                            <li><a href="javascript:void(0);"><i className="material-icons">shopping_cart</i>Sales</a></li>
	                            <li><a href="javascript:void(0);"><i className="material-icons">favorite</i>Likes</a></li>
	                            <li role="seperator" className="divider"></li>
	                            <li><a href="javascript:void(0);" onClick={this.logout} ><i className="material-icons">input</i>Sign Out</a></li>
	                        </ul>
	                    </div>
    );
  }
}

DropDwon.propTypes = {
  handleDisableDropDwonOutside: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string.isRequired,
  logout: React.PropTypes.func.isRequired
}


export default connect(null, {logout})(onClickOutside(DropDwon));

