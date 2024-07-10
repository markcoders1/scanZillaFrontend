import { Box, Typography } from '@mui/material'
import React from 'react'

const ProfileCard = ({
    title="",
    name="",
    action="",
    cb=()=>{}
}) => {
  return (
    <Box sx={{
        boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
        padding:"22px 26px",
        borderRadius:"10px",
     }}>

       <Typography sx={{
         color:"#A0A4A9",
         fontWeight:"500",
         fontSize:{
          sm:"20px",
          xs:"16px"
         },
         lineHeight:"30px"
       }}>
      {title}
       </Typography>
       
       <Typography sx={{
         color:"#333333",
         fontWeight:"600",
         fontSize:{
          sm:"27px",
          xs:"19px"
         },
         lineHeight:"40.5px",
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
         fontSize:"14px",
         lineHeight:"22.5px",
         textDecoration:"underline"
       }} >
       {action}
       </Typography>
       
     </Box>
  )
}

export default ProfileCard