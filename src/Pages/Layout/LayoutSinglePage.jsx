import { Box } from "@mui/material";
import {Outlet } from "react-router-dom";
import React from 'react'
import background1 from "../../assets/images/LoginImg.webp";
import background2 from "../../assets/images/SignupBackground.webp";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";


import { useLocation } from "react-router-dom";

const LayoutSinglePage = () => {

    const location = useLocation();

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
              md: "400px"
            },
          
          }}
        >
            <Box
             sx={{
                flexBasis: {
                  xs: "50%",
                },
                flexShrink: "1",
                flexGrow: {
                    lg:"0",
                    md:"1"
                },
                p: {
                  md: "23px 30px",
                  xs: "60px 20px",
      
                },
                mt:"50px",



                
                // bgcolor:"red"
                ml:{
                  sm:"70px",
                  xs:"0px"

                }
              }}
            >
            <Outlet/>
            </Box>
            <Box
        sx={{
          flexBasis: {
            // lg:"500px",
            md: "38%",


          },
          flexShrink: 1,
          flexGrow:0,
          display: {
            xs: "none",
            md: "block",
          },
          
        }}
      >
       
        <img
          style={{
            width: "100%",
            height: "100%"
          }}
          src={location.pathname ==="/signup" ? background2 : background1 } alt="" />

      </Box>

        </Box>
    </div>
  )
}

export default LayoutSinglePage