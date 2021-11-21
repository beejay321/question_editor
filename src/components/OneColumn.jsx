import React from "react";
import ImageModal from "./ImageModal";
// import { Container, Row, Col, Table, Form } from "react-bootstrap";

const OneColumn = ({ col, i, rowIndex }) => {
  return (
    <>
      {col.type === "image" ? (
        <th>
          <div className="d-grid justify-content-start gap-2 ">
            {/* <img className="d-flex justify-content-start" src="http://placehold.it/40" alt="Dummy Image" /> */}
            <ImageModal />
            <span className="d-flex justify-content-start">
              <span contentEditable="true">
                <em>Col {i + 1}</em>
              </span>
            </span>
          </div>
        </th>
      ) : (
        <td>
          <input type={col.type} id={col.id} name={rowIndex} defaultValue={col.value} />
          {/* <input type={col.type} id={col.id} name={i} defaultValue={col.value} /> //  if the selected buttons were to have the same name vertically*/}
        </td>
      )}
    </>
  );
};

export default OneColumn;
