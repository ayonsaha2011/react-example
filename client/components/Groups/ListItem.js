import React from 'react';
import {IconButton} from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import { browserHistory } from 'react-router';
import moment from 'moment'


const TooltipIconButton = Tooltip(IconButton);

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: false, post:{} };
    this.handleFilterToggle = this.handleFilterToggle.bind(this);
  }
  handleFilterToggle () {
    $(this.refs.filter_show).slideToggle(800);
  };
  handleOnClickGo (link) {
    browserHistory.push(link);
  };

  render() {
    const {id, group_name, group_established, group_abouttext, group_founder, registration_no} = this.props.post;
    return (
            <tr>
              <th scope="row">{this.props.sno}</th>
              <td>{group_name}</td>
              <td>{moment(group_established).format('Do MMMM YYYY')}</td>
              <td>{registration_no}</td>
              <td>{group_abouttext}</td>
              <td>{group_founder}</td>
              <td>
                <TooltipIconButton icon='mode_edit' className="header-add-button" primary tooltip='Edit' tooltipPosition="top" tooltipDelay={100}  onClick={this.handleOnClickGo.bind(this, '/dashboard/groups/edit/'+id)} />
                <TooltipIconButton icon='delete_forever' className="header-add-button" accent tooltip='Delete' tooltipPosition="top" tooltipDelay={100} onClick={this.handleFilterToggle}/>
              </td>
            </tr>
    );
  }
}

ListItem.propTypes = {
  sno: React.PropTypes.number.isRequired,
  post: React.PropTypes.object.isRequired,
  deleteItem: React.PropTypes.func.isRequired
}


export default ListItem;
