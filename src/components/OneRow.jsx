import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import OneColumn from "./OneColumn";
import { useDispatch } from "react-redux";
import { getNoOfColumns, getLongestColLabel } from "../redux/action";
import ContentEditable from "react-contenteditable";

const OneRow = ({ index, row, createArr }) => {
  const dispatch = useDispatch();
  const [rowLabel, setRowLabel] = useState(`Row${index}`);
  const [longestColLabel, setLongestColLabel] = useState([""]);

  useEffect(() => {
    dispatch(getNoOfColumns(row));
    dispatch(getLongestColLabel(longestColLabel));
    createArr(rowLabel);
  }, [row, dispatch, rowLabel, longestColLabel]);

  const arrOfColLabels = (label) => {
    console.log("");
    let colLabel = [label.length > longestColLabel[0].length ? label : longestColLabel[0]];
    console.log(colLabel);
    setLongestColLabel(colLabel);
  };

  return (
    <>
      {index === 0 ? (
        <tr key={index} className="tableRow ">
          <div className="d-flex justify-content-start gap-2  "></div>
          {row.map((col, i) => (
            <>
              <OneColumn col={col} i={i} rowIndex={index} key={`${index}${i}`} arrOfColLabels={arrOfColLabels} />
            </>
          ))}
        </tr>
      ) : (
        <tr key={index} className="tableRow py-3">
          <div className="d-flex justify-content-start gap-2  ">
            <ImageModal index={index} imageClass="rowImage" imageDivClass="rowImageDiv" />
            <ContentEditable
              className="rowLabel d-flex pt-3 align-items-center"
              tagName="p"
              html={rowLabel}
              onChange={(e) => {
                setRowLabel(e.target.value);
              }}
            />
          </div>

          {row.map((col, i) => (
            <>
              <OneColumn col={col} i={i} rowIndex={index} arrOfColLabels={arrOfColLabels} key={`${index}${i}`} />
            </>
          ))}
        </tr>
      )}
    </>
  );
};

export default OneRow;
