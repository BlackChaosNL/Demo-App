import React from 'react';
import DashboardView from '../../Views/DashboardView'
import ReportingRepository from '../../Repositories/ReportingRepository';
import API_DTO from '../../DTOs/api.dto';
import { RESPONSE_DTO } from '../../DTOs/response.dto';

export default class Dashboard extends React.Component<{
	history: any,
	location: any
}, {
	dto: API_DTO,
	response: RESPONSE_DTO,
	ReportingRepository: ReportingRepository
}> {
	constructor(props: any) {
		super(props);
		try {
			// If the state exists being routed from /, fill in Dashboard State.
			if (this.props.location.state.dto) {
				const DTO = new API_DTO();
				DTO.setApiLink(this.props.location.state.dto.API_Link);
				DTO.setApiToken(this.props.location.state.dto.API_Token);
				DTO.setFirstDate(localStorage.getItem("First_Date") || "");
				DTO.setSecondDate(localStorage.getItem("Second_Date") || "");
				this.state = {
					 dto: DTO,
					 response: new RESPONSE_DTO(),
					 ReportingRepository: new ReportingRepository(DTO)
				}
			}
		} catch (err) {
			// Check if localStorage has valid items, if this is the case, we can use those.
			// Resolve issue with cold navigation to /dashboard.
			if (localStorage.getItem("APILink") !== null &&
   					localStorage.getItem("AccessToken") !== null) {
	   			const DTO = new API_DTO();
	   			DTO.setApiLink(localStorage.getItem("APILink"));
	   			DTO.setApiToken(localStorage.getItem("AccessToken"));
	   			DTO.setFirstDate(localStorage.getItem("First_Date") || "");
	   			DTO.setSecondDate(localStorage.getItem("Second_Date") || "");
	   			this.state = {
	   				 dto: DTO,
					 response: new RESPONSE_DTO(),
	   				 ReportingRepository: new ReportingRepository(DTO)
	   			}
	   		} else {
	   			// Route back to / if neither is the case.
	   			this.props.history.push('/');
	   		}
		}
		this.checkFirstDate = this.checkFirstDate.bind(this);
		this.checkSecondDate = this.checkSecondDate.bind(this);
		this.getItemsFromApi = this.getItemsFromApi.bind(this);
		this.getResponseDTO = this.getResponseDTO.bind(this);
		this.getItemsFromApi();
	}

	checkFirstDate(_e: any) {
		this.state.dto.setFirstDate(_e.target.value);
	}

	checkSecondDate(_e: any) {
		this.state.dto.setSecondDate(_e.target.value);
	}

	getItemsFromApi() {
		// TODO: Connect to ReportingRepository.
		this.state.ReportingRepository.Read(this.state.dto).then((res) => {
			const response = new RESPONSE_DTO();
            response.room_id = res.room_id;
            response.start_date = res.start_date;
            response.end_date = res.end_date;
            response.total_visitors_with_conversation_count = res.total_visitors_with_conversation_count;
            response.total_visitors_affected_by_chat_count = res.total_visitors_affected_by_chat_count;
            response.total_visitors_autosuggested_count = res.total_visitors_autosuggested_count;
            response.total_visitors_with_chat_count = res.total_visitors_with_chat_count;
            response.total_chats_from_autosuggest_count = res.total_chats_from_autosuggest_count;
            response.total_chats_from_user_count = res.total_chats_from_user_count;
            response.total_chats_from_visitor_count = res.total_chats_from_visitor_count;
            response.total_conversation_count = res.total_conversation_count;
            response.total_user_message_count = res.total_user_message_count;
            response.total_visitor_message_count = res.total_visitor_message_count;
            response.total_missed_chat_count = res.total_missed_chat_count;
            response.by_date = res.by_date;
			this.setState({response: response});
		});
	}

	getResponseDTO() {
		return this.state.response;
	}

	render () {
		return (<DashboardView
					checkFirstDate={this.checkFirstDate}
					checkSecondDate={this.checkSecondDate}
					getItemsFromApi={this.getItemsFromApi}
					getResponseDTO={this.getResponseDTO}
				/>)
	}
}
