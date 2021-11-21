import React from "react";
import ImageModal from "./ImageModal";

const OneColumn = ({ col, i, rowIndex }) => {
  return (
    <>
      {col.type === "image" ? (
        <td className="tableRow ">
          <div className="d-grid justify-content-start gap-2 ">
            <ImageModal />
            <span className="d-flex justify-content-start">
              <span contentEditable="true" className="rowText">
                <em>Col {i + 1}</em>
              </span>
            </span>
          </div>
        </td>
      ) : (
        
          <td className=" tableCell " >
          <div className="d-grid justify-content-center pt-2  " >
            <input type={col.type} id={col.id} name={rowIndex} defaultValue={col.value} />
          </div>
          {/* <input type={col.type} id={col.id} name={i} defaultValue={col.value} /> //  if the selected buttons were to have the same name vertically*/}
        </td>
      )}
    </>
  );
};

export default OneColumn;
