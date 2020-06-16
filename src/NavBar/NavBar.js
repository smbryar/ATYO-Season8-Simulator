import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar className="navbar--AYTO" expand="sm" fixed="top" expanded={expanded}>
            <Navbar.Brand className="brand--AYTO">Are You The One</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav onClick={() => setExpanded(false)}>
                    <Link className="px-3 navlink--AYTO" to="/" >Home</Link>
                    {props.seasons.map(season => (
                    <Link className={`px-3 navlink--AYTO ${!props.activeSeasons.includes(season) ? "disabled-link" : ""}`} to={`/season${season}`} >Season {season}</Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;