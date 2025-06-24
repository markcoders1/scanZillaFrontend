import React from "react";
import { Box, Typography } from "@mui/material";
import notFound from "../../assets/images/pagenotfound.png";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/images/sample.webp";

const LoginFallBack = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const HandleNavigate = () => {
    if (auth.role == "admin") {
      navigate("/dashboard-admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "1440px",
        // backgroundColor: "black",
        margin: "auto",
        height: "100vh",
        color: "white",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1.3rem",
      }}
    >
      {/* <Box
                sx={{
                    // border: "2px solid red",
                    fontWeight: "600",
                    fontSize: "40px",
                    color: "#D081FF",
                    mt:"40px"

                }}
            >
                ScanZilla
            </Box> */}
      <Box>
        <img
          src={logo}
          alt=""
          style={{
            width: "120px",
            backgroundColor: "transparent",
              marginTop:"30px"
            // marginLeft: "-20px",
          }}
        />
      </Box>
      <Box
        sx={{
          mb: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          maxWidth: "500px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "35px",
            color: "#333333",
            textAlign: "center",
          }}
        >
          We're temporarily offline for maintenance
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "16px",
            color: "#A0A4A9",
            textAlign: "center",
          }}
        >
          We're working hard to get things back up and running. <br />
          please check back in a little while
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginFallBack;
