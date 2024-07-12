import { Box, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import MenuBar from '../MenuBar/MenuBar'


const Header = () => {
    const {pathname} = useLocation()
  return (
    <Box sx={{
      display:"flex",
      justifyContent:"space-between",
      p:{
        sm:"0px 30px 0px 0px",
        xs:"0px 20px 0px 20px"
      },
      alignItems:"center",
    }}>
              <Typography sx={{
                color:"#333333",
                fontWeight:"600",
                fontSize:{
                  sm:"40px",
                  xs:"29px"
                },
              }}>
              {`${pathname?.split("/")[1]?.charAt(0).toLocaleUpperCase()}${pathname?.split("/")[1]?.slice(1)}`}
              </Typography>
            <Typography
            sx={{
              display:{
                lg:"none",
                xs : "flex"
              }
            }}
            >
              <MenuBar/>
            </Typography>
            </Box>
  )
}

export default Header