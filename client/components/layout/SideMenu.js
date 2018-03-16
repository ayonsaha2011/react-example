import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

class SideMenu extends React.Component {
	componentDidMount() {
    	$.AdminBSB.leftSideBar.activate();
	}
  	render() {
	    return (
		    <div className="menu">
		        <ul className="list">
		            <li className="header">MAIN NAVIGATION</li>

		            <li className={location.pathname === '/dashboard' ? 'active' : ''}>
		            	<Link className={location.pathname === '/dashboard' ? 'toggled waves-effect waves-block' : 'waves-effect waves-block'} to="/dashboard" >
		            		<i className="material-icons">home</i>
		                    <span>Dashboard</span>
		            	</Link>
		            </li>
		            <li
									className={classnames(
										{'active' : (location.pathname.indexOf("dashboard/school-sessions") >= 0 )
																|| (location.pathname.indexOf("dashboard/groups") >= 0 )
																|| (location.pathname.indexOf("dashboard/schools") >= 0 )
																|| (location.pathname.indexOf("dashboard/education-boards") >= 0 )
										})}>
		                <a href="javascript:void(0);" className={
													(location.pathname.indexOf("dashboard/school-sessions") >= 0 )
														|| (location.pathname.indexOf("dashboard/groups") >= 0 )
														|| (location.pathname.indexOf("dashboard/schools") >= 0 )
														|| (location.pathname.indexOf("dashboard/education-boards") >= 0 ) ? 'menu-toggle toggled waves-effect waves-block' : 'menu-toggle waves-effect waves-block'}>
		                    <i className="material-icons">view_list</i>
		                    <span>Admin Menu</span>
		                </a>
		                <ul className="ml-menu">
		                    <li className={location.pathname.indexOf("dashboard/school-sessions") >= 0 ? 'active' : ''}>
		                        <Link className={location.pathname.indexOf("dashboard/school-sessions") >= 0 ? 'toggled waves-effect waves-block' : 'waves-effect waves-block'} to="/dashboard/school-sessions" > School Sessions </Link>
		                    </li>
		                    <li className={location.pathname.indexOf("dashboard/education-boards") >= 0 ? 'active' : ''}>
		                        <Link className={location.pathname.indexOf("dashboard/education-boards") >= 0 ? 'toggled waves-effect waves-block' : 'waves-effect waves-block'} to="/dashboard/education-boards" > Education Boards </Link>
		                    </li>
												<li className={location.pathname.indexOf("dashboard/groups") >= 0  ? 'active' : ''}>
		                        <Link className={location.pathname.indexOf("dashboard/groups") >= 0 ? 'toggled waves-effect waves-block' : 'waves-effect waves-block'} to="/dashboard/groups" > Groups </Link>
		                    </li>
												<li className={location.pathname.indexOf("dashboard/schools") >= 0  ? 'active' : ''}>
		                        <Link className={location.pathname.indexOf("dashboard/schools") >= 0 ? 'toggled waves-effect waves-block' : 'waves-effect waves-block'} to="/dashboard/schools" > Schools </Link>
		                    </li>
		                </ul>
		            </li>

		        </ul>
		    </div>
	    );
  	}
}

export default SideMenu;
