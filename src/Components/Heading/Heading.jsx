import { Box, Typography } from '@mui/material'
import React from 'react'

const Heading = ({
  Heading = "",
  characterText = "",
  count = "",
  number,
  headingstyle,
  creditText,
  creditUtilized,
  sx,
  bgTrue= false,

}) => {
  return (
    <Box
    sx={{
      display:"flex",
      justifyContent:"space-between",
      flexDirection:{
        sm:"row",
        xs:"column", 
      },
      gap:"0.1rem",
      ...headingstyle
    }}
    >
      {number?
        <Typography sx={{ fontSize: "16px", fontWeight: "300", lineHeight: "16px" }}>
        {number}
        </Typography>
        :
        <Typography sx={{ fontSize: "22px", fontWeight: "600", lineHeight: "33px", zIndex: bgTrue ? 2000 : 0 }}>
        {Heading}
        </Typography>
      }
      <Box
      sx={{
        display:"flex",
        ...sx
      }}
      >

      <Typography sx={{
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "33px"
      }}>
        {characterText} &nbsp; {count}
      </Typography>
      <Typography sx={{
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "33px"
      }}>
        {creditText} &nbsp; {creditUtilized}
      </Typography>
        </Box>
    </Box>

  )
}

export default Heading