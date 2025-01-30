import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();


    const handleNavigate = (route) => {
        navigate(route)
    }
  return (
    <Box
    sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"45px",
        background:"#3C2784",
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
        <a href="#" style={{color:"white"}} >
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
        </a>
        <Box sx={{borderLeft:"1px solid white", height:"20px"}} ></Box>
        <a href="#" style={{color:"white"}} >
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
        </a>
        </Box>
    </Box>
  )
}

export default Footer