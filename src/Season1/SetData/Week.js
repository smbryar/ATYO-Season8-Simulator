import React from 'react';
import { Row, Col } from 'react-bootstrap';

import TruthBooth from './TruthBooth';
import MatchingCeremony from './MatchingCeremony';
import './Week.css'

function Week(props) {
    return (
        <Col className = "ml-2 mr-2 week">
            <Row>
                <div>
                    <h5>Week {props.week}</h5>
                </div>

            </Row>
            <TruthBooth truthBooth = {props.truthBooth}/>
            <MatchingCeremony matchingCeremony={props.matchingCeremony} />
        </Col>
    );
}

export default Week;
