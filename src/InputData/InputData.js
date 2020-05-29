import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import PersonSelector from './PersonSelector';
import {doesPairMatch} from '../AYTOSolver/alterState/utilities';
import './InputData.css'

function InputData(props) {
  const [person1, setPerson1] = useState("Aasha");
  const [person2, setPerson2] = useState("Aasha");
  const [result, setResult] = useState(false);
  const [error, setError] = useState({samePerson: false, hardCoded: false});

  function parseTruthBoothResult(e) {
    let newResult = null;
    if (e.target.value === "No Match") {newResult = false}
    else if (e.target.value === "Perfect Match") {newResult = true} 
    setResult(newResult);
  }

  function handleAddTruthBoothClick() {
    let pair = [person1, person2];
    let newTruthBooth = { pair: pair, correct: result };
    
    if (person1 === person2) {
      let updatedError = Object.assign({},error);
      updatedError.samePerson = true;
      setError(updatedError);
    }
    else if  (props.truthBooths.some(booth => doesPairMatch(booth.pair, pair))) {
      let updatedError = Object.assign({},error);
      updatedError.hardCoded = true;
      setError(updatedError);
    }
    else {
      props.addTruthBooth(newTruthBooth);
      setError({samePerson: false, hardCoded: false});    
    }
  }

  return (
    <div className="input-data">
    <Form className="m-2">
      
      <h4>Add a truth booth couple</h4>
      <PersonSelector number="1" contestants={props.contestants}>{setPerson1}</PersonSelector>
      <PersonSelector number="2" contestants={props.contestants}>{setPerson2}</PersonSelector>
      <Form.Group controlId="selectMatch">
        <Form.Label>Match?</Form.Label>
        <Form.Control as="select" custom onChange={parseTruthBoothResult}>
          <option>No Match</option>
          <option>Perfect Match</option>
        </Form.Control>
      </Form.Group>
    </Form>
    <Button className="m-2" onClick = {handleAddTruthBoothClick}>Add Truth Booth</Button>   
      
    {error.samePerson && <p>People can't match themselves, try again</p>}
    {error.hardCoded && <p>Can't contradict a TV truth booth</p>}
    </div>
  );
}

export default InputData;
