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
          padding: "50px",
          minHeight:"100vh",
          gap: "2rem",
          boxSizing:"border-box",

        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: {
              lg:"2rem",
              xs:"0px"
            },
            margin:"auto",
            maxWidth:"1470px",

          }}
        >


          <Box
            sx={{
              color: "white",
              padding:{
                lg:"0px 20px",
                xs:"0"
              },

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
                boxSizing:"border-box",
                p: {
                  lg: "56px 68px 48px 68px",
                  md: "50px 58px 38px 48px",
                  xs:"40px"
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
