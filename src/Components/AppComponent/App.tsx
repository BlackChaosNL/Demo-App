/* eslint-disable @typescript-eslint/no-unused-expressions */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../LoginComponent/Login';
import Dashboard from '../DashboardComponent/Dashboard';

export default class App extends React.Component {
	render() {
	  return (
	    <Switch>
  		  <Route exact path="/"
		  	component={Login} />
  		  <Route path="/dashboard"
		  	component={Dashboard} />
  		  <Redirect to="/" />
  		</Switch>
	  );
	}
}
