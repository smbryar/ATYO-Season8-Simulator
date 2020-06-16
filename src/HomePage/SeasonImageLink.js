import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './SeasonImageLink.css';

function SeasonImageLink(props) {
    return (
        <Col className="m-2">
            <Link className={`season-link ${!props.activeSeasons.includes(props.season) ? "disabled-link" : ""}`} to={`/season${props.season}`}>Season {props.season}
                <Image src={require(`./GroupPhotos/${props.season}.jpg`)} rounded fluid className="group" />
            </Link>
        </Col>
    );
}

export default SeasonImageLink;