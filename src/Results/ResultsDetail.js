import React from 'react';
import { Col } from 'react-bootstrap';

function ResultsDetail(props) {

  return (
    <Col>
        <h5>{props.simulationResults.number} distinct solution{props.simulationResults.number === 1 ? "":"s"} found by the simulator</h5>
        {Object.keys(props.simulationResults.solutions).map((solution,i) => (
            <div>
                {i+1}: {solution} <br/>
            </div>
        ))}
    </Col>
  );
}

export default ResultsDetail;
