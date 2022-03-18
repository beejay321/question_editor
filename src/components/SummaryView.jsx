import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SummaryView = () => {
  const [images, setImages] = useState([]);
  const [numOfImages, setNumOfImages] = useState(0);
  const currentState = useSelector((state) => state);

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

  useEffect(() => {
    getImages();
    const imageLength = () => {
      setNumOfImages(images.length);
    };
    imageLength();
  }, [images.length]);

  return (
    <>
      <div className=" summary   py-5 px-5">
        <p className="summaryText py-1">Number Of Rows : {currentState.lengthOfRows}</p>
        <p className="summaryText py-1">Number Of Columns : {currentState.lengthOfCols}</p>
        <p className="summaryText py-1">Number Of images Uploaded : {numOfImages} </p>
        <p className="summaryText py-1">Longest row label : {currentState.longestRowLabel}</p>
        <p className="summaryText py-1">Longest column label : {currentState.longestColLabel} </p>
      </div>
    </>
  );
};

export default SummaryView;
