import React from 'react';
import { connect } from 'react-redux';

import TextFieldGroup from '../common/TextFieldGroup';
import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import DatePicker from 'react-toolbox/lib/date_picker';
import _ from 'lodash';

import validateInput from '../../validations/group';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,
      group_name  : '',
      group_abouttext : '',
      group_founder : '',
      group_website : '',
      registration_no : '',
      group_established : '',
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
            group_name  : nextProps.post_data.group_name,
            group_abouttext : nextProps.post_data.group_abouttext,
            group_founder : nextProps.post_data.group_founder,
            group_website : nextProps.post_data.group_website,
            registration_no : nextProps.post_data.registration_no,
            group_established : new Date(nextProps.post_data.group_established),
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
                      text: 'Successfully save Group'
                    });
                    this.context.router.push('/dashboard/groups');
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
    const { errors, group_name, group_abouttext, group_founder, group_website, group_established, registration_no, isLoading, invalid } = this.state;
    return (
        <form  onSubmit={this.onSubmit} autoComplete="false" className="col-sm-12">
          { errors.form && <div className="alert alert-danger">{errors.form}</div> }
          <div className="col-sm-6">
          <Input
            type='text'
            name="group_name"
            label='Group Name'
            value={group_name}
            error={errors.group_name}
            onChange={this.handleChange.bind(this, 'group_name')}
            autoComplete="false"
            />
          <Input
            type='text'
            name="registration_no"
            label='Registration no'
            value={registration_no}
            error={errors.registration_no}
            onChange={this.handleChange.bind(this, 'registration_no')}
            autoComplete="false"
            />
          <DatePicker
            name="group_established"
            label='Established Date'
            value={group_established}
            error={errors.group_established}
            onChange={this.handleChange.bind(this, 'group_established')}
            autoComplete="false"
            />
          </div>
          <div className="col-sm-6">
          <Input
            name="group_abouttext"
            label='About Group'
            value={group_abouttext}
            error={errors.group_abouttext}
            onChange={this.handleChange.bind(this, 'group_abouttext')}
            autoComplete={false}
            multiline={true}
            />
          <Input
            type='text'
            name="group_founder"
            label='Group Founder'
            value={group_founder}
            error={errors.group_founder}
            onChange={this.handleChange.bind(this, 'group_founder')}
            autoComplete={false}
            />
          <Input
            type='url'
            name="group_website"
            label='Group Website'
            value={group_website}
            error={errors.group_website}
            onChange={this.handleChange.bind(this, 'group_website')}
            autoComplete={false}
            />
          </div>
            <Button icon='done' label='Submit' raised primary disabled={isLoading || invalid}/>

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
