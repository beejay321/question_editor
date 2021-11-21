import React, { useState } from "react";
import { Container  } from "react-bootstrap";
import {  useSelector } from "react-redux";

const SummaryView = () => {  
  const [numImages, setNumImages] = useState("");
  const [rowLabel, setRowLabel] = useState("");
  const [colLabel, setColLabel] = useState("");
  const number = useSelector((state) => state);

  return (
    <>
      <Container className=" ">
        <p className = "summaryText py-1">Number Of Rows : {number.lengthOfRows}</p>
        <p className = "summaryText py-1">Number Of Columns : {number.lengthOfCols}</p>
        <p className = "summaryText py-1">Number Of images Uploaded :</p>
        <p className = "summaryText py-1">Longest row label :</p>
        <p className = "summaryText py-1">Longest column label : </p>
      </Container>
    </>
  );
};

export default SummaryView;
