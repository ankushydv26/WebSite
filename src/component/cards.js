import React, { Component, Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Mcard from "./Mcard";
import Mcard2 from  "./Mcard2"
import Mcard3 from  "./Mcard3"

import "./card.css";

class cards extends Component {
  render() {
    return (
      <Fragment>
        <div className="cards" style={{ padding: "50px 60px 50px 60px" }}>
          <Row lg="12">
            <Col md="3">
              <Mcard />
            </Col>
            <Col md="3">
              <Mcard />
            </Col>
            <Col md="3">
              <Mcard/>
            </Col>
            <Col md="3">
              <Mcard/>
            </Col>
          </Row>
          <Row lg='12' md='12' sm='12' xs='12'>
            <Col md='4'>
              <Mcard2/>
            </Col>
            <Col md='2'>
              <Mcard3/>
            </Col>
            <Col md='2'>
              <Mcard3/>
            </Col>
            <Col md='2'>
              <Mcard3/>
            </Col>
            <Col md='2'>
              <Mcard3/>
            </Col>
          </Row>
          
        </div>
      </Fragment>
    );
  }
}

export default cards;
