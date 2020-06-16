import React from 'react';
import { Row, Container, Jumbotron } from 'react-bootstrap';

import './HomePage.css';
import SeasonImageLink from './SeasonImageLink';

function HomePage(props) {
    return (
        <>
            <Jumbotron className="my-5 p-4">
                <h1>Are You The One Simulator</h1>
                <p></p>
                <p>This is a simulator to use when watching MTV's Are You The One</p>
                <p>Would you follow your heart or follow the lights?</p>
            </Jumbotron>
            <Container fluid>
                <Row>
                    {props.seasons.map(season => (
                        <SeasonImageLink season={season} activeSeasons={props.activeSeasons}/>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default HomePage;