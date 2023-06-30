import React from "react";
import { Col, Row } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';

function Counts () {
          return (
                    <div className="Counts">
                              <Row className="Counts_Header">
                                        <Col>
                                        <h2>The numbers speak for themselves</h2>
                                        </Col>
                                         <Col>
                                         <h3>100 </h3>
                                         <p>Trainees</p>
                                         </Col>
                                          <Col>
                                        <h3>10 </h3>
                                         <p>Donors</p>
                                          </Col>
                                          <Col>
                                        <h3>25 </h3>
                                         <p>Job Placements</p>
                                          </Col>
                              </Row>
                              
                    </div>
          )
}
export default Counts;