import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import DatePicker from 'react-toolbox/lib/date_picker';
import lodash from 'lodash';

import SelectField from '../common/SelectField';
import PlaceAutocomplete from '../common/PlaceAutocomplete';
import validateInput from '../../validations/group';

import { PostList as groupPostList } from '../../actions/groupsActions';
import { PostList as schoolSessionPostList } from '../../actions/schoolSessionsActions';
import { PostList as educationBoardPostList } from '../../actions/educationBoardsActions';
let self;

class Form extends React.Component {
  constructor(props) {
    super(props);
    self = this;
    this.state = {from_data:{
      id:'',
      school_name  : '',
      group_id : '',
      school_session : '',
      session_start : '',
      session_end : '',
      school_established : '',
      education_board : '',
      registration_no : '',
      school_code : '',
      logo : '',
      school_banner : '',
      school_abouttext : '',
      email_id : '',
      phone_number : '',
      web_link : '',
      street : '',
      city : '',
      state : '',
      country : '',
      pin_code : '',
      latitude : '',
      longitude : ''
    },
    errors: '', isLoading: false, invalid: false, groups:[], schoolSessions: [], educationBoards:[]}
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);


  }

  handlePostData (post_data) {
    if (!lodash.isEmpty(post_data)) {
      this.setState({
        from_data:{
            id  : post_data.id,
            school_name  : post_data.school_name,
            group_id : post_data.group_id,
            school_session : post_data.school_session,
            session_start : post_data.session_start,
            session_end : post_data.session_end,
            school_established : new Date(post_data.school_established),
            education_board : post_data.education_board,
            registration_no : post_data.registration_no,
            school_code : post_data.school_code,
            logo : post_data.logo,
            school_banner : post_data.school_banner,
            school_abouttext : post_data.school_abouttext,
            email_id : post_data.email_id,
            phone_number : post_data.phone_number,
            web_link : post_data.web_link,
            street : post_data.street,
            city : post_data.city,
            state : post_data.state,
            country : post_data.country,
            pin_code : post_data.pin_code,
            latitude : post_data.latitude,
            longitude : post_data.longitude,
          }
        });
    }
  }
  componentWillMount(){
    self.props.groupPostList(0, -1);
    self.props.schoolSessionPostList(0, -1);
    self.props.educationBoardPostList(0, -1);
  }
  componentDidMount(){
    self.handlePostData(self.props.post_data);
    self.setState({
      groups: self.props.groups,
      schoolSessions: self.props.schoolSessions,
      educationBoards: self.props.educationBoards
    });
  }

  componentWillReceiveProps(nextProps){
    self.handlePostData(nextProps.post_data);
    self.setState({
      groups: nextProps.groups,
      schoolSessions: nextProps.schoolSessions,
      educationBoards: nextProps.educationBoards
    });
  }

  handleChange (name, value) {
    const from_data = this.state.from_data;
    from_data[name] = value;
    this.setState({from_data:from_data});
  }

  onChange(e) {
    const from_data = this.state.from_data;
    from_data[e.target.name] = e.target.value;
    this.setState({from_data:from_data});
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
    /*if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.submitAction(this.state.from_data)
                  .then(res => {
                    this.props.addFlashMessage({
                      type: 'success',
                      text: 'Successfully save school'
                    });
                    this.context.router.push('/dashboard/schools');
                  })
                  .catch(error => {
                    console.log(error);
                });
    }*/
  }

  render() {
    const { school_name, group_id, school_session, session_start, session_end, school_established, education_board, registration_no, school_code, logo, school_banner, school_abouttext, email_id, phone_number, web_link, street, city, state, country, pin_code, latitude, longitude } = this.state.from_data;
    const { errors, isLoading, invalid, address, autocompleteItems } = this.state;

    const GroupOptions = this.state.groups.map((item) => <option key={item.id} value={item.id}>{item.group_name}</option>)
    const SchoolSessionsOptions = this.state.schoolSessions.map((item) => <option key={item.id} value={item.id}>{item.session_name}</option>)
    const EducationBoardsOptions = this.state.educationBoards.map((item) => <option key={item.id} value={item.id}>{item.board_name}</option>)
    return (
        <form  onSubmit={this.onSubmit} autoComplete="false" className="col-sm-12">
          { errors.form && <div cla ssName="alert alert-danger">{errors.form}</div> }
          <div className="col-sm-6">
            <Input
              type='text'
              name="school_name"
              label='School Name'
              value={school_name}
              error={errors.school_name}
              onChange={this.handleChange.bind(this, 'school_name')}
              autoComplete="false"
            />
            <SelectField
              name="education_board"
              label=' Select Education board'
              value={education_board}
              options={EducationBoardsOptions}
              firstOption="Please Select Education board"
              error={errors.education_board}
              onChange={this.onChange}
            />
            <Input
              type='text'
              name="school_code"
              label='School Code'
              value={school_code}
              error={errors.school_code}
              onChange={this.handleChange.bind(this, 'school_code')}
              autoComplete={false}
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
              name="school_established"
              label='Established Date'
              value={school_established}
              error={errors.school_established}
              onChange={this.handleChange.bind(this, 'school_established')}
              autoComplete="false"
            />
            <Input
              type='email'
              name="email_id"
              label='Email id'
              value={email_id}
              error={errors.email_id}
              onChange={this.handleChange.bind(this, 'email_id')}
              autoComplete="false"
            />
            <Input
              type='text'
              name="phone_number"
              label='Phone number'
              value={phone_number}
              error={errors.phone_number}
              onChange={this.handleChange.bind(this, 'phone_number')}
              autoComplete="false"
            />
          </div>
          <div className="col-sm-6">
            <Input
              name="school_abouttext"
              label='School Abouttext'
              value={school_abouttext}
              error={errors.school_abouttext}
              onChange={this.handleChange.bind(this, 'school_abouttext')}
              autoComplete={false}
              multiline={true}
            />
            <SelectField
              name="group_id"
              label='Select Group (if any)'
              value={group_id}
              options={GroupOptions}
              firstOption="Please Select a Group"
              error={errors.group_id}
              onChange={this.onChange}
            />
            <SelectField
              name="school_session"
              label='Select Session'
              value={school_session}
              options={SchoolSessionsOptions}
              firstOption="Please Select a Session"
              error={errors.school_session}
              onChange={this.onChange}
            />
            <DatePicker
              name="session_start"
              label='Session Start Date'
              value={session_start}
              error={errors.session_start}
              onChange={this.handleChange.bind(this, 'session_start')}
              autoComplete="false"
            />

            <DatePicker
              name="session_end"
              label='Session End Date'
              value={session_end}
              error={errors.session_end}
              onChange={this.handleChange.bind(this, 'session_end')}
              autoComplete="false"
            />
            <Input
              type='url'
              name="web_link"
              label='Website'
              value={web_link}
              error={errors.web_link}
              onChange={this.handleChange.bind(this, 'web_link')}
              autoComplete="false"
            />

          </div>
          <div className="clearBoth"></div>
          <PlaceAutocomplete />
          <div className="clearBoth"></div>
          <Button icon='done' label='Submit' raised primary disabled={isLoading || invalid}/>
      </form>
    );
  }
}

Form.propTypes = {
  submitAction: React.PropTypes.func.isRequired,
  handleShowAjaxLoader: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  post_data  : React.PropTypes.object,
  groupPostList: React.PropTypes.func.isRequired,
  schoolSessionPostList: React.PropTypes.func.isRequired,
  educationBoardPostList: React.PropTypes.func.isRequired,
  groups: React.PropTypes.array.isRequired,
  schoolSessions: React.PropTypes.array.isRequired,
  educationBoards: React.PropTypes.array.isRequired
}

Form.defaultProps = {
  post_data  : {},
  groups: [],
  schoolSessions: [],
  educationBoards: []
}

Form.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    groups: state.groups,
    schoolSessions: state.schoolSessions,
    educationBoards: state.educationBoards
  }
}
export default connect(mapStateToProps, { groupPostList, schoolSessionPostList, educationBoardPostList })(Form);
