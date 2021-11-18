import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Rows from "./row";
import Columns from "./columns";

const Home = () => {
  const [rows, setRows] = useState({
    Col1: "",
    Col2: "",
  });

  const addRow = () => {
   setRows([...rows, {Col1: "", Col2: ""}])

  return (
    <>
      <div className="d-flex justify-content-center pt-5">
        <h1>This is the question editor</h1>
      </div>
      <Container className=" ">
        <Row>
          <Col className="">
            <div className="d-flex justify-content-center pt-5">
              <h3>Question Edition View</h3>
            </div>
            <div className="pt-4">
              <h5>
                <em>Title Of Question</em>
              </h5>
            </div>
            <Table>
              <Columns />
              <Rows />

              <tbody>
                <tr id="eachRow">
                  <td>
                      <input>
                      Option 1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
            <Button onClick={addRow}>+</Button>
          </Col>
          <Col className="d-flex justify-content-center pt-5">
            <h3>Question Summary View</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
