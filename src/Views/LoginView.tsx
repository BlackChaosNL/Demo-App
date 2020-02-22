import React from 'react';
import { Card, Button, FormControl } from 'react-bootstrap';

export default class LoginView extends React.Component<{
	persistApiLink: any,
	persistAccessToken: any,
	verifyLogin: any
}> {
    props: any;
	render () {
		return (
			<div className="LoginComponent">
				<Card className="text-center">
				  <Card.Body>
				    <Card.Title>Please login to see the dashboard.</Card.Title>
				    <Card.Text>
				      Please fill in the following items: <br /><br />
					  <FormControl aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
						type="text"
						placeholder="API Link (http://api.concept.com/)"
						defaultValue={localStorage.getItem("APILink") || ""}
						onChange={(e: any) => this.props.persistApiLink(e)}
					  />
					  <FormControl
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
						type="text"
						placeholder="API Token"
						defaultValue={localStorage.getItem("AccessToken") || ""}
						onChange={(e: any) => this.props.persistAccessToken(e)}
					  />
				    </Card.Text>
				    <Button variant="primary" onClick={this.props.verifyLogin}>Login </Button>
				  </Card.Body>
				  { localStorage.getItem("lastLoggedIn") !== null &&
				  	<Card.Footer className="text-muted">Your last login was { localStorage.getItem("lastLoggedIn") }</Card.Footer>
				  }
				</Card>
			</div>
			);
	}
}
