import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Season8 from './Season 8/Season8';
import NavBar from './NavBar/NavBar';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/season8">
            <Container fluid>
              <Season8/>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
