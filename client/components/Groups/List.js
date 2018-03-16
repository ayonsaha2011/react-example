import React from 'react';
import Tooltip from 'react-toolbox/lib/tooltip';
import classnames from 'classnames';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';
import lodash from 'lodash';
import omit from 'lodash/omit';

import { PostList, newPost, Count, deletePost } from '../../actions/groupsActions';
import { addFlashMessage } from '../../actions/flashMessages.js';
import ListItem from './ListItem';
import Pagination from '../common/Pagination';

const style = {
  marginRight: 50,
};

function Button(props) {
  const rest = omit(props,
    ['theme', 'tooltip', 'tooltipDelay', 'tooltipHideOnClick']);
  return (<button {...rest} />);
}

const TooltipButton = Tooltip(Button);
let self;
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: false, posts: [], total: 1, totalPage: 1, currentPage: 1, limit: 4, skip:0, active: false, msgToId:0, msgToName:'' , message:'', tableScroll: '' };
    this.handlePagination = this.handlePagination.bind(this);
  }
  handlePagination (skip, currentPage) {
      this.setState({
          skip: skip,
          currentPage: currentPage
        });
      this.props.PostList(skip, this.state.limit);
      $.AdminBSB.tableScroll.pagination();
  };
  handleOnClickGo (link) {
    browserHistory.push(link);
  };
  handleCount () {
    this.props.Count()
               .then(res => {
                 var totalPage = res.data.count / this.state.limit;
                 if ((res.data.count % this.state.limit) != 0) {
                   totalPage = parseInt(totalPage) + 1;
                 }
                 this.setState({
                   total: res.data.count,
                   totalPage: totalPage
                 });
               })
               .catch(error => {
                 console.log(error);
               });
  };
  componentWillMount(){
    this.handleCount();
    this.props.PostList(this.state.skip, this.state.limit);
  }
  componentDidMount(){
    self = this;
    this.setState({
      posts: this.props.posts
    });
    setTimeout(function(){
      if (self.state.total > 0) {
        $.AdminBSB.tableScroll.activate();
        if (self.state.total > 6) {
          self.setState({
            tableScroll: 'table-scroll'
          });
          $.AdminBSB.notificationScroll.activate('.table-scroll tbody', 250);
        }
      }
    }, 1000);

    io.socket.on('newGroup', function (newPost) {
      const message = { type: 'success', text: `New group added` };
      self.props.newPost(newPost);
      self.props.addFlashMessage(message);
      this.handleCount();
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      posts: nextProps.posts
    });
  }
  render() {
    document.title = "Eazyfyi - Groups";
    const start = this.state.limit * (this.state.currentPage - 1);
    const end = start + this.state.limit;
    const sortedPosts = lodash.sortBy(this.state.posts, 'indexId');
    const posts = sortedPosts.filter(post => (post.indexId >= start && post.indexId < end));
    const ShowingStart = (sortedPosts.length > 0) ?  start +1 : 0;
    const items = posts.map((post,i)  =>
      <ListItem key={i} sno={i + 1 + (start) } post={post} deleteItem={deletePost}/>
    );
    return (
            <div className="container-fluid">
              <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="card tableScrollCard">
                          <div className="header">
                              <h2>Groups</h2>
                              <TooltipButton type="button" className="btn bg-purple waves-effect header-add-button" onClick={this.handleOnClickGo.bind(this, '/dashboard/groups/create')} tooltip='Add New' tooltipPosition="top" tooltipDelay={100}>
                                  <i className="material-icons">add</i>
                              </TooltipButton>
                          </div>
                            <div className="body table-responsive tableScrollBody">
                                <table className={"table table-hover tableScroll " + this.state.tableScroll }>
                                  <thead>
                                      <tr>
                                          <th>#</th>
                                          <th>Group Name</th>
                                          <th>Established Date</th>
                                          <th>Registration No</th>
                                          <th>About Group</th>
                                          <th>Group Founder</th>
                                          <th>Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {items}
                                  </tbody>
                              </table>
                              <span className="dataTables_info">Showing { ShowingStart  } to {(this.state.total > end ) ? end : this.state.total } of { this.state.total } entries</span>

                              <Pagination
                                handlePagination={this.handlePagination}
                                limit={this.state.limit}
                                currentPage={this.state.currentPage}
                                totalPage={this.state.totalPage}
                              />
                            </div>
                      </div>
                  </div>
              </div>
            </div>
    );
  }
}

List.propTypes = {
  posts: React.PropTypes.array.isRequired,
  PostList: React.PropTypes.func.isRequired,
  newPost: React.PropTypes.func,
  Count: React.PropTypes.func.isRequired,
  deletePost: React.PropTypes.func.isRequired
}

List.defaultProps = {
  posts: []
}

function mapStateToProps(state) {
  return {
    posts: state.groups
  }
}

export default connect(mapStateToProps, { PostList, newPost, Count, deletePost })(List);
