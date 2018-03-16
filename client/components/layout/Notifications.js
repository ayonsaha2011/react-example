import React from 'react';
import onClickOutside from 'react-onclickoutside';

let self = '';
class Notifications extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {showNotifications:false};
  	}

  	componentWillMount() {
    	self = this;
  	}
	componentDidMount() {
    	$.AdminBSB.notificationScroll.activate();
	}
  	handleClickOutside (evt) {
  		self.props.handleDisableNotificationOutside();
    	self.setState({showNotifications: !self.state.showNotifications});
  	}
	handleNotifications() {
  		self.props.handleDisableNotificationOutside();
		self.setState({showNotifications: !self.state.showNotifications});
	}
  render() {

    return (
      	<li className={(this.state.showNotifications) ? 'dropdown open' : 'dropdown' }>
	        <a href="javascript:void(0);"  onClick={this.handleNotifications} className="dropdown-toggle" data-toggle="dropdown" role="button">
	            <i className="material-icons">notifications</i>
	            <span className="label-count">7</span>
	        </a>
	        <ul className="dropdown-menu">
	            <li className="header">NOTIFICATIONS</li>
	            <li className="body">
	                <ul className="menu">
	                    <li>
	                        <a href="javascript:void(0);" className="waves-effect waves-block">
	                            <div className="icon-circle bg-light-green">
	                                <i className="material-icons">person_add</i>
	                            </div>
	                            <div className="menu-info">
	                                <h4>12 new members joined</h4>
	                                <p>
	                                    <i className="material-icons">access_time</i> 14 mins ago
	                                </p>
	                            </div>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="javascript:void(0);" className="waves-effect waves-block">
	                            <div className="icon-circle bg-cyan">
	                                <i className="material-icons">add_shopping_cart</i>
	                            </div>
	                            <div className="menu-info">
	                                <h4>4 sales made</h4>
	                                <p>
	                                    <i className="material-icons">access_time</i> 22 mins ago
	                                </p>
	                            </div>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="javascript:void(0);" className="waves-effect waves-block">
	                            <div className="icon-circle bg-red">
	                                <i className="material-icons">delete_forever</i>
	                            </div>
	                            <div className="menu-info">
	                                <h4><b>Nancy Doe</b> deleted account</h4>
	                                <p>
	                                    <i className="material-icons">access_time</i> 3 hours ago
	                                </p>
	                            </div>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="javascript:void(0);" className="waves-effect waves-block">
	                            <div className="icon-circle bg-orange">
	                                <i className="material-icons">mode_edit</i>
	                            </div>
	                            <div className="menu-info">
	                                <h4><b>Nancy</b> changed name</h4>
	                                <p>
	                                    <i className="material-icons">access_time</i> 2 hours ago
	                                </p>
	                            </div>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="javascript:void(0);" className="waves-effect waves-block">
	                            <div className="icon-circle bg-blue-grey">
	                                <i className="material-icons">comment</i>
	                            </div>
	                            <div className="menu-info">
	                                <h4><b>John</b> commented your post</h4>
	                                <p>
	                                    <i className="material-icons">access_time</i> 4 hours ago
	                                </p>
	                            </div>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="javascript:void(0);" className="waves-effect waves-block">
	                            <div className="icon-circle bg-light-green">
	                                <i className="material-icons">cached</i>
	                            </div>
	                            <div className="menu-info">
	                                <h4><b>John</b> updated status</h4>
	                                <p>
	                                    <i className="material-icons">access_time</i> 3 hours ago
	                                </p>
	                            </div>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="javascript:void(0);" className="waves-effect waves-block">
	                            <div className="icon-circle bg-purple">
	                                <i className="material-icons">settings</i>
	                            </div>
	                            <div className="menu-info">
	                                <h4>Settings updated</h4>
	                                <p>
	                                    <i className="material-icons">access_time</i> Yesterday
	                                </p>
	                            </div>
	                        </a>
	                    </li>
	                </ul>
	            </li>
	            <li className="footer">
	                <a href="javascript:void(0);" className="waves-effect waves-block">View All Notifications</a>
	            </li>
	        </ul>
	    </li>
    );
  }
}

Notifications.propTypes = {
  handleDisableNotificationOutside: React.PropTypes.func.isRequired
}

export default onClickOutside(Notifications);
