import React from 'react';
import { Table, Row } from 'react-bootstrap';
import './TruthBooth.css';

function TruthBooth(props) {
    return (
        <Row>
            <div className="truth-booth">
                Truth Booth
            <Table bordered size="sm" className="m-2">
                    <tbody>
                        {props.truthBooth.map(booth => (
                            <tr style = {booth.correct ? {backgroundColor: "rgb(142, 216, 142)"} : {backgroundColor: "rgb(211, 144, 144)"}}>
                            <td>{booth.woman}</td>
                            <td>{booth.man}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>

            </div>

        </Row>
    );
}

export default TruthBooth;
