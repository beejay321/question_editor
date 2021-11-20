import React from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import OneColumn from "./OneColumn";

const OneRow = (props) => {
  return (
    <>
      <tr>
        {props.row.map((col) => (
          <OneColumn col={col} />
        ))}
      </tr>
    </>
  );
};

export default OneRow;
