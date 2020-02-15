/* eslint-disable @typescript-eslint/no-unused-expressions */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../LoginComponent/Login';
import Dashboard from '../DashboardComponent/Dashboard';

export default class App extends React.Component {
	componentDidMount() {
		if((localStorage.getItem("APILink") !== undefined || localStorage.getItem("APILink") !== '') &&
		(localStorage.getItem("AccessToken") !== undefined || localStorage.getItem("AccessToken") !== '')) {
			return <Redirect to="/dashboard" />
		};
	}

	render() {
	  return (
	    <Switch>
  		  <Route exact path="/" component={Login} />
  		  <Route path="/dashboard" component={Dashboard} />
  		  <Redirect to="/" />
  		</Switch>
	  );
	}
}
