import React from 'react';
import { Form } from 'react-bootstrap';
import './InputData.css'

function PersonSelector(props) {
    return (
        <Form.Group controlId={`select${props.gender}}`}>
            <Form.Label>{props.gender}</Form.Label>
            <Form.Control as="select" custom onChange={e => props.children(e.target.value)}>
                {props.gender === "Woman" ? props.contestants.women.map((person,i) => (
                    <option key={i}>{person}</option>)) : props.contestants.men.map((person,i) => (
                        <option key={i}>{person}</option>))}
            </Form.Control>
        </Form.Group>
    );
}

export default PersonSelector;
