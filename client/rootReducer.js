import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import groups from './reducers/groups';
import schools from './reducers/schools';
import schoolSessions from './reducers/schoolSession';
import educationBoards from './reducers/educationBoards';

export default combineReducers({
  flashMessages,
  auth,
  groups,
  schools,
  schoolSessions,
  educationBoards
});
