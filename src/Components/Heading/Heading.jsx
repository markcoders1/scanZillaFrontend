import { Box, Typography } from '@mui/material'
import React from 'react'

const Heading = ({
  Heading = "",
  characterText = "",
  count = "",
  number
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
      gap:"0.1rem"
    }}
    >
      {number?
        <Typography sx={{ fontSize: "16px", fontWeight: "300", lineHeight: "16px" }}>
        {number}
        </Typography>
        :
        <Typography sx={{ fontSize: "22px", fontWeight: "600", lineHeight: "33px" }}>
        {Heading}
        </Typography>
      }
      <Typography sx={{
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "33px"
      }}>
        {characterText} &nbsp; {count}
      </Typography>
    </Box>

  )
}

export default Heading