import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import InputData from './InputData/InputData';
import SetData from './SetData/SetData';
import RunSimulation from './Results/RunSimulation';
import AddedData from './AddedData/AddedData';
import { initialMatchingCeremonies, initialTruthBooths, initialContestants } from './AYTOSolver/initialState/inputInformation';
import { manyRuns } from './AYTOSolver/AYTOSolver';
import Header from './Header/Header';
import { doesPairMatch } from './AYTOSolver/alterState/utilities';
import ResultsDetail from './Results/ResultsDetail';
import PageHeader from './PageHeader/PageHeader';

function Season8() {
  const truthBooths = [...initialTruthBooths];
  const [addedTruthBooths, setAddedTruthBooths] = useState([]);
  const matchingCeremonies = [...initialMatchingCeremonies];
  const contestants = [...initialContestants];
  const [simulationResults, setSimulationResults] = useState();
  const [week, setWeek] = useState(0);

  function addTruthBooth(newTruthBooth) {
    let index = addedTruthBooths.findIndex(booth => doesPairMatch(booth.pair, newTruthBooth.pair));
    if (index === -1) {
      const updatedAddedTruthBooths = [...addedTruthBooths, newTruthBooth];
      setAddedTruthBooths(updatedAddedTruthBooths);
    }
    else {
      let updatedAddedTruthBooths = [...addedTruthBooths];
      updatedAddedTruthBooths[index].correct = newTruthBooth.correct;
      setAddedTruthBooths(updatedAddedTruthBooths);
    }
  }

  function deletePair(id) {
    const updatedAddedTruthBooths = [...addedTruthBooths]
    updatedAddedTruthBooths.splice(id,1);
    setAddedTruthBooths(updatedAddedTruthBooths);
  }

  function runSimulation(runs) {
    let chosenTruthBooths = [...truthBooths.filter(booth => booth.week <= week), ...addedTruthBooths];
    let chosenMatchingCeremonies = [...matchingCeremonies.filter(ceremony => ceremony.week <= week)];
    let results = manyRuns(runs, contestants, chosenTruthBooths, chosenMatchingCeremonies);
    setSimulationResults(results);
  }

  return (
    <Container fluid className="App">
      <PageHeader season={8}/>
      <Header>Week by week data</Header>
      <SetData matchingCeremonies={matchingCeremonies} truthBooths={truthBooths} week = {week} setWeek={setWeek}/>
      <Header>Simulation</Header>
      <Row className="ml-3 mr-3 mb-3">
        <Col xs={12} sm={6} lg={4}>
          <InputData contestants={contestants} addTruthBooth={addTruthBooth} truthBooths={truthBooths} week ={week}/>
        </Col>
        <Col xs={12} sm={6} lg={4} >
          <AddedData addedTruthBooths={addedTruthBooths} deletePair = {deletePair}/>
        </Col>
        <Col xs={12} lg={4}>
          <RunSimulation runSimulation={runSimulation} />
        </Col>
      </Row>
      {simulationResults && 
      <>
        <Header>Results</Header>
        <ResultsDetail simulationResults = {simulationResults}/> 
        </>    
      }
    </Container>
  );
}

export default Season8;
