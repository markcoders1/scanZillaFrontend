import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import './SwitchCheckBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleAuth } from '../../Redux/Slice/UserSlice/UserSlice';
import SnackAlert from '../SnackAlert/SnackAlert';
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';
const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const SwitchCheckBox = ({ theme }) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(auth?.autocharge);
  const [snackAlertData, setSnackAlertData] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  useEffect(() => {
    setIsChecked(auth?.autocharge);
  }, [auth?.autocharge]);

  const handleAutoCharge = () => {
    dispatch(
      handleAuth({
        autocharge: !auth.autocharge
      })
    );
  };

  const handleToggleAutoCredits = async () => {
    try {
      await axiosInstance({ url: appUrl + "/toggleautocredit", method: "GET" })
        .then(response => {
          if (response) {
            response = response?.data;

            setSnackAlertData({
              open: true,
              message: response?.message,
              severity: "success",
            });
          }
        })
        .catch(error => {
          if (error && error?.response && error?.response?.data && error?.response?.data.message) {
            console.log("error.data.message", error?.response?.data?.message);
            setSnackAlertData({
              open: true,
              message: error?.response?.data?.message,
              severity: "error",
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    handleAutoCharge();
    handleToggleAutoCredits();
  };

  return (
    <Box>
      <label className={`switch-checkbox ${theme}`}>
        <input value={isChecked} checked={isChecked} onChange={handleChange} type="checkbox" />
        <span className="slider round"></span>
        <p style={{  color: auth.autocharge ? "#fff " : "#190247", paddingLeft: "10px", paddingTop: "5px" }}>
          {auth.autocharge ? "on" : "Off"}
        </p>
        
      </label>
      <SnackAlert
        severity={snackAlertData.severity}
        message={snackAlertData.message}
        open={snackAlertData.open}
        handleClose={() => { setSnackAlertData(prev => ({ ...prev, open: false })) }}
      />
    </Box>
  );
}

export default SwitchCheckBox;
