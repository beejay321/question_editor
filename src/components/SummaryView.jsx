import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const SummaryView = () => {
  const [images, setImages] = useState([]);
  const [numOfImages, setNumOfImages] = useState(0);
  const [rowLabel, setRowLabel] = useState("");
  const [colLabel, setColLabel] = useState("");
  const number = useSelector((state) => state);

  const ADDRESS = "https://question-editorr.herokuapp.com";

  const getImages = async () => {
    try {
      const response = await fetch(`${ADDRESS}/images`);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setImages(data);
        console.log("Successful");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const imageLength = () => {
    setNumOfImages(images.length);
  };

  useEffect(() => {
    getImages();
    imageLength();
  }, []);

  return (
    <>
      {/* <Container className=" summary"> */}
        <div className=" summary py-4 px-4">
          <p className="summaryText py-1">Number Of Rows : {number.lengthOfRows}</p>
          <p className="summaryText py-1">Number Of Columns : {number.lengthOfCols}</p>
          <p className="summaryText py-1">Number Of images Uploaded : {numOfImages} </p>
          <p className="summaryText py-1">Longest row label :</p>
          <p className="summaryText py-1">Longest column label : </p>
        </div>
      {/* </Container> */}
    </>
  );
};

export default SummaryView;
