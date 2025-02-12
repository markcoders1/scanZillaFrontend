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
        <Link to="unauth/privacy-notice" style={{ color: "white" }}>
          <Typography
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
        </Link>
        <Box sx={{ borderLeft: "1px solid white", height: "20px" }}></Box>
        <Link to={"/unauth/terms-of-service"} style={{ color: "white" }}>
          <Typography
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
        </Link>
      </Box>
    </Box>
  );
};

export default Footer1;
