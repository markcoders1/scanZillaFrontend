import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import editIcon from '../../assets/images/edit.png';
import ChangeNameModal from '../ChangeNameModal/ChangeNameModal'; // Import the modal
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';

const ProfileCard = ({
  title = "",
  name = "",
  action = "",
  cb = () => {},
  iconToSHow = false
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open the ChangeNameModal
  const handleEditClick = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Optional: Handle the name change callback if needed after submitting the modal
  const handleNameChange = (newName) => {
    // Update the name on the profile card or trigger any other logic
    console.log('New Name:', newName);
    // Optionally trigger the provided callback here
    cb(newName);
  };

  return (
    <Box sx={{
      boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
      padding: "22px 26px",
      borderRadius: "10px",
      height: "150px",
      position: "relative",
    }}>
      {
        iconToSHow && (
          <Box
            sx={{
              position: "absolute",
              right: "20px",
              cursor: "pointer",
              width: "35px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              ":hover": {
                backgroundColor: "#f0e6e6",
              }
            }}
            onClick={handleEditClick} // Open the modal when the icon is clicked
          >
            <img src={editIcon} style={{ width: "20px" }} alt="edit" />
          </Box>
        )
      }

      <Typography sx={{
        color: "#A0A4A9",
        fontWeight: "500",
        fontSize: { sm: "20px", xs: "16px" },
        lineHeight: "40px"
      }}>
        {title}
      </Typography>

      <Typography sx={{
        color: "#333333",
        fontWeight: "600",
        fontSize: { sm: "27px", xs: "16px" },
        lineHeight: "40.5px",
      }}>
        {name}
      </Typography>

      <Typography
        onClick={cb}
        sx={{
          color: "#190247",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "22.5px",
          textDecoration: "underline"
        }}>
        {action}
      </Typography>

      {/* Include the ChangeNameModal here */}
      <ChangeNameModal 
        open={modalOpen} 
        handleClose={handleCloseModal} 
        onNameChange={handleNameChange} // Pass the name change handler if needed
      />
    </Box>
  );
};

export default ProfileCard;
