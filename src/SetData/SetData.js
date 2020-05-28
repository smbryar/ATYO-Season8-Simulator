import React from 'react';
import { Row } from 'react-bootstrap';

import Week from './Week';
import './SetData.css'

function SetData(props) {
    
  return (
    <Row className="ml-3 mr-3 mt-2 set-data">
        {props.matchingCeremonies.map((ceremony, i) => (
        <Week matchingCeremony = {ceremony} week = {ceremony.week} key={ceremony.week} truthBooth = {props.truthBooths[i]}/>))}
      </Row>
  );
}

export default SetData;
