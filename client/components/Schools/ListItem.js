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
    const {id, school_name, education_board, school_established, registration_no, email_id, phone_number} = this.props.post;
    return (
            <tr>
              <th scope="row">{this.props.sno}</th>
              <td>{school_name}</td>
              <td>{education_board}</td>
              <td>{moment(school_established).format('Do MMMM YYYY')}</td>
              <td>{registration_no}</td>
              <td>{email_id}</td>
              <td>{phone_number}</td>
              <td>
                <TooltipIconButton icon='mode_edit' className="header-add-button" primary tooltip='Edit' tooltipPosition="top" tooltipDelay={100}  onClick={this.handleOnClickGo.bind(this, '/dashboard/schools/edit/'+id)} />
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
