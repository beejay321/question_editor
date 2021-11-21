import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";

const SummaryView = () => {
  const [numRow] = useState("");
  const [numCol, setNumCol] = useState("");
  const [numImages, setNumImages] = useState("");
  const [rowLabel, setRowLabel] = useState("");
  const [colLabel, setColLabel] = useState("");
  const number = useSelector((state) => state);


  return (
    <>
      <Container className=" ">
        <p>Number Of Rows : {number.lengthOfRows}</p>
        <p>Number Of Columns : {number.lengthOfCols}</p>
        <p>Number Of images Uploaded :</p>
        <p>Longest row label :</p>
        <p>Longest column label : </p>
      </Container>
    </>
  );
};

export default SummaryView;
