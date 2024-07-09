import React from 'react'
import bg from "./../../assets/images/bg.png"
import visa from "./../../assets/images/visa circles.png"
import { Box, Typography } from '@mui/material'

const CardIWithImageBackground = ({
    title="",
    text="" 
}) => {
  return (
    <Box sx={{
        background: `linear-gradient(rgba(27, 2, 75, .1), rgba(27, 2, 75, .1)), url(${bg})`,
        backgroundSize: "cover", backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        position: "relative",
        color: "white",
        padding: "26px 32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height:"100%",
         boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",

    }}>

        <Typography sx={{
            fontWeight: "600",
            fontSize: "27px",
            lineHeight: "40px"
        }}>
            {title}
        </Typography>
        <Typography sx={{
            fontWeight: "600",
            fontSize: "27px",
            lineHeight: "40px"
        }}>
            {text}
        </Typography>

        
    </Box>
  )
}

export default CardIWithImageBackground