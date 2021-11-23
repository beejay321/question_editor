import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import OneColumn from "./OneColumn";
import { useDispatch } from "react-redux";
import { getNoOfColumns } from "../redux/action";
import ContentEditable from "react-contenteditable";

const OneRow = ({ index, row }) => {
  const dispatch = useDispatch();
  const [editableText, setEditableText] = useState(`row ${index}`);

  useEffect(() => {
    dispatch(getNoOfColumns(row));
  }, [row, dispatch]);

  // useEffect(() => {
  //   const rowLabelLength = () => {
  //     console.log("rowLabelLength");
  //     console.log(row.length);
  //     setColCount(row.length);
  //   };
  //   rowLabelLength();
  // }, [row]);

  return (
    <>
      {index === 0 ? (
        <tr key={index} className="tableRow ">
          <div></div>
          {row.map((col, i) => (
            <>
              <OneColumn col={col} i={i} rowIndex={index} />
            </>
          ))}
        </tr>
      ) : (
        <tr key={index} className="tableRow py-3">
          <div className="d-flex justify-content-start gap-2 ">
            <ImageModal index={index} imageClass="rowImage" imageDivClass="rowImageDiv" />
            <ContentEditable
              className="rowText"
              tagName="p"
              html={editableText}
              onChange={(e) => {
                const html = e.target.value;
                setEditableText(html);
              }}
            />
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
