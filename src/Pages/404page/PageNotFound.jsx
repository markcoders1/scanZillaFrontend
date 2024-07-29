import React from 'react'
import { Box, Typography } from '@mui/material'
import notFound from '../../assets/images/pagenotfound.png'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { NavLink , useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PageNotFound = () => {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const HandleNavigate = () => {
        if (auth.role == "admin"){
            navigate("/dashboard-admin")
        } else {
            navigate("/dashboard")
        }
    }

    
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
                gap: "1.3rem"
            }}
        >
            <Box
                sx={{
                    // border: "2px solid red",
                    fontWeight: "600",
                    fontSize: "40px",
                    color: "#D081FF",
                    mt:"40px"

                }}
            >
                ScanZilla
            </Box>
            <Box
                sx={{
                    maxWidth: "784px",
                    width: "100%"
                }}
            >
                <img src={notFound} alt="" />
            </Box>
            <Box
            sx={{
                mb:"20px",
                display:"flex",
                flexDirection:"column",
                gap:"0.6rem",
                maxWidth:"500px",

            }}
            >
                <Typography sx={{
                    fontWeight: "600",
                    fontSize: "35px",
                    color: "#333333",
                    textAlign:"center"
                }} >
                    Page Not Found
                </Typography>
                <Typography sx={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#A0A4A9",
                    textAlign:"center"
                }} >
                    We're sorry, the page you requested could not be found
                    please go back to the homepage
                </Typography>
            </Box>
            <Box
            
            >
            <CustomButton
                borderRadius="8px"
                padding="12px 0px"
                fontSize="14px"
                ButtonText="Back"
                width={"143px"}
                color="white"
                background="linear-gradient(to right, #1A0049, #3F016A)"
                onClick={HandleNavigate}
              />
            </Box>
        </Box>
    )
}

export default PageNotFound