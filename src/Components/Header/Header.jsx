import { Box, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const {pathname} = useLocation()
  return (
    <Box sx={{
      mb:"26px"
    }}>
              <Typography sx={{
                color:"#333333",
                fontWeight:"600",
                fontSize:"40px",
                lineHeight:"50px"
              }}>
              {`${pathname?.split("/")[1]?.charAt(0).toLocaleUpperCase()}${pathname?.split("/")[1]?.slice(1)}`}
              </Typography>
            
            </Box>
  )
}

export default Header