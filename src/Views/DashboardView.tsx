import React from 'react';
import { Container, Row, Col, FormControl, Button, InputGroup, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import Table from "./TableView";

export default class DashboardView extends React.Component {
	render () {
		return (
			<div className="DashboardComponent">
				<Container>
					<Row>
						<Col>
							<br />
							<h3>DASHBOARD</h3>
							<hr />
						</Col>
					</Row>
					<Row>
						<Col>
							<InputGroup className="mb-3">
							    <InputGroup.Prepend>
							      <InputGroup.Text id="basic-addon1">First Date</InputGroup.Text>
							    </InputGroup.Prepend>
								<FormControl
								  placeholder="2017-05-01"
								  aria-label="2017-05-01"
								  aria-describedby="basic-addon1"
								  defaultValue={localStorage.getItem("FirstDate") || ""}
								/>
							</InputGroup>
						</Col>

						<Col>
							<InputGroup className="mb-3">
							    <InputGroup.Prepend>
							      <InputGroup.Text id="basic-addon1">Second Date</InputGroup.Text>
							    </InputGroup.Prepend>
								<FormControl
								  placeholder="2017-06-15"
								  aria-label="2017-06-15"
								  aria-describedby="basic-addon1"
								  defaultValue={localStorage.getItem("SecondDate") || ""}
								/>
							</InputGroup>
						</Col>

						<Col>
							<Button variant="primary">
							  <FontAwesomeIcon icon={faSync} />
							</Button>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<Card.Header as="h5">Total Conversation Count</Card.Header>
								<Card.Body>
									<Card.Text></Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Header as="h5">Total User Message Count</Card.Header>
								<Card.Body>
									<Card.Text></Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Header as="h5">Total Visitor Message Count</Card.Header>
								<Card.Body>
									<Card.Text></Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Table
						  columns={[{
							  dataField: 'id',
							  text: 'Product ID'
							}, {
							  dataField: 'name',
							  text: 'Product Name'
							}, {
							  dataField: 'price',
							  text: 'Product Price'
							}]}
						  data={[]} />
					</Row>
					<Row>
						<Col>
							<br />
							<hr /><h6>Made with ❤ by Jeroen Vijgen </h6>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
