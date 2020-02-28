import React from 'react';
import LoginView from '../../Views/LoginView';
import API_DTO from '../../DTOs/api.dto';
import moment from 'moment';

export default class Login extends React.Component<{
	history: any
}, {
	dto: any
}> {
    props: any;
    state: any;
	// eslint-disable-next-line
	constructor(props: any) {
      super(props);
	  this.persistApiLink = this.persistApiLink.bind(this);
	  this.persistAccessToken = this.persistAccessToken.bind(this);
	  this.verifyLogin = this.verifyLogin.bind(this);
    }

	componentDidMount() {
   	  const DTO = new API_DTO();
	  DTO.setApiLink(localStorage.getItem("APILink"));
  	  DTO.setApiToken(localStorage.getItem("AccessToken"));
  	  this.setState({ dto: DTO });
	}

	verifyLogin() {
		localStorage.setItem("lastLoggedIn", moment().format('LLLL'));
		// eslint-disable-next-line
		this.props.history.push({
			pathname: '/dashboard',
			state: { dto: this.state.dto }
		});
	};

	persistApiLink(e: any): void {
		this.state.dto.setApiLink(e.target.value);
	}

	persistAccessToken(e: any): void {
		this.state.dto.setApiToken(e.target.value);
	}

	render() {
		return (<LoginView
				persistApiLink={this.persistApiLink}
				persistAccessToken={this.persistAccessToken}
				verifyLogin={this.verifyLogin}
			/>);
	}
}
