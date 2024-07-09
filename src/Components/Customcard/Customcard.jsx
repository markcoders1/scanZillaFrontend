import React from 'react'
import bg from "./../../assets/images/bg.png"
import visa from "./../../assets/images/visa circles.png"
import { Box, Typography } from '@mui/material'
const Customcard = () => {
    return (
        <Box sx={{
            background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${bg})`,
            backgroundSize: "cover", backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            position: "relative",
            color: "white",
            padding: "26px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height:"100%",
             boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",

        }}>

            <Typography sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px"
            }}>
                Debit Card
            </Typography>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px"
            }}>
                <Typography sx={{
                    fontSize: "18px",
                    lineHeight: "27px",
                    fontWeight: "400"
                }}>
                    **** **** **** 9369
                </Typography>

                <Typography sx={{
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "400"
                }}>
                    Samantha
                </Typography>
            </Box>

            <Box sx={{
                position: "absolute",
                bottom: "15px",
                right: "40px"
            }}>
                <img src={visa} />

            </Box>
        </Box>
    )
}

export default Customcard