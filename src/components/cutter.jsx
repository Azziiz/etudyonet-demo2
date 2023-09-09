import { Box, Modal, Slider, Button } from "@mui/material";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { FcAddImage } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import logo from '../assets/logo.webp'


/*-----------------------------------------
  Author: Ajay Prakash P P
  Date : 13/09/2022
  Github: https://github.com/mrAJAY1
  LinkedIn: https://www.linkedin.com/in/ajay-prakash-8767a9218/
  
  Current Domain : MERN stack
--------------------------------------------*/

// Styles
const boxStyle = {
  width: "300px",
  height: "300px",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center"
};
const modalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

// Modal
const CropperModal = ({ src, modalOpen, setModalOpen, setPreview}) => {
  const [slideValue, setSlideValue] = useState(10);
  const cropRef = useRef(null);
  const {setOfferPhoto} = UserAuth()

  //handle save
  const handleSave = async () => {
    if (cropRef) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      setPreview(URL.createObjectURL(blob));
      setOfferPhoto(dataUrl)
      setModalOpen(false);
    }
  };

  return (
    <Modal sx={modalStyle} open={modalOpen}>
      <Box sx={boxStyle}>
        <AvatarEditor
          ref={cropRef}
          image={src}
          style={{ width: "100%", height: "100%" }}
          border={30}
          borderRadius={0}
          color={[0, 0, 0, 0.72]}
          scale={slideValue / 20}
          rotate={0}
        />

        {/* MUI Slider */}
        <Slider
          min={10}
          max={50}
          sx={{
            margin: "0 auto",
            width: "80%",
            color: "#FF8C00"
          }}
          size="medium"
          defaultValue={slideValue}
          value={slideValue}
          onChange={(e) => setSlideValue(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            padding: "10px",
            background: "transparent",
            maxWidth: "300px"
          }}
        >
          <Button
            size="small"
            sx={{ marginRight: "10px", color: "#FF8C00", borderColor: "#FF8C00", border: "1px solid #FF8C00", backgroundColor: "white", '&:hover': {
                color: "white",
                backgroundColor: "#FF8C00"
             }
              }}
            onClick={(e) => setModalOpen(false)}
          >
            cancel
          </Button>
          <Button
            sx={{ background: "#FF8C00", color: "white", '&:hover': {
                color: "#FF8C00",
                backgroundColor: "white"
             } }}
            size="small"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

// Container
const Cutter = () => {
  // image src
  const [src, setSrc] = useState(null);

  // preview
  const [preview, setPreview] = useState(null);

  // modal state
  const [modalOpen, setModalOpen] = useState(false);

  // ref to control input element
  const inputRef = useRef(null);

  // handle Click
  const handleInputClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  // handle Change
  const handleImgChange = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
    setModalOpen(true);
  };

  return (
    <>
      <main className="container">
        <CropperModal
          modalOpen={modalOpen}
          src={src}
          setPreview={setPreview}
          setModalOpen={setModalOpen}
        />
        <a href="/" onClick={handleInputClick}>
          <button id="offer-image" disabled={preview}>Upload image for your offer</button>
        </a>

        <input
          type="file"
          accept="image/*"
          id='offer-image-input'
          ref={inputRef}
          onChange={handleImgChange}
          required
          hidden
        />
        
      </main>

     
    </>
  );
};

export default Cutter;
