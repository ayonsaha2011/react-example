import React from 'react';
import SideMenu from './SideMenu';
import DropDwon from './DropDwon';

let self = '';

class Sidebar extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {disableDropDwonOutside:true};
  	}
  	componentWillMount() {
    	self = this;
  	}
	handleDisableDropDwonOutside() {
		self.setState({disableDropDwonOutside: !self.state.disableDropDwonOutside});
	}
  render() {
    return (
      	<section>
	        <aside id="leftsidebar" className="sidebar">
	            <div className="user-info">
	                <div className="image">
	                    <img src="/public/images/user.png" width="48" height="48" alt="User" />
	                </div>
	                <div className="info-container">
	                    <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
	                    <div className="email">john.doe@example.com</div>
	                    <DropDwon handleDisableDropDwonOutside={this.handleDisableDropDwonOutside} disableOnClickOutside={this.state.disableDropDwonOutside} icon="keyboard_arrow_down"/>
	                </div>
	            </div>

	            <SideMenu />

	            <div className="legal">
	                <div className="copyright">
	                    &copy; 2016 <a href="javascript:void(0);">Eazyfyi.com</a>.
	                </div>
	            </div>

	        </aside>
	    </section>
	    
    );
  }
}

export default Sidebar;
