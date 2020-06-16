import React from 'react';
import {Col, Image } from 'react-bootstrap';

import './HomePage.css';

function SeasonImageLink(props) {
    return (
        <Col>
            <h3>{props.children}</h3>
            <Image src={require(`./GroupPhotos/${props.season}.jpg`)} rounded fluid className="group" />
        </Col>
    );
}

export default SeasonImageLink;