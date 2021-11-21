import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import EditionView from "./EditionView";
import SummaryView from "./SummaryView";

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center pt-5">
        <h1>This is the question editor</h1>
      </div>
      <Container className=" ">
        <Row>
          <Col className="">
            <div className="d-grid justify-content-center pt-5">
              <h3>Question Edition View</h3>
              <EditionView/>
            </div>
          </Col>
          <Col className="d-grid justify-content-center pt-5">
            <h3>Question Summary View</h3>
            <SummaryView/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
