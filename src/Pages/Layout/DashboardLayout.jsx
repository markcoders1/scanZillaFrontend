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
          padding: "30px",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            margin:"auto",
            maxWidth:"1470px",

          }}
        >


          <Box
            sx={{
              color: "white",
              padding:"0px 20px",

              flexGrow: "0",
              flexShrink: "1",
            }}
          >
            <AppSidebar />
          </Box>

          <Box
            sx={{
              flexGrow: "1",
              backgroundColor: "white",
              borderRadius: "30px",
            }}
          >
            <Box
              sx={{
                flexBasis:"70%",
                flexShrink:"1",
                p: {
                  lg: "56px 68px 48px 68px",
                  md: "50px 58px 38px 48px"
                }
              }}
            >
              <Header />
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>



    </>
  )
}

export default DashboardLayout
