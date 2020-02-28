import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default class UserView extends React.Component<{
    logOut: any
}> {
    render () {
        return (
            <span className="center-span">
                <b> Hi user123 </b> | Your last login was on: { localStorage.getItem("lastLoggedIn") || "" } | <Button variant="danger" onClick={this.props.logOut}> Log out <FontAwesomeIcon icon={faSignOutAlt} /> </Button>
            </span>
        );
    }
}