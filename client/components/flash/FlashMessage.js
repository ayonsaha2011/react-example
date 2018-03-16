import React from 'react';
import classnames from 'classnames';
let self = '';
class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    // this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    self = this;
    setTimeout(function(){ self.props.deleteFlashMessage(self.props.message.id); }, 5000);
  }

  onClick(id) {
    self.props.deleteFlashMessage(id);
  }
  render() {
    const { id, type, text } = this.props.message;
    return (
      <div className={classnames('flash-alert alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error',
        'alert-info': type === 'info',
      })}>
        <button onClick={this.onClick.bind(this, id)} className="close"><span>&times;</span></button>
        {text}
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;
