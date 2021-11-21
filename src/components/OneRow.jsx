import React, { useState, useRef } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import ImageModal from "./ImageModal";
import OneColumn from "./OneColumn";

const OneRow = ({ index, row }) => {
  return (
    <>
      {index === 0 ? (
        <tr key={index}>
          <div></div>
          {row.map((col, i) => (
            <>
              <OneColumn col={col} i={i} rowIndex={index} />
            </>
          ))}
        </tr>
      ) : (
        <tr key={index}>
          <div className="d-flex justify-content-start gap-2 ">
            {/* <img className=" " onClick={addRowImage} src={rowImage} alt="rowImage" /> */}
            <ImageModal index={index} />

            <span contenteditable="true">
              <em>row {index}</em>
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
