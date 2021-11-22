import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Arr from "../imports/file.json";
import OneRow from "./OneRow";
import { getNoOfRows } from "../redux/action";
import { useDispatch } from "react-redux";
import plus from "../assets/images/plus-lg-green.svg";
import dash from "../assets/images/dash-lg.svg";
import ContentEditable from "react-contenteditable";

const EditionView = () => {
  //this is the schema for each object
  const obj = {
    id: 0,
    type: "radio",
    name: "",
    value: "",
  };

  const arrObj = [obj, obj]; //this is an array of the objects
  const itemsArr = [arrObj, arrObj]; //this is an array containing all array of objects which equivalent to Arr import

  const [oneRow, setOneRow] = useState(Arr); //this is an array containing all rowArrays
  const [rowCount, setRowCount] = useState("");
  const [questionTitle, setQuestionTitle] = useState(`Title Of Question`);
  const dispatch = useDispatch();

  const ADDRESS = "https://question-editorr.herokuapp.com";

  const getQuestion = async () => {    
    try {
      const response = await fetch(`${ADDRESS}/questions`);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        // setOneRow(data[0].rows);
        console.log("Successful");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getNoOfRows(oneRow));
    getQuestion();
  }, [oneRow]);

  const addRow = () => {
    setOneRow([...oneRow, oneRow[oneRow.length - 1]]);
  };
  const removeRow = () => {
    if (oneRow.length > 2) {
      setOneRow(oneRow.slice(0, -1));
    }
  };

  const addCol = () => {
    setOneRow([...oneRow.map((row, i) => [...row, row[row.length - 1]])]);
  };

  const removeCol = () => {
    let result = [...oneRow.map((row, i) => row.slice(0, -1))];
    setOneRow(result);
  };

  return (
    <>
      <Container className=" ">
        <Row>
          <div className="p-3 mb-3 tableHeading">
            <ContentEditable
              className="tableHeading"
              tagName="h5"
              html={questionTitle}
              onChange={(e) => {
                const html = e.target.value;
                setQuestionTitle(html);
              }}
            />
          </div>
        </Row>
        <Row>
          <Col className="">
            <div className="d-flex table ">
              <div>
                <Table>
                  <tbody className="table">
                    {oneRow.map((row, index) => (
                      <>
                        <OneRow row={row} index={index} key={index} />
                      </>
                    ))}
                  </tbody>
                </Table>

                <div className=" px-2 ">
                  <div className="rowImageDiv  ">
                    <img className="rowImage " onClick={addRow} src={plus} alt="rowImage" />
                  </div>
                  <div className="rowImageDiv px-2 ">
                    <img className="rowImage " onClick={removeRow} src={dash} alt="rowImage" />
                  </div>
                </div>
              </div>
              <div className="d-flex pt-3  gap-2">
                <div className="rowImageDiv px-2 ">
                  <img className="rowImage " onClick={addCol} src={plus} alt="rowImage" />
                </div>
                <div className="rowImageDiv px-2 ">
                  <img className="rowImage " onClick={removeCol} src={dash} alt="rowImage" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditionView;
