import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";


const Footer1 = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "45px",
        background: "#3C2784",
        color: "white",
        width: "100%",
        fontFamily: "Oswald !important",
        fontSize: "13px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Box  style={{ color: "white" }}>
          <Typography
           onClick={()=> navigate("/privacy-notice")}
            sx={{
              fontFamily: "Oswald !important",
              fontSize: {
                sm: "13px",
                xs: "11px",
              },
              cursor: "pointer",
              transition: ".1s ease-in",
              "&:hover": {
              textDecoration:"underline"
              },
            }}
          >
            Privacy Notice
          </Typography>
        </Box>
        <Box sx={{ borderLeft: "1px solid white", height: "20px" }}></Box>
        <Box  style={{ color: "white" }}>
          <Typography
          onClick={()=> navigate("/terms-of-service")}
            sx={{
              fontFamily: "Oswald !important",
              fontSize: {
                sm: "13px",
                xs: "11px",
              },
              cursor: "pointer",
              transition: ".1s ease-in",
              "&:hover": {
                textDecoration:"underline"

              },
            }}
          >
            Terms of Service
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer1;
