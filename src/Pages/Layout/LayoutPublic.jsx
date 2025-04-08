import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import background1 from "../../assets/images/LoginImg.webp";
import background2 from "../../assets/images/SignupBackground.webp";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import logo from "../../assets/images/sample.webp";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import { useSelector, useDispatch } from "react-redux";

import Footer1 from "../../Components/Footer/Footer1";

import { useLocation } from "react-router-dom";

const LayoutPublic = () => {
  const snackAlert = useSelector((state) => state.snackAlert);
  const dispatch = useDispatch();

  const handleCloseSnackAlert = () => {
    dispatch(
      handleSnackAlert({
        open: false,
      })
    );
  };

  const location = useLocation();

  return (
    <div style={{ position: "relative" }}>

        <Outlet />
        <Box
        sx={{
          width: "100%",
          position:'sticky',
          bottom:'0px'
        }}
      >
        <Footer1 />
      </Box>
      <SnackAlert
        open={snackAlert?.open}
        message={snackAlert.message}
        severity={snackAlert?.severity}
        handleClose={handleCloseSnackAlert}
      />
    </div>
  );
};

export default LayoutPublic;
