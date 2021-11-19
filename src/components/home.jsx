import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Rows from "./row";
import Columns from "./columns";

const Home = () => {
  const [rows, setRows] = useState([
    {
      image1: "http://placehold.it/40",
      title1: "row1",
      Col1: "",
      //   Col2: "",
      //   Col3: "",
    },
    {
      image1: "http://placehold.it/40",
      title1: "row1",
      Col1: "",
      //   Col2: "",
      //   Col3: "",
    },
  ]);

  const [cols, setCols] = useState([
    {
      image1: "http://placehold.it/40",
      title1: "Col1",
      Row1: "",
    },
  ]);

  const [no, setNo] = useState(false);

  const handleChange = (index, event) => {
    const values = [...rows];
    values[index][event.target.name] = event.target.value;
    setRows(values);
  };

  const addRow = () => {
    console.log("me");
    setRows([
      ...rows,
      {
        image1: "http://placehold.it/40",
        title1: "row1",
        Col1: "",
        Col2: "",
        Col3: "",
      },
    ]);
  };
  const addCol = () => {
    console.log("addCol");
    const newRows = rows.map((row) => ({...row, newCol :""}));    

    setRows(newRows);
    console.log(newRows);
    
    // const columns = rows[0].getElementsByTagName("td").length;
    // if (!pos && pos !== 0) {
    //   pos = columns;
    // }
  };
  return (
    <>
      <div className="d-flex justify-content-center pt-5">
        <h1>This is the question editor</h1>
      </div>
      <Container className=" ">
        <Row>
          <Col className="">
            <div className="d-flex justify-content-center pt-5">
              <h3>Question Edition View</h3>
            </div>
            <div className="pt-4">
              <h5>
                <em>Title Of Question</em>
              </h5>
            </div>
            <Table>
              {/* <Columns /> */}
              {/* <Rows /> */}
              <tbody>
                <tr id="eachRow">
                  <td></td>
                  <td>
                    <div className="d-grid ">
                      <img className=" " src="http://placehold.it/40" alt="Dummy Image" />
                      <span contenteditable="true">
                        <em>Col 1</em>
                      </span>
                    </div>
                  </td>

                  <td>
                    <Button onClick={addCol}>+</Button>
                  </td>
                </tr>
                {rows.map((row, index) => (
                  <tr id="eachRow" key={index}>
                    <td>
                      <div className="d-flex justify-content-start gap-2 ">
                        <img className="d-flex justify-content-center" src="http://placehold.it/40" alt="Dummy Image" />
                        <span contenteditable="true" className="d-flex align-items-center">
                          <em>{row.title1}</em>
                        </span>
                      </div>
                    </td>
                    <td>
                      <input type="radio" id="huey" name="col1" defaultValue={row.Col1} />
                      {/* <input type="radio" id="huey" name="col1" defaultValue={row.Col1} checked={true} onChange={(event) => handleChange(index, event)} /> */}
                    </td>
                    {/* <td>
                      <input type="radio" id="huey" name="col2" defaultValue={row.Col2} />
                    </td>
                    <td>
                      <input type="radio" id="huey" name="col3" defaultValue={row.Col3} />
                    </td>
                    <td>
                      <input type="radio" id="huey" name="col4" defaultValue={row.Col3} />
                    </td>
                    <td>
                      <input type="radio" id="huey" name="col5" defaultValue={row.Col3} />
                    </td> */}
                  </tr>
                ))}
                <tr id="eachRow">
                  <td>
                    <Button onClick={addRow}>+</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col className="d-flex justify-content-center pt-5">
            <h3>Question Summary View</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
