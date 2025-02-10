import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const SignUPPagesLayout = () => {
  return (
    <div>
      <Box
        sx={{
          boxSizing: "border-box",
          fontFamily: "Poppins",
          width: {
            xs: "100vw",
            sm: "100vw",
            md: "100%",
          },
          height: {
            height: "100vh",
          },

          p: {
            md: "20px 20px",
          },
          // maxWidth: "1440px",
          margin: "0 auto",

          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          minWidth: {
            md: "400px",
          },
          position: "relative",
        }}
      >
        <Box
          sx={{
            flexBasis: {
              md: "50%",
              xs: "100%",
            },
            flexShrink: "1",
            flexGrow: {
              lg: "0",
              md: "1",
            },
            p: {
              xl: "23px 30px",

              md: "0px 30px",
              xs: "0px 20px",
            },
            mt: { lg: "50px", xs: "20px" },

            // bgcolor:"red"
            ml: {
              lg: "70px",
              xs: "0px",
            },
          }}
        >
          <Outlet />
        </Box>
        <Box
          sx={{
            flexBasis: {
              // lg:"500px",
              md: "48%",
            },
            flexShrink: 1,
            flexGrow: 0,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              padding: "80px",
            }}
            src={logo}
            alt=""
          />
        </Box>
      </Box>
    </div>
  );
};

export default SignUPPagesLayout;
