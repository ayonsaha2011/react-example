import React from 'react';
import onClickOutside from 'react-onclickoutside';

let self = '';
class Search extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {showSearch:false};
  	}

  	componentWillMount() {
    	self = this;
  	}

  	handleClickOutside (evt) {
  		self.props.handleDisableSearchOutside();
    	self.setState({showSearch: !self.state.showSearch});
  	}
	handleSearch() {
  		self.props.handleDisableSearchOutside();
		self.setState({showSearch: !self.state.showSearch});
	}
  render() {

    return (
    	<li>
        	<a href="javascript:void(0);" className="js-search" onClick={this.handleSearch}>
        		<i className="material-icons">search</i>
        	</a>
       		<div className={(this.state.showSearch) ? 'search-bar open' : 'search-bar' }>
		        <div className="search-icon">
		            <i className="material-icons">search</i>
		        </div>
		        <input type="text" placeholder="START TYPING..."/ >
		        <div className="close-search" onClick={this.handleSearch}>
		            <i className="material-icons">close</i>
		        </div>
		    </div>
        </li>
    );
  }
}

Search.propTypes = {
  handleDisableSearchOutside: React.PropTypes.func.isRequired
}

export default onClickOutside(Search);
