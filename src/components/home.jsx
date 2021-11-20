import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Rows from "./row";
import Columns from "./columns";
import OneRow from "./OneRow";
const Home = () => {
    
  const itemObj = {
    id: 0,
    title: "something",
  };

  const items = [itemObj];
  const itemsArr = [items, items];

  const [oneRow, setOneRow] = useState(itemsArr);
  const [oneCol, setOneCol] = useState(items);

  const addRow = () => {
    setOneRow([...oneRow, oneRow[oneRow.length - 1]]);
  };

  const addCol = () => {
    setOneRow([...oneRow.map((x) => [...x, itemObj])]);
    console.log(oneRow);
  };

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
              <h5 contenteditable="true" >
                <em>Title Of Question</em>
              </h5>
            </div>
            <div className="d-flex ">
              <Table>
                <tbody>
                  {oneRow.map((row) => (
                    <OneRow row={row} />
                  ))}
                  <tr>
                    <td>
                      <Button onClick={addRow}>+</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div>
                <span>
                  <td>
                    <Button onClick={addCol}>+</Button>
                  </td>{" "}
                </span>
              </div>
            </div>
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
