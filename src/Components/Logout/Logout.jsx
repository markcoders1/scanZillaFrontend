import { Box } from "@mui/material";
import { FaPowerOff } from "react-icons/fa";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";
import CustomButton from "../CustomButton/CustomButton";
import { BiBorderRadius } from "react-icons/bi";

const Logout = () => {
  const auth = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = ()=>{
    dispatch(
        handleSnackAlert({
          open: true,
          message: "Logout successfully.",
          severity: "success",
        })
      );
      sessionStorage.clear()
      localStorage.clear()
      navigate("/", {replace:true})
      dispatch(handleAuth({
        message: null,
        accessToken: null,
        refreshToken: null,
        _id: null,
        userName: null,
        email: null,
        credits: null,
        autocharge: null,
        active: null,
        createdAt: null,
        updatedAt: null,
        __v: null,
        customerId: null,
        success: null,
        authenticated: false,
      }))
  }
  return (
    <>
      {auth?.authenticated ? (
        <Box
      onClick={handleLogout}
          sx={{
            fontSize: "clamp(1vw, 2rem, 10vw)",
            cursor:"pointer"
          }}
        >
          <CustomButton
          buttonStyle={{
            borderRadius:"8px",
            padding:{
              md : "15px 35px",
              xs: "5px 10px"
            }
          }}
          border={"2px solid white"}
          ButtonText={"Log Out"}
          color={"white"}
          fontSize={"14px"}
          
          />
        </Box>
      ) : null}
    </>
  );
};

export default Logout;
