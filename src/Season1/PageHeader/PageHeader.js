import React from 'react';
import {Jumbotron } from 'react-bootstrap';

import './PageHeader.css';


function PageHeader(props) {

    return (
        <Jumbotron className="my-5 p-4 page-header">
            <h1>Season {props.season}</h1>
        </Jumbotron>
    );
}

export default PageHeader;
