import React, {useState} from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import './Results.css'
import ResultsDetail from './ResultsDetail';

function Results(props) {
  const [runs, setRuns] = useState(10);

  function handleRunSimulationClick() {
    props.runSimulation(runs);
  }

  return (
    <Row className = "results m-2">
      <Col>
      <h4>Run the simulation</h4>
      <Form className="m-2">
      <Form.Group controlId="selectRunTimes">
        <Form.Label>How many runs?</Form.Label>
        <Form.Control as="select" custom onChange={e => setRuns(e.target.value)}>
          <option>10</option>
          <option>100</option>
          <option>1000</option>
          <option>10000</option>
          <option>100000</option>
        </Form.Control>
      </Form.Group>
      </Form>
    <Button className = "m-2" onClick = {handleRunSimulationClick}>Run simulation</Button>
      </Col>    
      <Col>
      {props.simulationResults && <ResultsDetail simulationResults={props.simulationResults}/>}
      </Col>
    </Row>
  );
}

export default Results;
