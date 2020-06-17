import React from 'react';
import { Row } from 'react-bootstrap';
import './Header.css';

function Header(props) {

    return (
        <Row className="header mt-2 ml-3 mr-3">
            <div className="m-2">
            <h4>{props.children}</h4>
            </div>
        </Row>
    );
}

export default Header;
