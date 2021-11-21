import React, { useState, useRef } from "react";
import { Modal, Button, Image, Spinner, Form } from "react-bootstrap";

const ImageModal = ({ index }) => {
  const [show, setShow] = useState(false);

  const [rowImage, setRowImage] = useState("http://placehold.it/40");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedRow, setSelectedRow] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ADDRESS = "http://localhost:3255/rows";
  // const ADDRESS = "https://question-editorr.herokuapp.com/rows";

  const addRowImage = async (e, index) => {
    e.preventDefault();
    setImageLoading(true);
    try {
      const id = index + 1;
      const response = await fetch(`${ADDRESS}/619a8411ebb70416125daf8a/uploadImage`, {
        method: "POST",
        body: selectedImage,
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRowImage(data.images);
        console.log("Sucessfully posted");
        setImageLoading(false);
      } else {
        console.log("File was not uploaded!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selectImage = (e) => {
    e.preventDefault();
    const data = e.target.files[0];
    let formData = new FormData();
    formData.append("image", data);
    setSelectedImage(formData);
  };
  return (
    <>
      <div className="rowImageDiv ">
        <img className="rowImage " onClick={handleShow} src={rowImage} alt="rowImage" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Form onSubmit={addRowImage}>
          <Modal.Body>
            <div className="d-grid" id="selectimages">
              <div className="modalImageDiv d-flex justify-content-center ">
                {imageLoading ? (
                  <div>
                    <Spinner animation="border" variant="warning" size="sm" />
                    <Spinner animation="border" variant="success" />
                  </div>
                ) : (
                  <Image className="" height="150" src={rowImage} />
                )}
              </div>
              <Form.Group className="mt-3">
                <Form.Control id="picture" type="file" onChange={selectImage} />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer className=" addpostfooterbtn-section d-flex justify-content-between ">
            <div className=" d-flex gap-2 ">
              <Button type="submit" variant="primary" onClick={addRowImage}>
                Upload
              </Button>
              <Button type="submit" variant="primary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ImageModal;
