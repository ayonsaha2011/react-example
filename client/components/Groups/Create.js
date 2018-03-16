import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import omit from 'lodash/omit';
import { CreatePost } from '../../actions/groupsActions';
import { addFlashMessage } from '../../actions/flashMessages.js';
import Form from './Form';

import Tooltip from 'react-toolbox/lib/tooltip';

function Button(props) {
  const rest = omit(props,
    ['theme', 'tooltip', 'tooltipDelay', 'tooltipHideOnClick']);
  return (<button {...rest} />);
}

const TooltipButton = Tooltip(Button);

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoBack () {
    browserHistory.goBack();
  };

  render() {
    const { CreatePost, addFlashMessage } = this.props;
      document.title = "Eazyfyi - Create Group";
    return (
      <div className="container-fluid">
        <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                    <div className="header">
                        <h2>
                            Create New Group
                        </h2>
                          <TooltipButton type="button" className="btn bg-purple waves-effect header-add-button" tooltip='Back' tooltipPosition="top" tooltipDelay={100} onClick={this.handleGoBack}>
                              <i className="material-icons" >arrow_back</i>
                          </TooltipButton>
                    </div>
                    <div className="body">
                      <Form
                        submitAction={CreatePost}
                        addFlashMessage={addFlashMessage}
                      />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}



Create.propTypes = {
  CreatePost: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
}


export default connect(null, { CreatePost, addFlashMessage })(Create);
