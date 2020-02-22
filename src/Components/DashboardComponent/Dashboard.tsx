import React from 'react';
import DashboardView from '../../Views/DashboardView'

export default class Dashboard extends React.Component<{
	history: any
}, {
	dto: any
}> {
    state!: {
        dto: {
            API_Link: string | null;
            API_Token: string | null;
        };
    };
    props: any;
	constructor(props: any) {
		super(props);
		if (props.location.state.dto !== undefined) {
			// If the state exists being routed from /, fill in Dashboard State.
			this.state = { dto: props.location.state.dto };
		} else if (localStorage.getItem("APILink") !== null &&
					localStorage.getItem("AccessToken") !== null) {
			// Check if localStorage has valid items, if this is the case, we can use those.
			// Resolve issue with cold navigation to /dashboard.
			this.state = {
				dto: {
					API_Link: localStorage.getItem("APILink"),
					API_Token: localStorage.getItem("AccessToken")
				}
			}
		} else {
			// Route back to / if neither is the case.
			this.props.history.push('/');
		}
	}

	render () {
		return (<DashboardView />)
	}
}
