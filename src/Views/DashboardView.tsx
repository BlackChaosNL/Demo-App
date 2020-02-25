import React from 'react';
import { Container, Row, Col, FormControl, Button, InputGroup, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import Table from "./TableView";

export default class DashboardView extends React.Component<{
	checkFirstDate: any,
	checkSecondDate: any,
	getItemsFromApi: any,
	getResponseDTO: any
}> {
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
								  defaultValue={localStorage.getItem("FirstDate") || "2017-05-01"}
								  onChange={(e: any) => this.props.checkFirstDate(e)}
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
								  defaultValue={localStorage.getItem("SecondDate") || "2017-06-15"}
								  onChange={(e: any) => this.props.checkSecondDate(e)}
								/>
							</InputGroup>
						</Col>

						<Col>
							<Button variant="primary" onClick={this.props.getItemsFromApi}>
							  <FontAwesomeIcon icon={faSync} />
							</Button>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<Card.Header as="h6">Total Conversation Count</Card.Header>
								<Card.Body>
									<Card.Text>{ this.props.getResponseDTO().total_conversation_count }</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Header as="h6">Total User Message Count</Card.Header>
								<Card.Body>
									<Card.Text>{ this.props.getResponseDTO().total_user_message_count }</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card>
								<Card.Header as="h6">Total Visitor Message Count</Card.Header>
								<Card.Body>
									<Card.Text>{ this.props.getResponseDTO().total_visitor_message_count }</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Table
						  columns={[{
							  dataField: 'date',
							  text: 'Date',
							  sort: true
						  	}, {
							  dataField: 'conversation_count',
							  text: 'Conversation Count'
							}, {
							  dataField: 'missed_chat_count',
							  text: 'Missed Chat Count'
							}, {
							  dataField: 'visitors_with_conversation_count',
							  text: 'Visitors With Conversation Count'
							}]}
						  data={ this.props.getResponseDTO().by_date } />
					</Row>
					<Row>
						<Col>
							<br />
							<hr />
							<h6>Made with ❤ by Jeroen Vijgen </h6>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
