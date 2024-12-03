import { Box, Typography } from '@mui/material'
import React from 'react'
import MenuBar from '../MenuBar/MenuBar'

const Header = ({ title, sx }) => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      p: {
        sm: "0px 30px 0px 0px",
        xs: "0px 15px 0px 15px"
      },
      alignItems: "center",
      
    }}>
      <Typography sx={{
        color: "#333333",
        fontWeight: "600",
        fontSize: {
          sm: "40px",
          xs: "26px"
        },
        ...sx
      }}>
        {title}
      </Typography>
      <Typography
        sx={{
          display: {
            lg: "none",
            xs: "flex"
          }
        }}
      >
        <MenuBar />
      </Typography>
    </Box>
  )
}

export default Header
