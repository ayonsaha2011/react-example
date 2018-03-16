import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import Dashboard from './components/Dashboard';

import {GroupsList, GroupsCreate, GroupsEdit, GroupsShowDetail} from './components/Groups';
import {SchoolsList, SchoolsCreate, SchoolsEdit, SchoolsShowDetail} from './components/Schools';
import {SchoolSessionsList, SchoolSessionsCreate, SchoolSessionsEdit, SchoolSessionsShowDetail} from './components/SchoolSessions';
import {EducationBoardsList, EducationBoardsCreate, EducationBoardsEdit, EducationBoardsShowDetail} from './components/EducationBoards';

import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';


import requireAuth from './utils/requireAuth';
import requireGuest from './utils/requireGuest';

const redirect = <Redirect from="/*" to="/" />;

export default (
  <Router>
	  <Route path="/" component={requireGuest(LoginPage)} />
	  <Route path="signup" component={requireGuest(SignupPage)} />
	  <Route path="dashboard" component={requireAuth(App)}>
	    <IndexRoute component={Dashboard} />
	    <Route path="groups">
          <IndexRoute component={GroupsList} />
          <Route path="create" component={GroupsCreate} />
          <Route path="edit/:id" component={GroupsEdit} />
          <Route path="show/:id" component={GroupsShowDetail} />
      </Route>
	    <Route path="schools">
          <IndexRoute component={SchoolsList} />
          <Route path="create" component={SchoolsCreate} />
          <Route path="edit/:id" component={SchoolsEdit} />
          <Route path="show/:id" component={SchoolsShowDetail} />
      </Route>
	    <Route path="school-sessions">
          <IndexRoute component={SchoolSessionsList} />
          <Route path="create" component={SchoolSessionsCreate} />
          <Route path="edit/:id" component={SchoolSessionsEdit} />
          <Route path="show/:id" component={SchoolSessionsShowDetail} />
      </Route>
	    <Route path="education-boards">
          <IndexRoute component={EducationBoardsList} />
          <Route path="create" component={EducationBoardsCreate} />
          <Route path="edit/:id" component={EducationBoardsEdit} />
          <Route path="show/:id" component={EducationBoardsShowDetail} />
      </Route>
	  </Route>

        {redirect}
  </Router>
)
