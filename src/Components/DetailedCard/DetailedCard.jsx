import { Box, Typography } from '@mui/material'
import React from 'react'

const DetailedCard = ({
    name="",
    title="",
    action="",
    cb=()=>{}
}) => {
    return (
        <Box sx={{
            boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
            padding:"22px 26px",
            borderRadius:"10px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            height:"100%"
         }}>
    
           <Typography sx={{
             color:"#A0A4A9",
             fontWeight:"500",
             fontSize:"20px",
             lineHeight:"30px"
           }}>
          {title}
           </Typography>
           
           <Typography sx={{
             fontWeight:"600",
             fontSize:"50px",
             lineHeight:"65px",
             color:"#190247"
           }}>
           {name}
           </Typography>
           
           <Typography
           onClick={
            cb
           }
           sx={{
             color:"#190247",
             fontWeight:"500",
             fontSize:"15px",
             lineHeight:"22.5px",
             textDecoration:"underline"
           }} >
           {action}
           </Typography>
           
         </Box>
    )
}

export default DetailedCard