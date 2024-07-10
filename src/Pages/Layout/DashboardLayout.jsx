import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppSidebar from '../AppSidebar/AppSidebar';
import dashboardImg1 from '../../assets/images/dashboard.png';
import Header from '../../Components/Header/Header';
import MobileSidebar from '../../Components/MobileSidebar/MobileSidebar';

const DashboardLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(27, 2, 75, .7), rgba(27, 2, 75, .8)), url(${dashboardImg1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: "20px 30px",
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: '1440px',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            width: {
              lg: '300px',
              xs: '0px', // Hidden on smaller screens
            },
            position: 'relative',
            height: '100%',
            zIndex: 1,
            display: {
              xs: 'none',
              lg: 'block',
            },
          }}
        >
          <AppSidebar />
        </Box>
        <Box>
          <MobileSidebar />
        </Box>
        <Box
          sx={{
            marginLeft: {
              lg: '0px', // Adjust to match sidebar width
              xs: '0px',
            },
            width: '100%',
            maxWidth: '1240px',
            padding: {
              sm: '50px',
              xs: '30px 20px',
            },
            backgroundColor: 'white',
            borderRadius: '30px',
            boxSizing: 'border-box',
          }}
        >
          <Header />
          <Box
            sx={{
              mt: "20px"
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
