import React from 'react';
import { Container, Row, Col, FormControl, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faChartLine } from '@fortawesome/free-solid-svg-icons';
import TableView from "./TableView";
import GraphView from "./GraphView";
import CardView from "./CardView";
import UserView from "./UserView";

export default class DashboardView extends React.Component<{
	checkFirstDate: any,
	checkSecondDate: any,
	getItemsFromApi: any,
	getResponseDTO: any,
	getGraphEnabled: any,
	setGraph: any
	logOut: any
}> {
	render () {
		return (
			<div className="DashboardComponent">
				<Container>
					<Row>
						<Col>
							<br />
							<h3 className="center">DASHBOARD</h3>
							<UserView 
								logOut={this.props.logOut}
							/>
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
							<CardView 
								title="Total Conversation Count"
								content={ this.props.getResponseDTO().total_conversation_count }
								cssClassName="bg-card-1"
							/>
						</Col>
						<Col>
							<CardView 
								title="Total User Message Count"
								content={ this.props.getResponseDTO().total_user_message_count }
								cssClassName="bg-card-2"
							/>
						</Col>
						<Col>
							<CardView 
								title="Total Visitor Message Count"
								content={ this.props.getResponseDTO().total_visitor_message_count }
								cssClassName="bg-card-3"
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<br />
							<Button variant="secondary" onClick={this.props.setGraph}><FontAwesomeIcon icon={faChartLine} /></Button>
							{ this.props.getGraphEnabled() && 
								<GraphView 
									data={ this.props.getResponseDTO().by_date }
								/>
							}
						</Col>
					</Row>
					<Row>
						<Col>
						<TableView
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
						</Col>
						
					</Row>
					<Row>
						<Col>
							<br />
							<hr />
							<h6 className="center">Made with ❤ by Jeroen Vijgen </h6>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
