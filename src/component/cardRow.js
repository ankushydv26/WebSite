import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Mcard3 from "./Mcard3";

class cardRow extends Component {
  render() {
    return (
      <Fragment>
        <div style={{paddingLeft:"70px",paddingRight:"70px",paddingBottom:"70px"}}>
          <span
            style={{
              marginLeft: "100px",
              fontSize: "1.432em",
              fontWeight: "400",
            }}
          >
            Recently Added
          </span>
          <hr
            style={{
              marginLeft: "100px",
              border: "1px solid silver",
              marginRight: "100px",
            }}
          ></hr>
          <Row>
            <Col md="2">
              <Mcard3 />
            </Col>
            <Col md="2">
              <Mcard3 />
            </Col>
            <Col md="2">
              <Mcard3 />
            </Col>
            <Col md="2">
              <Mcard3 />
            </Col>
            <Col md="2">
              <Mcard3 />
            </Col>
            <Col md="2">
              <Mcard3 />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default cardRow;
