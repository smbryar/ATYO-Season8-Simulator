import React from 'react';
import { Row } from 'react-bootstrap';

import Week from './Week';
import './SetData.css'
import ChooseWeek from './ChooseWeek';

function SetData(props) {
  const weeksToShow = props.matchingCeremonies.filter(ceremony => ceremony.week <= props.week);
    
  return (
    <>
    <ChooseWeek week={props.week} setWeek = {props.setWeek}/>
    <Row className="ml-3 mr-3 mt-2 set-data">
        {weeksToShow.map((ceremony, i) => (
        <Week matchingCeremony = {ceremony} week = {ceremony.week} key={ceremony.week} truthBooth = {props.truthBooths.filter(booth => booth.week === ceremony.week)}/>))}
      </Row>
      </>
  );
}

export default SetData;
