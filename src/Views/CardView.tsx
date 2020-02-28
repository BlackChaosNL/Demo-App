import React from 'react';
import { Card } from 'react-bootstrap';

export default class CardView extends React.Component<{
    title: any,
    content: any,
    cssClassName?: any
}> {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header className={this.props.cssClassName} as="h6">{this.props.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            { this.props.content }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
