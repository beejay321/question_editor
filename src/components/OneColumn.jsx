import React, { useState } from "react";
import ImageModal from "./ImageModal";
import ContentEditable from "react-contenteditable";

const OneColumn = ({ col, i, rowIndex }) => {
  const [editableText, setEditableText] = useState(`Col ${i + 1}`);

  return (
    <>
      {col.type === "image" ? (
        <td className=" ">
          <div className="d-grid justify-content-start gap-2 ">
            <ImageModal />
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
        </td>
      ) : (
        <td className=" tableCell ">
          <div className="d-grid justify-content-center pt-2  ">
            <input type={col.type} id={col.id} name={rowIndex} defaultValue={col.value} />
          </div>
          {/* <input type={col.type} id={col.id} name={i} defaultValue={col.value} /> //  if the selected buttons were to have the same name vertically*/}
        </td>
      )}
    </>
  );
};

export default OneColumn;
