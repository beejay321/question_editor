import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Arr from "../imports/file.json";
import OneRow from "./OneRow";
import { getNoOfRows, getLongestRowLabel } from "../redux/action";
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
  const [questionTitle, setQuestionTitle] = useState(`Title Of Question`);
  const [longestRowLabel, setLongestRowLabel] = useState([""]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoOfRows(oneRow));
    dispatch(getLongestRowLabel(longestRowLabel));
  }, [oneRow, dispatch, longestRowLabel]);

  const addRow = () => {
    setOneRow([...oneRow, oneRow[oneRow.length - 1]]);
  };
  const removeRow = () => {
    if (oneRow.length > 2) {
      setOneRow(oneRow.slice(0, -1));
    }
  };

  const addCol = () => {
    setOneRow([...oneRow.map((row) => [...row, row[row.length - 1]])]);
  };

  const removeCol = () => {
    let result = oneRow.map((row) => (row.length > 1 ? row.slice(0, -1) : row));
    setOneRow(result);
  };

  const createArr = (label) => {
    console.log(label)
    let rowLabel = [label.length > longestRowLabel[0].length ? label : longestRowLabel[0]];
    console.log(rowLabel);
    setLongestRowLabel(rowLabel);
  };

  return (
    <>
      <div className=" editor ">
        <Row className="p-3 mb-3 tableHeading ">
          <div className="">
            <ContentEditable
              className="tableHeadingText"
              tagName="h5"
              html={questionTitle}
              onChange={(e) => {
                const html = e.target.value;
                setQuestionTitle(html);
              }}
            />
          </div>
        </Row>
        <Row className=" ">
          <Col className="">
            <div className="d-flex table  ">
              <div>
                <Table>
                  <tbody className="table">
                    {oneRow.map((row, index) => (
                      <>
                        <OneRow row={row} index={index} key={index} createArr={createArr} />
                      </>
                    ))}
                  </tbody>
                </Table>

                <div className=" px-2 ">
                  <div className="rowImageDiv  ">
                    <img className="addImage " onClick={addRow} src={plus} alt="rowImage" />
                  </div>
                  <div className="rowImageDiv px-2 ">
                    <img className="addImage " onClick={removeRow} src={dash} alt="rowImage" />
                  </div>
                </div>
              </div>

              <div className="d-flex pt-2 colBtns ">
                <div className="rowImageDiv px-2 ">
                  <img className="addImage " onClick={addCol} src={plus} alt="rowImage" />
                </div>
                <div className="rowImageDiv  ">
                  <img className="addImage " onClick={removeCol} src={dash} alt="rowImage" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EditionView;
