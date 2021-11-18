import React from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";

const Columns = () => {
  return (
    <>
      {/* <Container className=" "> */}
      {/* <Row> */}
      {/* <Col className=""> */}

      {/* <Table>               */}
      <thead>
        <tr>
          <th></th>
          <th>
            <div className="d-grid justify-content-center gap-2 ">
              <img className="d-flex justify-content-center" src="http://placehold.it/40" alt="Dummy Image" />
              <span className="d-flex justify-content-center">
                <em>Col 1</em>
              </span>
            </div>
          </th>
          <th>
            <div className="d-grid justify-content-center gap-2 ">
              <img className="d-flex justify-content-center" src="http://placehold.it/40" alt="Dummy Image" />
              <span className="d-flex justify-content-center">
                <em>Col 2</em>{" "}
              </span>
            </div>
          </th>
          <th>
            <div className="d-grid justify-content-center gap-2 ">
              <img className="d-flex justify-content-center" src="http://placehold.it/40" alt="Dummy Image" />
              <span className="d-flex justify-content-center">
                <em>Col 3</em>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      {/* </Table> */}
      {/* </Col> */}

      {/* </Row> */}
      {/* </Container> */}
    </>
  );
};

export default Columns;
