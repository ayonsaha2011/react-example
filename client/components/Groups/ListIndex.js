import React from 'react';
import { connect } from 'react-redux';
import { PostList, newPost, Count, deletePost } from '../../actions/groupsActions';
import List from './List';
let self;
class ListIndex extends React.Component {
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
  render() {
    document.title = "SARA - Groups";
    return (
        <List
          posts={this.props.posts}
          PostList={PostList}
          newPost={newPost}
          Count={Count}
          deletePost={deletePost}
        />
    );
  }
}

ListIndex.propTypes = {
  posts: React.PropTypes.array.isRequired,
}

ListIndex.defaultProps = {
  posts: []
}

function mapStateToProps(state) {
  return {
    posts: state.groups
  }
}

export default connect(mapStateToProps, { PostList, newPost, Count, deletePost })(ListIndex);
