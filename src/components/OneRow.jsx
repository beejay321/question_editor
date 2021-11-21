import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import ImageModal from "./ImageModal";
import OneColumn from "./OneColumn";
import {  useDispatch } from "react-redux";
import { getNoOfColumns } from "../redux/action";

const OneRow = ({ index, row }) => {
  const dispatch = useDispatch();
  const [rowLabel, setRowLabel] = useState(`row ${index}`);

  useEffect(() => {
    dispatch(getNoOfColumns(row));
  }, [row]);  

  // useEffect(() => {
  //   const rowLabelLength = () => {
  //     console.log("rowLabelLength");
  //     console.log(row.length);
  //     setColCount(row.length);
  //   };
  //   rowLabelLength();
  // }, [row]);

  return (
    <>
      {index === 0 ? (
        <tr key={index} className="tableRow " >
          <div></div>
          {row.map((col, i) => (
            <>
              <OneColumn col={col} i={i} rowIndex={index} />
            </>
          ))}
        </tr>
      ) : (
        <tr key={index} className="tableRow ">
          <div className="d-flex justify-content-start gap-2 ">
            <ImageModal index={index} />
            <span contenteditable="true" className="rowText" >
              <em>{rowLabel}</em>
            </span>
          </div>
          {row.map((col, i) => (
            <>
              <OneColumn col={col} i={i} rowIndex={index} />
            </>
          ))}
        </tr>
      )}
    </>
  );
};

export default OneRow;
