import React from 'react';
import {IconButton} from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import { browserHistory } from 'react-router';
import Switch from 'react-toolbox/lib/switch';

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
    const {id, session_name, session_short_name, session_db_name, current_session} = this.props.post;
    return (
            <tr>
              <th scope="row">{this.props.sno}</th>
              <td>{session_name}</td>
              <td>{session_short_name}</td>
              <td>{session_db_name}</td>
              <td><Switch
                    checked={current_session}
                    label=""
                  />
              </td>
              <td>
                <TooltipIconButton icon='mode_edit' className="header-add-button" primary tooltip='Edit' tooltipPosition="top" tooltipDelay={100}  onClick={this.handleOnClickGo.bind(this, '/dashboard/school-sessions/edit/'+id)} />
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
