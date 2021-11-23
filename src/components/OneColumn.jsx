import React, { useState } from "react";
import ImageModal from "./ImageModal";
import ContentEditable from "react-contenteditable";

const OneColumn = ({ col, i, rowIndex }) => {
  const [editableText, setEditableText] = useState(`Col ${i + 1}`);
  const [inputValues, setInputValues] = useState({
    id: 0,
    type: col.type,
    name: "",
    value: col.value,
  });

  const handleChangeInput = (i, e) => {
    setInputValues({
      id: parseInt(e.target.id),
      type: "radio",
      name: e.target.name,
      value: e.target.value,
    });
    console.log(inputValues);
  };

  return (
    <>
      {col.type === "image" ? (
        <td className="tableCell ">
          <div className="d-grid justify-content-start gap-2 ">
            <ImageModal imageClass="colImage" imageDivClass="colImageDiv" />
            <ContentEditable
              className="rowText d-flex"
              tagName="p"
              html={editableText}
              onChange={(e) => {
                const html = e.target.value;
                setEditableText(html);
              }}
            />
          </div>
        </td>
      ) : (
        <td className="tableCell">
          <div className="d-grid justify-content-center pt-2  ">
            <input type={inputValues.type} id={`${rowIndex}${i}`} name={`Row ${rowIndex}`} defaultValue={inputValues.value} onChange={(e) => handleChangeInput(i, e)} />
          </div>
          {/* <input type={col.type} id={col.id} name={i} defaultValue={col.value} /> //  if the selected buttons were to have the same name vertically*/}
        </td>
      )}
    </>
  );
};

export default OneColumn;
