import React from 'react';
import { Row, Form } from 'react-bootstrap';

import './SetData.css'

function ChooseWeek(props) {
    const weekLabels = ["At the start", "After week 1", "After week 2", "After week 3", "After week 4", "After week 5", "After week 6", "After week 7", "After week 8", "After week 9", "After week 10"];

    console.log(props.week);
    return (
        <Row className="ml-3 mr-3 mt-2 set-data">
            <Form.Group controlId={`Choose week`}>
                <Form.Label>Choose Week</Form.Label>
                <Form.Control as="select" custom onChange={e => props.setWeek(e.target.options.selectedIndex)}>
                    {weekLabels.map((weekLabel, i) => (
                        <option key={i}>{weekLabel}</option>))}
                </Form.Control>
            </Form.Group>
        </Row>
    );
}

export default ChooseWeek;
