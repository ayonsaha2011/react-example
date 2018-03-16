import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';

import Notifications from './Notifications';
import Search from './Search';

let self = '';
class Topbar extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {disableSearchOutside:true, disableNotificationOutside:true};
  	}

  	componentWillMount() {
    	self = this;
  	}

	handleDisableSearchOutside() {
		self.setState({disableSearchOutside: !self.state.disableSearchOutside});
	}
	handleDisableNotificationOutside() {
		self.setState({disableNotificationOutside: !self.state.disableNotificationOutside});
	}

	logout(e) {
	    e.preventDefault();
	    self.props.logout();
	}
  render() {
    return (
      <section>
        {/*<div className="page-loader-wrapper">
	        <div className="loader">
	            <div className="md-preloader pl-size-md">
	                <svg viewBox="0 0 75 75">
	                    <circle cx="37.5" cy="37.5" r="33.5" className="pl-red" strokeWidth="4" />
	                </svg>
	            </div>
	            <p>Please wait...</p>
	        </div>
	    </div>
	    
	    <div className="overlay"></div>*/}


	    <nav className="navbar">
	        <div className="container-fluid">
	            <div className="navbar-header">
	                <a href="javascript:void(0);" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
	                <a href="javascript:void(0);" className="bars"></a>
	                <a className="navbar-brand" href="../../index.html">Eazyfyi.com</a>
	            </div>
	            <div className="collapse navbar-collapse" id="navbar-collapse">
	                <ul className="nav navbar-nav navbar-right">
	                    <Search handleDisableSearchOutside={this.handleDisableSearchOutside} disableOnClickOutside={this.state.disableSearchOutside}/>
	                    <Notifications handleDisableNotificationOutside={this.handleDisableNotificationOutside} disableOnClickOutside={this.state.disableNotificationOutside}/>
	                    
	                    <li className="pull-right">
	                    	<a href="javascript:void(0);" className="js-right-sidebar" data-close="true">
	                    		<IconMenu icon='more_vert' position='topRight' menuRipple>
								    <MenuItem value='download' icon='get_app' caption='Download' />
								    <MenuItem value='help' icon='favorite' caption='Favorite' />
								    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
								    <MenuDivider />
								    <MenuItem value='signout' icon='input' onClick={this.logout} caption='Sign Out' />
								</IconMenu>
	                    	</a>
	                    </li>
	                </ul>
	            </div>
	        </div>
	    </nav>
      </section>
    );
  }
}

Topbar.propTypes = {
  logout: React.PropTypes.func.isRequired
}

export default connect(null, {logout})(Topbar);
