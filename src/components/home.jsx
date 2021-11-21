import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import EditionView from "./EditionView";
import SummaryView from "./SummaryView";

const Home = () => {
  return (
    <>
      <Container className=" ">
        <Row>
          <Col xs={12} md={6} className="d-grid justify-content-center pt-5">
            <h3 className="d-flex justify-content-center">Question Edition View</h3>
            <EditionView />
          </Col>
          <Col xs={12} md={6} className="d-grid justify-content-center pt-5">
            <h3 className="d-flex justify-content-center">Question Summary View</h3>
            <SummaryView />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
