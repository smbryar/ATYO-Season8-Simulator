import React from 'react';
import { Table, Row } from 'react-bootstrap';
import './MatchingCeremony.css';

function MatchingCeremony(props) {
    return (
        <Row>
            <div className="matching-ceremony">
                <h6>Matching Ceremony</h6>
                <p>{props.matchingCeremony.lights} lights</p>
                <Table bordered size="sm" className="m-2 matching-table" style={props.matchingCeremony.lights === 0 ? {backgroundColor: "rgb(211, 144, 144)"} : null}>
                    <tbody>
                        {props.matchingCeremony.pairs.map((pair,i) => (
                            <tr key={`row${i}`}>                            
                            <td key={`woman${i}`}>{pair.woman}</td>                            
                            <td key={`man${i}`}>{pair.man}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>

        </Row>
    );
}

export default MatchingCeremony;
