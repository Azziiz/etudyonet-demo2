import { Box, Modal, Slider, Button } from "@mui/material";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { FcAddImage } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";



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
  const {setPhotoChange} = UserAuth()

  //handle save
  const handleSave = async () => {
    if (cropRef) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      setPreview(URL.createObjectURL(blob));
      setPhotoChange(dataUrl)
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
          border={50}
          borderRadius={150}
          color={[0, 0, 0, 0.72]}
          scale={slideValue / 10}
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
            sx={{ marginRight: "10px", color: "#FF8C00", textTransform: 'none', borderColor: "#FF8C00", border: "1px solid #FF8C00", backgroundColor: "transparent", '&:hover': {
                color: "white",
                backgroundColor: "#FF8C00"
             }
              }}
            onClick={(e) => setModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            sx={{ background: "#FF8C00", color: "white", textTransform: 'none', '&:hover': {
                color: "#FF8C00",
                backgroundColor: "transparent"
             } }}
            size="small"
            onClick={handleSave}
          >
            Upload photo
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

// Container
const Cropper = ({photoURL}) => {
  // image src
  const [src, setSrc] = useState(null);

  const [upload, setUpload] = useState(false)

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
      <div className="container">
        
      <div className="img-container" onClick={() => {setUpload(true)}}>
          <img
            src={
              preview ||
              photoURL
            }
            alt=""
            width="180"
            height="180"
          />
        </div>

        <CropperModal
          modalOpen={modalOpen}
          src={src}
          setPreview={setPreview}
          setModalOpen={setModalOpen}
        />
        { upload && !preview &&
          <a href="/" onClick={handleInputClick} >
            <button id='upload' >Upload</button>
          </a>
        }
        {
          !modalOpen && preview &&
          <button disabled id='wait'><div className="dots-5"></div></button>
        }
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImgChange}
          hidden
        />
        
      </div>

     
    </>
  );
};

export default Cropper;
