import { Box, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AppSidebar from '../AppSidebar/AppSidebar'
import dashboardImg from '../../assets/images/dashoardImg.png'
import dashboardImg1 from '../../assets/images/dashboard.png'
import Header from '../../Components/Header/Header'

const DashboardLayout = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, 0.7)), url(${dashboardImg1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          padding:"30px"
        }}
      >
        <Box
          sx={{
            color: "white",
            width: {
              xl: "500px",
            },
            
            flexGrow: "0",
            flexShrink: "1",
          }}
        >
          <AppSidebar />
        </Box>

        <Box
          sx={{
            flexGrow:"1",
            backgroundColor:"white",
            borderRadius:"30px",
          }}
        >
          <Box
          sx={{
            p:{
              lg:"68px 48px"
            }
          }}
          >
            <Header/>
          <Outlet />
          </Box>
        </Box>
      </Box>


      
    </>
  )
}

export default DashboardLayout
