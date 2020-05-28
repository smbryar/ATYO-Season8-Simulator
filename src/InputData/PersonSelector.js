import React from 'react';
import { Form } from 'react-bootstrap';
import './InputData.css'

function PersonSelector(props) {
    return (
        <Form.Group controlId={`selectPerson${props.number}`}>
            <Form.Label>Person {props.number}</Form.Label>
            <Form.Control as="select" custom onChange={e => props.children(e.target.value)}>
                {props.contestants.map((person,i) => (
                    <option key={i}>{person}</option>))}
            </Form.Control>
        </Form.Group>
    );
}

export default PersonSelector;
