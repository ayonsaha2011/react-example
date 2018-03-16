import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import omit from 'lodash/omit';
import { CreatePost } from '../../actions/schoolsActions';
import AjaxLoader from '../common/AjaxLoader';
import { addFlashMessage } from '../../actions/flashMessages.js';
import Form from './Form';
import Tooltip from 'react-toolbox/lib/tooltip';

function Button(props) {
  const rest = omit(props,
    ['theme', 'tooltip', 'tooltipDelay', 'tooltipHideOnClick']);
  return (<button {...rest} />);
}
const TooltipButton = Tooltip(Button);
let self;
class Create extends React.Component {
  constructor(props) {
    super(props);
    self = this;
    self.state ={showAjaxLoader: false};
    self.handleGoBack = self.handleGoBack.bind(this);
  }
  handleGoBack () {
    browserHistory.goBack();
  };

  handleShowAjaxLoader (status) {
    self.setState({showAjaxLoader: status});
  };

  render() {
    const { CreatePost, addFlashMessage } = this.props;
      document.title = "Eazyfyi - Create School";
    return (
      <div className="container-fluid">
        <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                    <div className="header">
                        <h2>
                            Create New School
                        </h2>
                          <TooltipButton type="button" className="btn bg-purple waves-effect header-add-button" tooltip='Back' tooltipPosition="top" tooltipDelay={100} onClick={this.handleGoBack}>
                              <i className="material-icons" >arrow_back</i>
                          </TooltipButton>
                    </div>
                    <div className="body">
                      <AjaxLoader show={this.state.showAjaxLoader}/>
                      <Form
                        submitAction={CreatePost}
                        addFlashMessage={addFlashMessage}
                        handleShowAjaxLoader={this.handleShowAjaxLoader}
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
