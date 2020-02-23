import React from 'react';
import DashboardView from '../../Views/DashboardView'
import API_DTO from '../../DTOs/api.dto';
import ReportingRepository from '../../Repositories/ReportingRepository';

export default class Dashboard extends React.Component<{
	history: any,
	location: any
}, {
	dto: API_DTO,
	ReportingRepository: ReportingRepository
}> {
	constructor(props: any) {
		super(props);
		if (this.props.location.state.dto !== undefined) {
			// If the state exists being routed from /, fill in Dashboard State.
			const DTO = new API_DTO();
			DTO.setApiLink(this.props.location.state.dto.API_Link);
			DTO.setApiToken(this.props.location.state.dto.API_Token);
			DTO.setFirstDate(localStorage.getItem("First_Date") || "");
			DTO.setSecondDate(localStorage.getItem("Second_Date") || "");
			this.state = {
				 dto: DTO,
				 ReportingRepository: new ReportingRepository(DTO)
			}
		} else if (localStorage.getItem("APILink") !== null &&
					localStorage.getItem("AccessToken") !== null) {
			// Check if localStorage has valid items, if this is the case, we can use those.
			// Resolve issue with cold navigation to /dashboard.
			const DTO = new API_DTO();
			DTO.setApiLink(localStorage.getItem("APILink"));
			DTO.setApiToken(localStorage.getItem("AccessToken"));
			DTO.setFirstDate(localStorage.getItem("First_Date") || "");
			DTO.setSecondDate(localStorage.getItem("Second_Date") || "");
			this.state = {
				 dto: DTO,
				 ReportingRepository: new ReportingRepository(DTO)
			}
		} else {
			// Route back to / if neither is the case.
			this.props.history.push('/');
		}

		this.checkFirstDate = this.checkFirstDate.bind(this);
		this.checkSecondDate = this.checkSecondDate.bind(this);
		this.getItemsFromApi = this.getItemsFromApi.bind(this);
	}

	checkFirstDate(_e: any) {
		this.state.dto.setFirstDate(_e.target.value);
	}

	checkSecondDate(_e: any) {
		this.state.dto.setSecondDate(_e.target.value);
	}

	getItemsFromApi() {
		// TODO: Connect to ReportingRepository.
		console.log(this.state.ReportingRepository.Read(this.state.dto));
	}

	render () {
		return (<DashboardView
					checkFirstDate={this.checkFirstDate}
					checkSecondDate={this.checkSecondDate}
					getItemsFromApi={this.getItemsFromApi}
				/>)
	}
}
