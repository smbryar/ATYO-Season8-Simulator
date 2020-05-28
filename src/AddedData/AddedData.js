import React from 'react';
import { Table } from 'react-bootstrap';
import './AddedData.css';

function AddedData(props) {
    return (
        <div className="added-data">
            <div className = "m-2">
                <h5>Added Truth Booths</h5>
                <Table bordered size="sm">
                    <tbody>
                        {props.addedTruthBooths.map((booth,i) => (
                            <tr key={i} style={booth.correct ? { backgroundColor: "rgb(142, 216, 142)" } : { backgroundColor: "rgb(211, 144, 144)" }}>
                                {booth.pair.map((person,i) => (
                                    <td key={i}>{person}</td>))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default AddedData;
