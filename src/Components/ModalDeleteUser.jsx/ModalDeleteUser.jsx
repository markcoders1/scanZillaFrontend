import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Heading from '../Heading/Heading';
import CustomButton from '../CustomButton/CustomButton';
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';

const DeleteUserModal = ({
  open = false,
  handleClose = () => {},
  user = null,
  onDeleteSuccess = () => {}
}) => {
  const [loading, setLoading] = React.useState(false);
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
      xs: "90%",
      md: "600px"
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: "none",
    borderRadius: "20px",
    p: 4,
  };

  const deleteUser = async () => {
    if (!user || !user._id) return;
    
    try {
      setLoading(true);
      const response = await axiosInstance({
        url: `/user/${user._id}`,
        method: "delete",
      });
      
      if (response?.data?.success) {
        onDeleteSuccess();
        handleClose();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Heading Heading="Delete User" />
          <Box sx={{ mt: "20px" }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
              Are you sure you want to delete this user?
            </Typography>
            
            {user && (
              <Box sx={{ 
                backgroundColor: '#f5f5f5', 
                borderRadius: '10px', 
                p: 2, 
                mb: 3,
                textAlign: 'center'
              }}>
                <Typography variant="subtitle1">
                  {user.userName || 'Unknown User'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email || ''}
                </Typography>
              </Box>
            )}
            
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px"
            }}>
              <CustomButton
                border="2px solid #1A0049"
                borderRadius="10px"
                background="#1A0049"
                hoverBg="white"
                hovercolor="#1A0049"
                buttonStyle={{
                  padding: {
                    xs: "20px 40px"
                  },
                }}
                ButtonText="Cancel"
                fontSize
                color={"white"}
                fontWeight
                fullWidth={false}
                variant="contained"
                padding
                onClick={handleClose}
              />
              
              <CustomButton
                loading={loading}
                border="2px solid #ff4444"
                borderRadius="10px"
                background="#ff4444"
                hoverBg="white"
                hovercolor="#ff4444"
                buttonStyle={{
                  padding: {
                    xs: "20px 40px"
                  },
                }}
                ButtonText="Delete"
                fontSize
                color={"white"}
                fontWeight
                fullWidth={false}
                variant="contained"
                padding
                onClick={deleteUser}
              />
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeleteUserModal;