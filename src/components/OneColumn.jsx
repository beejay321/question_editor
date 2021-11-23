import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import ContentEditable from "react-contenteditable";

const OneColumn = ({ col, i, rowIndex, key, arrOfColLabels }) => {
  const [colLabel, setColLabel] = useState(`Col ${i + 1}`);
  const [inputValues, setInputValues] = useState({
    id: 0,
    type: col.type,
    name: "",
    value: col.value,
  });

  useEffect(() => {
    arrOfColLabels(colLabel);
  }, [colLabel]);

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
        <td key={key} className=" tableCell ">
          <div className="d-grid justify-content-start gap-2 ">
            <ImageModal imageClass="colImage" imageDivClass="colImageDiv" />
            <ContentEditable
              className="rowText d-flex"
              tagName="p"
              html={colLabel}
              onChange={(e) => {
                setColLabel(e.target.value);
              }}
            />
          </div>
        </td>
      ) : (
        <td key={key} className="tableCell">
          <div className="d-grid justify-content-start pt-2 px-3">
            <input type={inputValues.type} id={`${rowIndex}${i}`} name={`Row ${rowIndex}`} defaultValue={inputValues.value} onChange={(e) => handleChangeInput(i, e)} />
          </div>
          {/* <input type={col.type} id={col.id} name={i} defaultValue={col.value} /> //  if the selected buttons were to have the same name vertically*/}
        </td>
      )}
    </>
  );
};

export default OneColumn;
