import React, {useState} from 'react';
import { Row } from 'react-bootstrap';

import Week from './Week';
import './SetData.css'
import ChooseWeek from './ChooseWeek';

function SetData(props) {
  const [week, setWeek] = useState(0);
  const weeksToShow = props.matchingCeremonies.filter(ceremony => ceremony.week <= week);
    
  return (
    <>
    <ChooseWeek week={week} setWeek = {setWeek}/>
    <Row className="ml-3 mr-3 mt-2 set-data">
        {weeksToShow.map((ceremony, i) => (
        <Week matchingCeremony = {ceremony} week = {ceremony.week} key={ceremony.week} truthBooth = {props.truthBooths[i]}/>))}
      </Row>
      </>
  );
}

export default SetData;
