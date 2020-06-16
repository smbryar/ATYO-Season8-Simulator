import React from 'react';
import { Row, Table } from 'react-bootstrap';
import './ResultsDetail.css';

function ResultsDetail(props) {

  return (
    <>
    <Row className="ml-3 mr-3 mt-2 mb-3 results-detail">
      <div className="m-2">
        <h5>{props.simulationResults.number} distinct solution{props.simulationResults.number === 1 ? "" : "s"} found by the simulator</h5> <br />
        {Object.keys(props.simulationResults.solutions).map((solution, i) => (
          <div>
            {i + 1}: {solution} <br />
          </div>
        ))}

      </div>
      <Table bordered size="sm">
        <tr>
          <td>
            PERSON
          </td>
          <td>
            POSSIBLE MATCHES
          </td>
        </tr>
        <tbody>
          {Object.keys(props.simulationResults.matches).map(person => (
            <tr>
              <td>
                {person}
              </td>
              <td>
                {Array.from(props.simulationResults.matches[person].values()).join("/")}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Row>
    </>
  );
}

export default ResultsDetail;
