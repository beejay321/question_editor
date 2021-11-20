import React from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";

const OneColumn = ({ col }) => {
  return (
    <>
      <td>{col.title}</td>
    </>
  );
};

export default OneColumn;
