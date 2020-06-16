import React from 'react';
import { Table, Row } from 'react-bootstrap';
import './TruthBooth.css';

function TruthBooth(props) {
    return (
        <Row>
            <div className="truth-booth">
                Truth Booth
            <Table bordered size="sm" className="m-2" style = {props.truthBooth.correct ? {backgroundColor: "rgb(142, 216, 142)"} : {backgroundColor: "rgb(211, 144, 144)"}}>
                    <tbody>
                        <tr>
                            <td>{props.truthBooth.pair[0]}</td>
                            <td>{props.truthBooth.pair[1]}</td>
                        </tr>
                    </tbody>
                </Table>

            </div>

        </Row>
    );
}

export default TruthBooth;
