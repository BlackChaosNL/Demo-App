import React from 'react';
import LoginView from '../../Views/LoginView';
import API_DTO from '../../DTOs/api.dto';

export default class Login extends React.Component<{
	history: any
}, {
	dto: any
}> {

	// eslint-disable-next-line
	constructor(props: any) {
      super(props);
	  this.persistApiLink = this.persistApiLink.bind(this);
	  this.persistAccessToken = this.persistAccessToken.bind(this);
	  this.verifyLogin = this.verifyLogin.bind(this);
	  this.getApiLinkFromDTO = this.getApiLinkFromDTO.bind(this);
	  this.getApiTokenFromDTO = this.getApiTokenFromDTO.bind(this);
    }

	componentDidMount() {
   	  const DTO = new API_DTO();
	  DTO.setApiLink(localStorage.getItem("APILink"));
  	  DTO.setApiToken(localStorage.getItem("AccessToken"));
  	  this.setState({ dto: DTO });
	}

	verifyLogin() {
		console.log("API Link: " + this.state.dto.getApiLink());
		console.log("API Token: " + this.state.dto.getApiToken());
		localStorage.setItem("lastLoggedIn", new Date().toUTCString());
		// eslint-disable-next-line
		this.props.history.push('/dashboard');
	};

	getApiLinkFromDTO(): string {
		return this.state.dto.getApiLink();
	}

	getApiTokenFromDTO(): string {
		return this.state.dto.getApiToken();
	}

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
				getApiLinkFromDTO={this.getApiLinkFromDTO}
				getApiTokenFromDTO={this.getApiTokenFromDTO}
			/>);
	}
}
