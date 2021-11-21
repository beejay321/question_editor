import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Arr from "../imports/file.json";
import OneRow from "./OneRow";

const EditionView = () => {
  //this is the schema for each object
  const obj = {
    id: 0,
    title: "hi",
    type: "radio",
    name: "",
    value: "",
  };

  const arrObj = [obj, obj]; //this is an array of the objects
  const itemsArr = [arrObj, arrObj]; //this is an array containing all array of objects which equivalent to Arr import

  const [oneRow, setOneRow] = useState(Arr); //this is an array containing all rowArrays

  const addRow = () => {
    setOneRow([...oneRow, oneRow[oneRow.length - 1]]);
  };

  const addCol = () => {
    setOneRow([...oneRow.map((row, i) => [...row, row[row.length - 1]])]);
  };

  return (
    <>
      {/* <div className="d-flex justify-content-center pt-5">
        <h1>This is the question editor</h1>
      </div> */}
      <Container className=" ">
        <Row>
          <Col className="">
            <div className="pt-4">
              <h5 contenteditable="true">
                <em>Title Of Question</em>
              </h5>
            </div>
            <div className="d-flex ">
              <Table>
                <tbody>
                  {oneRow.map((row, index) => (
                    <>
                      <OneRow row={row} index={index} key={index} />
                    </>
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
          
        </Row>
      </Container>
    </>
  );
};

export default EditionView;
