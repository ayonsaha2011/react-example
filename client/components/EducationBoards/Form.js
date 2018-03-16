import React from 'react';
import { connect } from 'react-redux';
import Input from 'react-toolbox/lib/input';
import Switch from 'react-toolbox/lib/switch';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import DatePicker from 'react-toolbox/lib/date_picker';
import _ from 'lodash';

import validateInput from '../../validations/educationBoard';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,
      board_name  : '',
      board_short_name : '',
      errors: '',
      isLoading: false,
      invalid: false
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (!_.isEmpty(nextProps.post_data)) {
      this.setState({
            id  : nextProps.post_data.id,
            board_name  : nextProps.post_data.board_name,
            board_short_name : nextProps.post_data.board_short_name
        });
    }
  }
  handleChange (name, value) {
    this.setState({[name]: value});
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.submitAction(this.state)
                  .then(res => {
                    this.props.addFlashMessage({
                      type: 'success',
                      text: 'Successfully save school sessions'
                    });
                    this.context.router.push('/dashboard/education-boards');
                  })
                  .catch(error => {
                    console.log(error.response.data);
                    if (error.response.data.hasOwnProperty('Errors')) {
                      var errors = {};
                      var form = "";
                      for (var key in error.response.data.Errors) {
                        errors[key] = error.response.data.Errors[key][0].message;
                        form += error.response.data.Errors[key][0].message + ', ';
                      }
                      errors['form'] = form;
                        this.setState({ errors: errors, isLoading: false });
                    }
                });
    }
  }

  render() {
    const { board_name, board_short_name, errors, isLoading, invalid } = this.state;
    return (
        <form  onSubmit={this.onSubmit} autoComplete="false" className="col-sm-12">
            { errors.form && <div className="alert alert-danger">{errors.form}</div> }
          <div className="col-sm-6">
            <Input
              type='text'
              name="board_name"
              label='Board Name'
              value={board_name}
              error={errors.board_name}
              onChange={this.handleChange.bind(this, 'board_name')}
              autoComplete="false"
            />
            <Input
              type='text'
              name="board_short_name"
              label='Board Short Name'
              value={board_short_name}
              error={errors.board_short_name}
              onChange={this.handleChange.bind(this, 'board_short_name')}
              autoComplete="false"
            />
          </div>

          <div className="col-sm-12">
            <Button icon='done' label='Submit' raised primary disabled={isLoading || invalid}/>
          </div>

      </form>
    );
  }
}

Form.propTypes = {
  submitAction: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  post_data  : React.PropTypes.object
}

Form.defaultProps = {
  post_data  : {}
}

Form.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Form;
