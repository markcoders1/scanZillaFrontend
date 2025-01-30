import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
    sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"45px",
        background:"#13ABFF",
        color:"white",
        width:"100vw",
        fontFamily: "Oswald !important",
        fontSize:"13px"
        
    }}
    >
        <Box
        sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:'1rem'
        }}
        >
      <Typography
  sx={{
    fontFamily: "Oswald !important",
    fontSize: {
        sm:"13px",
        xs:"11px"
    },
  
  }}
>
  ScanZilla Co.
</Typography>
        <Box sx={{borderLeft:"1px solid white", height:"20px"}} ></Box>
        <Typography
          sx={{
            fontFamily: "Oswald !important",
            fontSize: {
                sm:"13px",
                xs:"11px"
            },
            cursor: "pointer",
            transition:".1s ease-in",
            "&:hover": {
              color: "black",
            },
          }}
        >
     Privacy Notice

        </Typography>
        <Box sx={{borderLeft:"1px solid white", height:"20px"}} ></Box>

        <Typography
        sx={{
            fontFamily: "Oswald !important",
            fontSize: {
                sm:"13px",
                xs:"11px"
            },
            cursor: "pointer",
            transition:".1s ease-in",
            "&:hover": {
              color: "black",
            },
          }}
        >
        Terms of Service
        </Typography>
        </Box>
    </Box>
  )
}

export default Footer