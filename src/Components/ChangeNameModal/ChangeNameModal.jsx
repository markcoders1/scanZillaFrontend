import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Heading from '../Heading/Heading';
import CustomTextField from '../CustomInputField/CustomInputField';
import CustomButton from '../CustomButton/CustomButton';
import Loader from '../Loader/Loader';
import SnackAlert from '../SnackAlert/SnackAlert';
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';
const appUrl = import.meta.env.VITE_REACT_APP_API_URL;
import { useDispatch } from 'react-redux';
import { handleAuth } from '../../Redux/Slice/UserSlice/UserSlice';

const ChangeNameModal = ({
  open = false,
  handleClose = () => {},
  onNameChange
}) => {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const [snackAlertData, setSnackAlertData] = React.useState({
    message: '',
    severity: 'success',
    open: false,
  });
  const [data, setData] = React.useState({
    name: '',
  });

  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
      xs: '90%',
      md: '600px',
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: 'none',
    borderRadius: '20px',
    p: 4,
  };

  const updateName = async () => {
    setSnackAlertData({
      open: false,
      message: '',
      severity: 'success',
    });

    if (!data?.name) {
      return setSnackAlertData({
        open: true,
        message: 'Name is required',
        severity: 'error',
      });
    }

    try {
      setLoading(true);
      const response = await axiosInstance({
        url: appUrl + '/changeName',
        method: 'post',
        data: data,
      });
      setLoading(false);
      onNameChange(name); // Update the name in parent component
      handleClose(); // Close the modal
      console.log(response);
       dispatch(handleAuth({
        userName: response.data.user.userName  
       }))

      if (response) {
        setSnackAlertData({
          open: true,
          message: "Name Updated Successfully",
          severity: 'success',
        });
        if (response?.code > 200) {
          setSnackAlertData({
            open: true,
            message: response?.message,
            severity: 'error',
          });
        }
      }
   
    } catch (error) {
      setLoading(false);
      setSnackAlertData({
        open: true,
        message: error.toString(),
        severity: 'error',
      });
      handleClose(); // Close the modal

    }
  };

  return (
    <>
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
            <Heading Heading="Change Name" />
            <Box sx={{ mt: '20px' }}>
              <Typography sx={{ my: '10px' }}>Name</Typography>
              <CustomTextField
                handleKeyDown={() => {}}
                onChange={handleInput}
                name="name"
                value={data?.name}
                placeholder="Enter your name"
                border=""
                boxShadow={true}
              />
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CustomButton
                  loading={loading}
                  border="2px solid #1A0049"
                  borderRadius="10px"
                  background="#1A0049"
                  hoverBg="white"
                  hovercolor="#1A0049"
                  buttonTextStyle={{}}
                  buttonStyle={{
                    padding: {
                      xs: '20px 40px',
                    },
                  }}
                  ButtonText="Change Name"
                  color={'white'}
                  fullWidth={false}
                  variant="contained"
                  padding
                  onClick={updateName}
                />
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <SnackAlert
        message={snackAlertData.message}
        severity={snackAlertData.severity}
        open={snackAlertData.open}
        handleClose={() => {
          setSnackAlertData((prev) => ({ ...prev, open: false }));
        }}
      />
    </>
  );
};

export default ChangeNameModal;
