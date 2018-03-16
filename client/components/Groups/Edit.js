import React from 'react';
import { connect } from 'react-redux';
import Tooltip from 'react-toolbox/lib/tooltip';
import { browserHistory } from 'react-router'
import omit from 'lodash/omit';
import { getPost, UpdatePost } from '../../actions/groupsActions';
import { addFlashMessage } from '../../actions/flashMessages.js';

import Form from './Form';

function Button(props) {
  const rest = omit(props,
    ['theme', 'tooltip', 'tooltipDelay', 'tooltipHideOnClick']);
  return (<button {...rest} />);
}
const TooltipButton = Tooltip(Button);

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state ={post_data: {}, isLoading: false };
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoBack () {
    browserHistory.goBack();
  };
  componentWillMount(){
    this.setState({ isLoading: true });
    this.props.getPost(this.props.params.id)
                  .then(res => {
                    // console.log(res.data);
                    this.setState({ post_data: res.data, isLoading: false });
                  })
                  .catch(error => {
                    console.log(error);
                    if (error.response) {
                      if (error.response.data) {
                        this.props.addFlashMessage({
                          type: 'error',
                          text: error.response.data
                        });
                      }
                    }

                });
  }
  render() {
    document.title = "Eazyfyi - Group Edit";
    const { UpdatePost, addFlashMessage } = this.props;
    return (
            <div className="container-fluid">
              <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="card">
                          <div className="header">
                              <h2>
                                  Edit Group
                              </h2>
                              <TooltipButton type="button" className="btn bg-purple waves-effect header-add-button" tooltip='Back' tooltipPosition="top" tooltipDelay={100} onClick={this.handleGoBack}>
                                  <i className="material-icons" >arrow_back</i>
                              </TooltipButton>
                          </div>
                          <div className="body">
                          <Form
                            submitAction={UpdatePost}
                            addFlashMessage={addFlashMessage}
                            post_data={this.state.post_data}
                          />
                          </div>
                      </div>
                  </div>
              </div>
            </div>
    );
  }
}


Edit.propTypes = {
  getPost: React.PropTypes.func.isRequired,
  UpdatePost: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
}
export default connect(null, { getPost, UpdatePost, addFlashMessage })(Edit);
