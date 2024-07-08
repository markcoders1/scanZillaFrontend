import React from 'react'
import { Box, Typography } from '@mui/material'
const PricingBox = () => {
  return (
  <Box
  sx={{
    width:{
        
        md: "204px"

    },
    padding:"9px 16px ",
    boxShadow:"4px 5px 15px 0px #C8C8C8",
    borderRadius:"10px  "
  }}
  >
    <Typography
    sx={{
        fontSize:"15px",
        color:"#333333",
    }}
    >
        Free
    </Typography>
    <Box
    sx={{
        position:"relative",
        display:"flex",
        height:"60px",
        width:"90px",
        margin:"auto"
        
    }}
    >
        <Typography
        sx={{
            fontSize:"15px",
            color:"#190247",
            position:"absolute",
            top:"10px",
            fontWeight:"500"
        }}
        >
            $
        </Typography>
        <Typography
        sx={{
            fontSize:"50px",
            color:"#190247",
             position:"absolute",
            left:"8px",
             fontWeight:"500"
            
        }}
        >
            0
        </Typography>
        <Typography
         sx={{
            fontSize:"13px",
            color:"#190247",
             position:"absolute",
            left:"38px",
            top:"40px",
             fontWeight:"500"
        }}
        >
            / mo
        </Typography>

       
    </Box>
    <Box
    sx={{
        borderBottom:"1px solid #B8B8B8",
        marginTop:"19px",

    }}
    ></Box>
    <Box
    sx={{
        padding:"10px 15px",
        fontSize:"14px",
        color:"#333333",
        fontWeight:"500 "
    }}
    >
    <ul>


        <li>7 analyze</li>
        <li>limited Access</li>

        <li>loremimpsum</li>

        <li>loremimpsum</li>

    </ul></Box>
  </Box>
  )
}

export default PricingBox