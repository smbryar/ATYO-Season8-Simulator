import React from 'react';
import { Table, Row } from 'react-bootstrap';
import './MatchingCeremony.css';

function MatchingCeremony(props) {
    return (
        <Row>
            <div className="matching-ceremony">
                <h6>Matching Ceremony</h6>
                <p>{props.matchingCeremony.lights} lights</p>
                <Table bordered size="sm" className="m-2 matching-table">
                    <tbody>
                        {props.matchingCeremony.pairs.map((pair,i) => (
                            <tr key={i}>
                            {pair.map((person,i) => (
                            <td key={i}>{person}</td>))}
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>

        </Row>
    );
}

export default MatchingCeremony;
