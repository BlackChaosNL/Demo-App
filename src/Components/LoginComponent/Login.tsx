import React from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';

export default class Login extends React.Component {
	// eslint-disable-next-line
	constructor(props: any) {
      super(props);
    }

	render () {
		return (
			<div className="LoginComponent">
				<Card className="text-center">
				  <Card.Body>
				    <Card.Title>Please login to see the dashboard.</Card.Title>
				    <Card.Text>
				      Please fill in the following items: <br /><br />
						<InputGroup className="mb-3">
					      <InputGroup.Prepend>
					        <InputGroup.Text id="inputGroup-sizing-default">API url</InputGroup.Text>
					      </InputGroup.Prepend>
					      <FormControl
					        aria-label="Default"
					        aria-describedby="inputGroup-sizing-default"
					      />
					    </InputGroup>
						<InputGroup className="mb-3">
					      <InputGroup.Prepend>
					        <InputGroup.Text id="inputGroup-sizing-default">API token</InputGroup.Text>
					      </InputGroup.Prepend>
					      <FormControl
					        aria-label="Default"
					        aria-describedby="inputGroup-sizing-default"
					      />
					    </InputGroup>
				    </Card.Text>
				    <Button variant="primary">Login</Button>
				  </Card.Body>
				  <Card.Footer className="text-muted">Your last login was X-X-X @ XX:XX</Card.Footer>
				</Card>
			</div>
			);
	}
}
