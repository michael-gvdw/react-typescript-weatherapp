import React from 'react';

import { Alert } from '../../Types'

import Card from 'react-bootstrap/Card'

type Props = {
    alert: Alert;
}

const AlertCard: React.FC<Props> = ({ alert }) => {
    return (
        <Card border="warning" style={{ width: '18rem', margin: '1rem' }}>
            <Card.Header>
                <h5>Heat warning</h5>
                <small className="text-muted">start</small>
                <br/>
                <small className="text-muted">finish</small>
            </Card.Header>

            <Card.Body>
                <Card.Title>Source</Card.Title>

                <Card.Text>

                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AlertCard;