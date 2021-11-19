import React from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";

const Rows = () => {
  return (
    <>
      {/* <Container className=" "> */}
      {/* <Row> */}
      {/* <Col className=""> */}

      {/* <Table>               */}
      <tbody>
        <tr>
          <th>
            <div className="d-flex justify-content-end gap-2 ">
              <img className="d-flex justify-content-center" src="http://placehold.it/40" alt="Dummy Image" />
              <span className="d-flex align-items-center">
                <em>row 1</em>
              </span>
            </div>
          </th>
          <td>
            <div className="d-flex justify-content-center pt-2 gap-2 ">
              <Form.Group className=" d-flex align-items-center" controlId="formBasicCheckbox">
                <Form.Check className=" d-flex align-items-center" type="radio" id="Yes" />
              </Form.Group>
            </div>
          </td>
          <td>
            <div className="d-flex justify-content-center pt-2 gap-2 ">
              <Form.Group className=" d-flex align-items-center" controlId="formBasicCheckbox">
                <Form.Check className=" d-flex align-items-center" type="radio" id="Yes" />
              </Form.Group>
            </div>
          </td>
          <td>
            <div className="d-flex justify-content-center pt-2 gap-2 ">
              <Form.Group className=" d-flex align-items-center" controlId="formBasicCheckbox">
                <Form.Check className=" d-flex align-items-center" type="radio" id="Yes" />
              </Form.Group>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <div className="d-flex justify-content-end gap-2 ">
              <img className="d-flex justify-content-center" src="http://placehold.it/40" alt="Dummy Image" />
              <span className="d-flex align-items-center">
                <em>row 1</em>
              </span>
            </div>
          </th>
          <td>
            <div className="d-flex justify-content-center pt-2 gap-2 ">
              <Form.Group className=" d-flex align-items-center" controlId="formBasicCheckbox">
                <Form.Check className=" d-flex align-items-center" type="radio" id="Yes" />
                {/* <Form.Check inline type="checkbox" id="No" label="No, I can't make it" checked={no} onChange={handleNo} /> */}
              </Form.Group>
            </div>
          </td>
          <td>
            <div className="d-flex justify-content-center pt-2 gap-2 ">
              <Form.Group className=" d-flex align-items-center" controlId="formBasicCheckbox">
                <Form.Check className=" d-flex align-items-center" type="radio" id="Yes" />
              </Form.Group>
            </div>
          </td>
          <td>
            <div className="d-flex justify-content-center pt-2 gap-2 ">
              <Form.Group className=" d-flex align-items-center" controlId="formBasicCheckbox">
                <Form.Check className=" d-flex align-items-center" type="radio" id="Yes" />
              </Form.Group>
            </div>
          </td>
        </tr>
      </tbody>

      <Form>
        {["checkbox", "radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="1" name="group1" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="2" name="group1" type={type} id={`inline-${type}-2`} />
            <Form.Check inline disabled label="3 (disabled)" type={type} id={`inline-${type}-3`} />
          </div>
        ))}
      </Form>

      {/* </Table> */}
      {/* </Col> */}

      {/* </Row> */}
      {/* </Container> */}
    </>
  );
};

export default Rows;
